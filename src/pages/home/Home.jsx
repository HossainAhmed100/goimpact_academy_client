import { Helmet } from "react-helmet-async";
import OurCourses from "./our-courses/OurCourses";
import StatisticsSection from "./statistics-section/StatisticsSection";
import OurMission from "./our-mission/OurMission";
import MentionedOn from "./mentioned-on/MentionedOn";

function Home() {
  return (
    <main>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-6xl">
      {/* <Banner /> */}
      <OurMission />
      <MentionedOn />
      <StatisticsSection />
      <OurCourses />
      </div>
    </main>
  )
}

export default Home
