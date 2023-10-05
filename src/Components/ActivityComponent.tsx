import avatar1 from "../assets/Avatar-1.svg";
import avatar2 from "../assets/Avatar-2.svg";

const Activity = () => {
  return (
    <>
      <div className="w-100 bg-white border border-gray-200 rounded-md shadow sm:px-3 sm:py-2 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex items-center justify-between mb-1 ">
          <h5 className="text-lg font-bold  text-gray-900 dark:text-white ">
            Activity Feed
          </h5>
        </div>
        <div>
          <hr style={{ width: "100%", border: "1px solid #EEE" }} />
        </div>
        <div className="flow-root ">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-1 sm:py-2 -mb-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0" style={{ marginBottom: "20px" }}>
                  <img
                    className="w-8 h-8 rounded-full "
                    src={avatar1}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ display: "inline-block" }}>
                    <p
                      className="text-xs font-medium text-gray-900 truncate dark:text-white "
                      style={{ whiteSpace: "normal" }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        Kushantha Charuka
                      </span>
                      <span className="=mx-2">created</span>
                      <span className="mx-2" style={{ color: "#BC006D" }}>
                        Contract #00124 need John Beige’s signature
                      </span>
                      <span className="mx-1" style={{ color: "gray" }}>
                        <br></br>
                        Sep 16, 2022 at 11:30 AM
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-2 sm:py-3 mb-2">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0" style={{ marginBottom: "20px" }}>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={avatar2}
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ display: "inline-block" }}>
                    <p
                      className="text-xs font-medium text-gray-900 truncate dark:text-white  "
                      style={{ whiteSpace: "normal" }}
                    >
                      <span>Lorem ipsum</span>
                      <span className="mx-2" style={{ fontWeight: "bold" }}>
                        dolor sit amet
                      </span>
                      <span className="mx-1" style={{ color: "black" }}>
                        consectetur adipiscing elit. Maecenas pretium neque
                      </span>
                      <span className="mx-1" style={{ color: "gray" }}>
                        <br></br>
                        Sep 16, 2022 at 11:45 AM
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-2 sm:py-3 -mb-5 -mt-5">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0" style={{ marginBottom: "20px" }}>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={avatar2}
                    alt="Michael image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ display: "inline-block" }}>
                    <p
                      className="text-xs font-medium text-gray-900 truncate dark:text-white"
                      style={{ whiteSpace: "normal" }}
                    >
                      <span>Lorem ipsum</span>
                      <span className="mx-2" style={{ fontWeight: "bold" }}>
                        dolor sit amet
                      </span>
                      <span className="mx-1" style={{ color: "black" }}>
                        consectetur adipiscing elit. Maecenas pretium neque
                      </span>
                      <span className="mx-1" style={{ color: "gray" }}>
                        <br></br>
                        Sep 16, 2022 at 11:45 AM
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Activity;
