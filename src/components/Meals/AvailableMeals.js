import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://quickmeals-18580-default-rtdb.firebaseio.com/dishes.json'
      );

      if (!response.ok) {
        throw new Error("Couldn't load available meals...=/");
      }

      const resData = await response.json();

      const availableDishes = [];

      for (const key in resData) {
        availableDishes.push({
          id: resData[key].name,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }
      setMeals(availableDishes);
      setIsLoading(false);
    };

    fetchDishes().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes['meals-error']}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
