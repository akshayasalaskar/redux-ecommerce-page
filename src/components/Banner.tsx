import backgroundimg from "./images/c8c51d19254c5462.webp";

const Banner = () => {
  return (
    <div className="container mt-12 ">
      <div className="">
        <div className="h-[300px] md:h-[200px] bg-cover bg-center rounded-xl p-8 md:p-1">
          <div className="h-[300px]">
            <img
              className="w-full h-full object-cover"
              src={backgroundimg}
              alt="Background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
