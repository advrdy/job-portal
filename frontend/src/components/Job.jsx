import { Bookmark } from "lucide-react";

import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button className="rounded-full" size="icon">
          {" "}
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" size="icon">
          {" "}
          <Avatar>
            <AvatarImage src="http://surl.li/xloyvn" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Google</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem epsum dolor sit amet Lorem epsum dolor sit amet Lorem epsum
          dolor sit amet
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 positions
        </Badge>
        <Badge className="text-red-700 font-bold" variant="ghost">
          Full Time
        </Badge>
        <Badge className="text-purple-700 font-bold" variant="ghost">
          24LPA
        </Badge>
      </div>
      <div className="mt-5">
        <Button className="border rounded-xl">Details</Button>
        <Button className="rounded-xl bg-[#6A38C2] text-white ml-3 hover:bg-[#633ba7]">
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
