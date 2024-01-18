
import styles from './statistics.module.css';

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statisticsContainer}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.statBlock}>
        {stats.map(({ id, label, percentage }) => (
          <div key={id} className={styles.item} style={{ backgroundColor: generateRandomColor() }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
