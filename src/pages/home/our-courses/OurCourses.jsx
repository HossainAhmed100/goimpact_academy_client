import { Button, Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../../../components/products/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

function OurCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("data.json")
     .then((res) => setCourses(res.data))
     .catch((err) => console.error(err)); 
  })
  return (
    <div className="py-6 sm:py-8 lg:py-16 px-4 md:px-8">
      <div className="flex items-end justify-between py-6">
        <div>
          <p className="font-medium text-secondary">Our Courses</p>
          <h1 className="max-w-[600px] text-gray-900 text-4xl font-semibold">
          Explore Featured Courses
          </h1>
        </div>
        <Button radius="sm" size="sm" color="secondary" as={Link} href="/all-products" 
         endContent={<FaArrowRightLong size={12}/>}>
          VIEW ALL
        </Button> 
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-6">
        {courses.map((item) => <ProductCard key={item?._id} product={item}/>)}
      </div>
    </div>
  )
}

export default OurCourses