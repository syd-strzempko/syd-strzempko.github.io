import styles from './Section.module.css';

const Section = ({left, right}) => {
  return (
    <div className={styles.section}>
      <div className={styles.left}>
        <div className={styles.body}>{left}</div>
      </div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}

export default Section;