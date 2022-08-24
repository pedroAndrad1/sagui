import styles from "./NoItemFound.module.scss";

interface NoItemFoundProps {
  message: string;
}

const NoItemFound = ({ message }: NoItemFoundProps) => {
  return (
    <figure className={styles.sem_items}>
      <img src="/sad-smile.svg" alt="Smile triste" />
      <span>{message}</span>
    </figure>
  );
};

export default NoItemFound;
