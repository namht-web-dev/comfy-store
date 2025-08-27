const Loading = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-20 w-full h-screen">
      <div className="skeleton h-1/3 w-2/3 md:w-1/3"></div>
      <div className="skeleton h-8 w-1/4"></div>
      <div className="skeleton h-8 w-1/2 md:w-1/3"></div>
      <div className="skeleton h-8 w-1/2 md:w-1/3"></div>
    </div>
  );
};
export default Loading;
