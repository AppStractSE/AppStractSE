import { AiOutlineMail } from 'react-icons/ai';
import { common } from '../../locales/common';

interface Props {
  size?: number;
}

const Mail = ({ size }: Props) => {
  return (
    <a href={common.socials.mail} target="_blank">
      <AiOutlineMail className="text-primary hover:text-primary-400 cursor-pointer" size={size} />
    </a>
  );
};

export default Mail;
