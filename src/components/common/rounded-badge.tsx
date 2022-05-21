import styles from "./rounded-badge.module.css";

const RoundedBadge = (props: any) => {
  return <div className={styles.badge}>{props.children}</div>;
};

export default RoundedBadge;
