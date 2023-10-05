import profilesvg from "../assets/Profile.svg";
import notification from "../assets/Notifications.svg";
import arrow from "../assets/Chevron-down.svg";

const HeaderNavigation = () => {
  return (
    <>
      <div className="bg-white bg-opacity-50 w-full px-5 pt-1 h-12 shadow-md">
        <span className="text-2xl font-bold">Dashboard</span>
        <div className="float-right inline-flex gap-2">
          <img className="mx-4" src={notification} alt="bellicon" />
          <img src={profilesvg} alt="profile" />
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
};

export default HeaderNavigation;
