import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'fv329837d',
    name: 'Tuna Carpaccio',
    description: 'Finest fresh fish and seasonal produce',
    price: 22.99,
  },
  {
    id: '667hdfvm2',
    name: 'Grilled Octopus ',
    description: 'An soouth Italian specialty!',
    price: 16.5,
  },
  {
    id: 'ji92cme23',
    name: 'Barbecue Burger',
    description: 'American classic, juicy and smoky',
    price: 15.99,
  },
  {
    id: 'biu3628cb',
    name: 'Mozzarella Panini',
    description: 'Melted cheese with fresh tomato sauce and basil pesto',
    price: 12.99,
  },
  {
    id: 'gh289dqe4',
    name: 'Green Power Bowl',
    description: 'Healthy load of nutrition without guilt',
    price: 18.99,
  },
  {
    id: '7ubreqe4',
    name: 'Risotto',
    description: 'Asparagus sun dried tomatoes and prawns',
    price: 18.99,
  },
  {
    id: 'gh289dqe4',
    name: 'Eggplant Parmigiana',
    description: 'Baked with fresh mozarella and basil',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
