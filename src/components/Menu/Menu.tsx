import styles from './Menu.module.css';
import FoodList from '../FoodList/FoodList';

function Menu() {
  return (
    <section className={styles.menu}>
      <h2 className={styles.title}>Меню</h2>
      <FoodList />
    </section>
  );
}

export default Menu;