import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/telephone.png"
            height={32}
            width={32}
            alt="telephone"
          />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW !</div>
          <div className={styles.text}>076 9898 3441</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={"/"} passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href={"/Product"} passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/images/logo.png"
            alt="logo"
            width="160px"
            height="69px"
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contacts</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src="/images/cart.png"
              alt="cart"
              width="30px"
              height="30px"
            />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
