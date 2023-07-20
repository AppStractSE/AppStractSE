const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-0 flex justify-content-center">
      <div className="col-12 grid p-0">{children}</div>
    </div>
  );
};

export default Grid;
