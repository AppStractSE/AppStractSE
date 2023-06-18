import { RiMessengerLine } from "react-icons/ri";
import { common } from "../../locales/common";

interface Props {
  size?: number;
}

const Facebook = ({ size }: Props) => {
  return (
    <a href={common.socials.facebook} target="_blank">
      <RiMessengerLine className="text-primary hover:text-primary-400 cursor-pointer" size={size} />
    </a>
  );
};

export default Facebook;
