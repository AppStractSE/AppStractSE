import { AiOutlineInstagram } from 'react-icons/ai';
import { common } from '../../locales/common';

interface Props {
  size?: number;
}

const Instagram = ({ size }: Props) => {
  return (
    <a href={common.socials.instagram} target="_blank">
      <AiOutlineInstagram className="text-primary hover:text-primary-400 cursor-pointer" size={size} />
    </a>
  );
};

export default Instagram;
