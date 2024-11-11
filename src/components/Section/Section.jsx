import styles from "./Section.module.css";
import { useEffect, useState } from "react";
import Cards from "../Card/Card";
import Carousel from "../Carousel";
function Section({ data, title }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
          <h3>{title}</h3>
          <button className={styles.button} onClick={handleToggle}>
            {toggle ? "show all" : "Collapse All"}
          </button>
      </div>
      {data && data.length > 0 && (
        <div className={styles.cardWrapper}>
          {!toggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Cards album={item} />;
              })}
            </div>
          ) : (
            <>
              <Carousel
                data={data}
                component={(data) => <Cards album={data} />}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default Section;
