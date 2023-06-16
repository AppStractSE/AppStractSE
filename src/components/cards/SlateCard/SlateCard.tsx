import { Link } from "react-router-dom";
import styles from "./styling.module.scss";

interface ChildProps {
  title: string;
  description?: string;
  image: string;
  bg?: string;
}

const SlateCardChild = ({ image, bg, description, title }: ChildProps) => {
  return (
    <div
      className={`border-round overflow-hidden ${
        bg ? bg : "bg-primary-900"
      } shadow-4 hover:shadow-5 cursor-pointer ${styles.container}`}
    >
      <div className="relative">
        <div className={`${styles.img_container}`}>
          <img
            loading="lazy"
            className={styles.img}
            alt="Card Image"
            width="100%"
            height="100%"
            src={image}
          />
        </div>
      </div>
      <div className={`p-3 pb-0 flex flex-column h-100 ${styles.card_content}`}>
        <div className="font-bold text-2xl flex-fill flex-grow flex-1">{title}</div>
        {description ? (
          <div
            className={`mt-2 ${styles.card_text} text-md md:text-xl mb-4 md:mb-0 text-700 line-height-2 flex-fill flex-grow flex-1`}
          >
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
};

interface Props {
  className?: string;
  link?: string;
  onClick?: () => void; // Add onClick prop
}

const SlateCard = ({ className, link, onClick, ...childProps }: Props & ChildProps) => {
  if (link) {
    return (
      <Link to={link} className={`${className} text-link`}>
        <SlateCardChild {...childProps} />
      </Link>
    );
  }
  return (
    <div onClick={onClick} className={`${className} text-link`}>
      <SlateCardChild {...childProps} />
    </div>
  );
};

export default SlateCard;
