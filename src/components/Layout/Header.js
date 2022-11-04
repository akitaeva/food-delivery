import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import tableTop from '../../assets/tabletop-fauxels.jpeg';
import classes from './Header.module.css';

const Header = props => {
  return <Fragment>
   <header className={classes.header}>
    <h1>QuickMeals</h1>
    <HeaderCartButton>Cart</HeaderCartButton>
   </header>
   <div className={classes['main-image']}>
    <img src={tableTop} alt='Top view of people sharing a meal'/>
   </div>
  </Fragment>
};

export default Header;
