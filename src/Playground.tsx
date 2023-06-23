import ContentSection from "./components/ContentSection";
import Text from "./components/text/Text";

const Playground = () => {
  return (
    <ContentSection>
      <h1 className="text-5xl md:text-6xl lg:text-7xl">Heading 1</h1>
      <h2 className="text-4xl md:text-5xl lg:text-6xl">Heading 2</h2>
      <h3 className="text-3xl md:text-4xl lg:text-5xl">Heading 3</h3>
      <h4 className="text-2xl md:text-3xl lg:text-4xl">Heading 4</h4>
      <h5 className="text-xl md:text-2xl lg:text-3xl">Heading 5</h5>
      <h6 className="text-lg md:text-xl lg:text-2xl">Heading 6</h6>
      <p className="text-base md:text-lg lg:text-xl">Paragraph</p>
      <Text size="h1">Text</Text>
      <Text size="h2">Text</Text>
      <Text size="h3">Text</Text>
      <Text size="h4">Text</Text>
      <Text size="h5">Text</Text>
      <Text size="h6">Text</Text>
      <Text size="p">Text</Text>
    </ContentSection>
  );
};

export default Playground;
