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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-6">
        {courses.map((item) => <ProductCard key={item?._id} product={item}/>)}
      </div>
      <div className="flex items-center justify-center py-6">
        <Button radius="sm" as={Link} href="/all-products" className="bg-indigo-500 text-white font-medium" endContent={<FaArrowRightLong size={18}/>}>
          View All Products
        </Button> 
      </div>
    </div>
  )
}

export default OurCourses