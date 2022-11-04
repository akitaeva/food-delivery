import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Deliciousness Delivered To You</h2>
      <p>
        Choose your favorites from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time 
        by our experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
