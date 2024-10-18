import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-300 shadow-sm rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              className="border-gray-200"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              className="border-gray-200"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              className="border-gray-200"
              type="number"
              placeholder="Enter your Number"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              className="border-gray-200"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />

                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />

                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer border-gray-200"
              />
            </div>
          </div>
          <Button type="submit" classname="w-full bg-blue-50 my-4">
            Sign Up
          </Button>
          <span>
            Alreay have an account?{" "}
            <Link to="/login " className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
