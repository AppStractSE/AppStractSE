import { Link } from "react-router-dom";
import styles from "./styling.module.scss";

interface Props {
  title: string;
  description: string;
  image: string;
  className?: string;
  link: string;
}

const SlateCard = ({ title, description, image, className, link }: Props) => {
  return (
    <Link to={link} className={`${className} text-link`}>
      <div
        className={`border-round overflow-hidden bg-primary-900 shadow-3 hover:shadow-5 cursor-pointer ${styles.container}`}
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
        <div className={`p-3 pb-0 ${styles.card_content}`}>
          <div className="font-bold text-2xl">{title}</div>
          <div className={`mt-2 ${styles.card_text}`}>
            <div className="text-md md:text-xl mb-4 md:mb-0 text-700 line-height-2">
              {description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SlateCard;
