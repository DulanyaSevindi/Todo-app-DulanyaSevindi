import vector from "../assets/Vector.svg";
import close from "../assets/Close.svg";

const Banner = () => {
  return (
    <>
      <div className="bg-white bg-opacity-50 shadow-md flex justify-between rounded-md h-20">
        <div className="mt-1">
          <span className="text-2xl ml-4 text-black font-bold">
            Welcome back, John Doe
          </span>
          <span className="text-sm ml-4 text-gray-700 block  ">
            The end of the year is coming. Are you planning your performance
            interviews? You can do this super efficiently with Acmy.
          </span>
          <a href="#">
            <span className="text-sm ml-4 text-red-500 block underline">
              Look here for more information
            </span>
          </a>
        </div>
        <div className=" float-right inline-flex justify-end gap-2">
          <img className="h-25 w-25 mx-15" src={vector} alt="Vector" />{" "}
          <img className="h-5 w-5 m-6" src={close} alt="Close" />
        </div>{" "}
      </div>
    </>
  );
};
export default Banner;
