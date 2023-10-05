import SidebarNavigation from "../Components/SidebarNavigation";
import HeaderNavigation from "../Components/HeaderNavigation";
import Banner from "../Components/BannerComponent";
import Task from "../Components/TaskComponent";
import Activity from "../Components/ActivityComponent";
import PriorityChart from "../Components/TasksPrioritiesComponents";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Tasks } from "../models/task";

export default function Dashboard() {
  const [data, setData] = useState<Tasks[]>();
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

  return (
    <>
      <div className="flex ">
        <div>
          <SidebarNavigation></SidebarNavigation>
        </div>
        <div className="w-full ">
          <HeaderNavigation></HeaderNavigation>
          <div className="grid grid-cols-5 gap-2 mx-10 my-2">
            <div className="col-span-5 bg-white border">
              <Banner></Banner>
            </div>
            <div className="col-span-3 row-span-2 ">
              <Task></Task>
            </div>
            <div className="col-span-2 ">
              <Activity></Activity>
            </div>
            <div className="col-span-2">
              <PriorityChart data={data!}></PriorityChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
