import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/features.jpeg",
    "/images/features1.jpeg",
    "/images/features2.jpeg",
    "/images/features3.jpeg",
    "/images/features4.jpeg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 3);
    }
    if (direction === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };
  // console.log(index);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          layout="fill"
          src="/images/arrowl.png"
          alt=""
          onClick={() => handleArrow("l")}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => {
          return (
            <div className={styles.imgContainer} 
                key={i}>
              <Image
                layout="fill"
                src={img}
                alt="pizza"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image layout="fill" src="/images/arrowr.png" alt="" />
      </div>
    </div>
  );
};
export default Featured;
