interface Props {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'h6' | 'p';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'p';
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  lineheight?: 1 | 2 | 3 | 4;
}

const Text = ({ size, as, children, className, bold, lineheight }: Props) => {
  const sizeClasses = {
    h1: 'text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-4xl md:text-5xl lg:text-6xl',
    h3: 'text-3xl md:text-4xl lg:text-5xl',
    h4: 'text-2xl md:text-3xl lg:text-4xl',
    h5: 'text-xl md:text-2xl lg:text-3xl',
    h6: 'text-lg md:text-xl lg:text-2xl',
    p: 'text-lg md:text-xl',
  };

  const TextComponent = as || size;

  const combinedClassName = [
    sizeClasses[size],
    className,
    bold && 'font-bold',
    lineheight && `line-height-${lineheight}`,
  ]
    .filter(Boolean)
    .join(' ');

  return <TextComponent className={combinedClassName}>{children}</TextComponent>;
};

export default Text;
