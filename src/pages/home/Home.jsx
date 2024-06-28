import { Helmet } from "react-helmet-async"
import FlashSeles from "./flash-sales/FlashSeles"
import OurCourses from "./our-courses/OurCourses"
import Banner from "./banner/Banner"

function Home() {
  return (
    <main>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-6xl">
      {/* <Banner /> */}
      <OurCourses />
      </div>
    </main>
  )
}

export default Home
