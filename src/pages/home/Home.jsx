import { Helmet } from "react-helmet-async";
import OurCourses from "./our-courses/OurCourses";
import StatisticsSection from "./statistics-section/StatisticsSection";
import OurMission from "./our-mission/OurMission";
import MentionedOn from "./mentioned-on/MentionedOn";
import OurInstructor from "./our-instructor/OurInstructor";
import FullWidthBanner from "./full-width-banner/FullWidthBanner";
import ImageBanner from "./image-banner/ImageBanner";

function Home() {
  return (
    <main>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-6xl">
      {/* <Banner /> */}
      <FullWidthBanner />
      <StatisticsSection />
      <OurMission />
      <OurCourses />
      <OurInstructor />
      <ImageBanner />
      <MentionedOn />
      </div>
    </main>
  )
}

export default Home
