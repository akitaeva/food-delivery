import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: "fv329837d",
    name: "Sushi",
    description: "Finest fresh fish and veggies",
    price: 22.99,
  },
  {
    id: "667hdfvm2",
    name: "Schnitzel",
    description: "An austrian specialty!",
    price: 16.5,
  },
  {
    id: "ji92cme23",
    name: "Barbecue Burger",
    description: "American classic, juicy and smoky",
    price: 12.99,
  },
  {
    id: "gh289dqe4",
    name: "Green Power Bowl",
    description: "Healthy load of nutrition without guilt",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
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
