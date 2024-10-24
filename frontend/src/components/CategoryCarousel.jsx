import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const category = [
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
];

function CategoryCarousel() {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/2">
              <Button className=" bg-[#6A38C2] text-white rounded-3xl hover:bg-[#6029bf]">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
