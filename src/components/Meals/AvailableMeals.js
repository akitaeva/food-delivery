import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'fv329837d',
    name: 'Sushi',
    description: 'Finest fresh fish and veggies',
    price: 22.99,
  },
  {
    id: '667hdfvm2',
    name: 'Schnitzel',
    description: 'An austrian specialty!',
    price: 16.5,
  },
  {
    id: 'ji92cme23',
    name: 'Barbecue Burger',
    description: 'American classic, juicy and smoky',
    price: 12.99,
  },
  {
    id: 'gh289dqe4',
    name: 'Green Power Bowl',
    description: 'Healthy load of nutrition without guilt',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li key={meal.id}>{meal.name}</li>);

  return <section className={classes.meals}>
    <ul>
      {mealsList}
    </ul>
  </section>
};


export default AvailableMeals;