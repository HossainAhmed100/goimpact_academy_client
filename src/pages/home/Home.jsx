import { Helmet } from "react-helmet-async";
import OurCourses from "./our-courses/OurCourses";

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
