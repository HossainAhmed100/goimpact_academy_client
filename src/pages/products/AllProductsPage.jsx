import ProductCard from "../../components/products/ProductCard";
import { Button, } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumbs/BreadCrumbs";
import axios from "axios";
import { PiListDashes } from "react-icons/pi";
import { HiOutlineViewGrid } from "react-icons/hi";

function AllProductsPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("data.json")
     .then((res) => setCourses(res.data))
     .catch((err) => console.error(err)); 
  })
  return (
    <section className="m-auto max-w-6xl">
      <Helmet title='Contact | Zephyar Online Shop'/>
      <div className="py-6 sm:py-8 lg:py-10 px-4 md:px-8">
        <div className="pb-4"><Breadcrumb /></div>
        <div className="flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button size="lg" color="secondary" isIconOnly><HiOutlineViewGrid size={24}/></Button>
            <Button size="lg" color="default" variant="flat" isIconOnly><PiListDashes size={24}/></Button>
            <h1 className="text-xl font-medium text-gray-500">Showing 3 courses of 3</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-medium text-gray-500">Sort By:</h1>
            <select className="border-2 border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-indigo-500">
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="date">Date</option>
            </select>
        </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-6">
          {courses.map((item) => <ProductCard key={item?._id} product={item}/>)}
        </div>
    </div>
    </section>
  );
}

export default AllProductsPage;
