import { useEffect, useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const ScrollTop = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      setScrollButtonVisible(currentScrollPos > 400 && currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    if (scrollButtonVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${scrollButtonVisible && "cursor-pointer"} ${
        scrollButtonVisible ? "opacity-100" : "opacity-0"
      } scrolltop hover:text-primary-300`}
    >
      <BsArrowUpCircleFill size={48} onClick={scrollToTop} />
    </div>
  );
};

export default ScrollTop;
