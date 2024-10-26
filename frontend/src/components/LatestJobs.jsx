import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const jobs = useSelector((store) => store.job.allJobs);
  return (
    <div className="max-w-7xl mx-20 my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {jobs.length !== 0 ? (
          jobs
            .slice(0, 6)
            .map((item) => <LatestJobCards item={item} key={item._id} />)
        ) : (
          <span>No Jobs Found</span>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
