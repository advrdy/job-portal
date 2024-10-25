import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const [isApplied, setisApplied] = useState(false);
  const dothis = () => {
    setisApplied(true);
  };
  return (
    <div className="max-w-7xl mx-20 my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              Positions
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              Type
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              15LPA
            </Badge>
          </div>
        </div>
        {isApplied ? (
          <Button>Already Applied</Button>
        ) : (
          <Button
            className="bg-[#6f269f] hover:bg-[#5f32ad] text-white rounded-lg"
            onClick={dothis}
          >
            Apply Now
          </Button>
        )}
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">FullStack</span>
        </h1>
        <h1 className="font-bold my-1">
          Location: <span className="pl-4 font-normal text-gray-800">Hyd</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Lorem df dsf se fe sf rg er bgtdfgt hgt ge gfr df gdtg fg drg
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">5 yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">15 LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">100</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">12-05-2004</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
