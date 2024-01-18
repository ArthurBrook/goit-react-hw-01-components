
import styles from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      {stats && (
        <ul className={styles.stats}>
          {Object.entries(stats).map(([label, quantity]) => (
            <li key={label}>
              <span className={styles.label}>{label} </span>
              <span className={styles.quantity}>{quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
