import { useEffect, useRef, useState } from "react";

interface Props {
  phrases: string[];
  typingDelay?: number;
  deletingDelay?: number;
  pauseDuration?: number;
  cursorBlinkSpeed?: number;
}

const Typewriter = ({
  phrases,
  typingDelay = 75,
  deletingDelay = 50,
  pauseDuration = 2000,
  cursorBlinkSpeed = 500,
}: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isPhraseComplete, setIsPhraseComplete] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      const currentText = displayText;
      const textLength = currentText.length;

      if (!isDeleting && !isPhraseComplete) {
        if (textLength < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, textLength + 1));
        } else {
          setIsPhraseComplete(true);
        }
      } else if (isDeleting) {
        if (textLength > 0) {
          setDisplayText(currentText.substring(0, textLength - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    if (isPhraseComplete) {
      timerRef.current = window.setTimeout(() => {
        setIsPhraseComplete(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else {
      timerRef.current = window.setTimeout(type, isDeleting ? deletingDelay : typingDelay);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [
    displayText,
    isDeleting,
    isPhraseComplete,
    phraseIndex,
    phrases,
    deletingDelay,
    pauseDuration,
    typingDelay,
  ]);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIsCursorVisible((prevVisibility) => !prevVisibility);
    }, cursorBlinkSpeed);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [cursorBlinkSpeed]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <span className="text-primary-200">{displayText}</span>
      {isCursorVisible && <span className="blink">{" _"} </span>}
    </>
  );
};

export default Typewriter;
