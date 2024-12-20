import Navbar from "./shared/Navbar";
import Job from "./Job";
const randomJobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-20 my-10">
        <h1 className="font-bold text-xl my-10">
          search results ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((item, index) => {
            return <Job key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
