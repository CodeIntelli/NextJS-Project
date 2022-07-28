import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza.png" alt="" width={500} height="500" />
      <h1 className={styles.title}>Pizza Title Here</h1>
      <span className={styles.price}>$19.99</span>
      <p className={styles.desc}>
        Pizza Descrition Here,Pizza Descrition Here,Pizza Descrition Here,Pizza
        Descrition Here,Pizza Descrition Here,Pizza Descrition Here,Pizza
        Descrition Here
      </p>
    </div>
  );
};
export default PizzaCard;
