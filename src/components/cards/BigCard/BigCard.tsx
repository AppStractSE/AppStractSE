import { ReactNode } from 'react';

interface Props {
  title: string;
  description: ReactNode;
  image: string;
  buttons: ReactNode;
  order?: 'rtl' | 'ltr';
  clipPath?: boolean;
}

const BigCard = ({ title, description, image, buttons, order, clipPath }: Props) => {
  return (
    <div className="col-12 text-left flex align-items-center mb-4">
      <div
        className={`p-card overflow-hidden col-12 flex flex-wrap p-0 ${
          order === 'ltr' ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className="col-12 md:col-7 m-0 p-0">
          <div
            className={`${
              clipPath && order === 'ltr' ? 'clip-right' : clipPath && order === 'rtl' ? 'clip-left' : ''
            } h-full`}
          >
            <img alt="Card" width="100%" height="100%" src={image} />
          </div>
        </div>

        <div className="col-12 p-4 flex flex-column justify-content-center md:col-5 md:p-6">
          <div className="p-card-title">{title}</div>
          {description}
          <div className="flex justify-content-end">{buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
