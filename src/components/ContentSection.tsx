const ContentSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={`w-full my-8`}>
      <div className={`px-2 md:px-4 lg:px-6`}>
        <div className="container w-full m-auto">{children}</div>
      </div>
    </section>
  );
};

export default ContentSection;
