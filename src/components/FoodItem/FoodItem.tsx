import styles from './FoodItem.module.css';
import type { Food } from '../../types/votes';

type FoodItemProps = Food;

function FoodItem({ name, price, image }: FoodItemProps) {
  return (
    <li className={styles.item}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price} ₴</p>
      </div>
    </li>
  );
}

export default FoodItem;
