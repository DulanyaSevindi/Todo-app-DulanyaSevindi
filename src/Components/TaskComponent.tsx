import { useEffect, useState } from "react";
import priorityLow from "../assets/Priority-Low.svg";
import priorityMedium from "../assets/Priority-Medium.svg";
import priorityHigh from "../assets/Priority-High.svg";
import { Tasks } from "../models/task";
import axios, { AxiosResponse } from "axios";
import ReactPaginate from "react-paginate";

const Task = () => {
  const [data, setData] = useState<Tasks[]>();
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    async function getTasks() {
      try {
        const response: AxiosResponse<Tasks[]> = await axios.get<Tasks[]>(
          "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return [];
        } else {
          console.log("unexpected error: ", error);
          return [];
        }
      }
    }
    getTasks();
  }, []);

  const dataPerPage = 8;
  const pagesVisited = pageNumber * dataPerPage;

  const updatedData = data
    ?.slice(pagesVisited, pagesVisited + dataPerPage)
    .map((d) => d);

  const pageCount = data ? Math.ceil(data.length / dataPerPage) : 0;

  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  const getImagePath = (type: string): string => {
    switch (type) {
      case "LOW":
        return priorityLow;
      case "MEDIUM":
        return priorityMedium;
      case "HIGH":
        return priorityHigh;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="h-full bg-white bg-opacity-50 shadow-md flex justify-between rounded-md">
        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white py-4 px-3">
              Tasks
            </h5>
          </div>
          <hr style={{ width: "100%", border: "1px solid #EEE" }} />
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {updatedData &&
                updatedData.map((c) => (
                  <li key={c.id} className="px-4 py-1">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-6 h-6 rounded-md"
                          src={getImagePath(c.priority)}
                          alt="bellicon"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-medium text-gray-900 truncate dark:text-white"
                          style={{ whiteSpace: "normal" }}
                        >
                          {c.todo}
                        </p>
                      </div>
                      {c.completed ? (
                        <span
                          className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 rounded-full dark:bg-green-900 dark:text-green-300"
                          style={{ whiteSpace: "normal" }}
                        >
                          Done
                        </span>
                      ) : (
                        <span
                          className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300"
                          style={{ whiteSpace: "normal" }}
                        >
                          In-Progress
                        </span>
                      )}
                      <span className="text-gray-500 text-sm">
                        {(() => {
                          const createdAtDate = new Date(c.createdAt);

                          const month = new Intl.DateTimeFormat("en", {
                            month: "short",
                          }).format(createdAtDate);

                          const day = new Intl.DateTimeFormat("en", {
                            day: "2-digit",
                          }).format(createdAtDate);

                          return `${month} ${day}`;
                        })()}
                      </span>
                    </div>
                    {!c.completed && (
                      <div className="px-4 mx-8">
                        <button className="text-red-500 text-xs">
                          Mark as read
                        </button>
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <div className="">
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName="inline-flex w-2/5 items-center justify-between mx-auto relative rounded-md border border-gray-300 bg-white"
                previousLinkClassName="relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                nextLinkClassName="relative ml-3 inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                activeClassName="bg-indigo-600 p-2"
                pageLinkClassName={"text-gray-700 hover:bg-gray-50"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
