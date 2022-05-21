import styles from "./image-card.module.css";

const ImageCard = (props: any) => {
  const { imageUrl } = props;
  return (
    <div className={styles.cardContainer}>
      <img src={imageUrl} width="100%" height="200px" />
      <div className={styles.cardBody}>{props.children}</div>
    </div>
  );
};
export default ImageCard;
