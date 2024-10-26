/* eslint-disable react/prop-types */
import { Badge } from "./ui/badge";

const LatestJobCards = (props) => {
  console.log(props);
  return (
    <div className="p-5 rounded-xl shadow-xl bg-white border border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">{props.item.company.name}</h1>
        <p className="text-sm text-gray-500">{props.item.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{props.item.title} </h1>
        <p className="text-sm text-gray-600">{props.item.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {props.item.position}
        </Badge>
        <Badge className="text-red-700 font-bold" variant="ghost">
          {props.item.jobType}
        </Badge>
        <Badge className="text-purple-700 font-bold" variant="ghost">
          {props.item.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
