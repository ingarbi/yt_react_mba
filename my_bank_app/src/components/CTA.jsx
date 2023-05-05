import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From its medieval origins to the digital era, learn everything there is
        to know about the ubiquitous lorem ipsum passage.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
