import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" layout="fill" alt="footer" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES,WE DID THE LAMA PIZZA WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND PIR RESTURANT</h1>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
          <p className={styles.text}>
            Times Of India Press Road, <br /> Ahmedabad <br /> India
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FIRDAY <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY-SUNDAY <br /> 12:00 - 00:00
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
