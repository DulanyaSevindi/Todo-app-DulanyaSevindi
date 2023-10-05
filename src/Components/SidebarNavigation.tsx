import dashbordsvg from "../assets/Dashboard.svg";

const SidebarNavigation = () => {
  return (
    <div className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in sideBar-bg h-screen ">
      <div className="sidebar-header flex items-center justify-center">
        <div className="inline-flex">
          <span className="text-white text-2xl font-bold sideBar-sb w-64 px-5 pt-2 h-12 text-center top-0">
            Acmy Solutions
          </span>
        </div>
      </div>

      <div className="flex items-center w-4/5 py-1 sideBar-sb pl-3 rounded-full m-auto mt-20 ">
        <img src={dashbordsvg} alt="Dashboard Icon" className="w-6 h-6" />

        <span className="text-white text-md mx-3"> Dashboard </span>
      </div>
    </div>
  );
};

export default SidebarNavigation;
