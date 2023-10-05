import React from "react";
import { Tasks } from "../models/task";
import Chart from "react-apexcharts";

const PriorityChart: React.FC<{ data: Tasks[] }> = ({ data }) => {
  const priorityCounts = data?.reduce((counts, task) => {
    counts[task.priority] = (counts[task.priority] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  const colors = {
    LOW: "#2F80ED",
    MEDIUM: "#F2C94C",
    HIGH: "#EB5757",
  };
  return (
    <div>
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Tasks Priorities
          </h5>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <Chart
                type={"donut"}
                width={400}
                height={200}
                series={priorityCounts ? Object.values(priorityCounts) : []}
                options={{
                  labels: (priorityCounts && Object.keys(priorityCounts)) || [],
                  colors:
                    (priorityCounts &&
                      Object.keys(priorityCounts).map(
                        (label) =>
                          colors[label as keyof typeof colors] as string
                      )) ||
                    [],
                }}
              ></Chart>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriorityChart;
