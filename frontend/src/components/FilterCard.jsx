import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Banglore", "Hyderabad", "Pune"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Data Science",
      "Full Stack Developer",
      "UI/UX Designer",
      "Android Developer",
      "iOS Developer",
      "DevOps",
      "QA Engineer",
      "Project Manager",
      "Technical Writer",
      "Marketing Specialist",
      "Software Engineer",
      "Product Manager",
    ],
  },
  {
    filterType: "Salary",
    array: ["1-2LPA", "3-8LPA", "8-12LPA", "12-60LPA"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-xl">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg"> {data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2" key={index}>
                  <RadioGroupItem value={item} />

                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
