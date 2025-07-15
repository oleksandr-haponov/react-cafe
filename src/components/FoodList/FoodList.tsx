import { useEffect, useState } from 'react';
import styles from './FoodList.module.css';
import FoodItem from '../FoodItem/FoodItem';
import type { Food } from '../../types/votes';

function FoodList() {
  const [foods, setFoods] = useState<Food[] | null>(null);

  useEffect(() => {
    // симуляція API
    setTimeout(() => {
      const data: Food[] = [
        {
          name: 'Капучино',
          price: 68,
          image:
            'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Десерт «Тірамісу»',
          price: 85,
          image:
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80',
        },
        {
          name: 'Панкейк з ягодами',
          price: 125,
          image:
            'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
        },
        {
          name: 'Плов самаркандський',
          price: 110,
          image:
            'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80',
        },
      ];
      setFoods(data);
    }, 1000);
  }, []);

  if (!foods) {
    return <p style={{ color: '#999' }}>Завантаження страв...</p>;
  }

  return (
    <ul className={styles.list}>
      {foods.map((item) => (
        <FoodItem
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default FoodList;
