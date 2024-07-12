import { Button, Link } from "@nextui-org/react";

// OurMission component definition
const OurMission = () => {
  return (
    <section className="py-12 md:py-24 min-h-screen relative isolate lg:py-32 px-4 md:px-8 bg-muted">

      {/* Top gradient background */}
      <div
          className="absolute inset-x-0  -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#b7b2f8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        {/* Section heading */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter">
            Unlock Your Potential with Our <span className="text-secondary">Bootcamp</span>
          </h2>
          <p className="max-w-[800px] poppinFont text-muted-foreground md:text-base lg:text-base">
            Our bootcamp transforms aspiring content creators into skilled professionals with hands-on learning, expert guidance, and community support.
          </p>
        </div>
        {/* Features section */}
        <div className="grid py-6 m-auto max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <ContentCard 
          icons={<BrushIcon className="h-8 w-8 text-secondary" />} 
          title={"Creative Expression"} 
          content={"Unleash your creativity and develop a unique voice through our comprehensive curriculum."}
        />
        <ContentCard 
          icons={<LaptopIcon className="h-8 w-8 text-secondary" />} 
          title={"Technical Mastery"} 
          content={"Gain proficiency in the latest tools and technologies to elevate your content creation skills."}
        />
        <ContentCard 
          icons={<RocketIcon className="h-8 w-8 text-secondary" />} 
          title={"Career Acceleration"} 
          content={"Unlock new opportunities and propel your career forward with our industry-focused curriculum."}
        />
        </div>
        {/* Action buttons */}
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button radius="sm" size="lg" as={Link} href="/all-courses" variant="solid" color="secondary">Enroll now</Button>
          <Button radius="sm" size="lg" as={Link} href="/all-courses" variant="bordered" color="default">View Details</Button>
        </div>
      </div>

       {/* Bottom gradient background */}
       <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

    </section>
  );
}

const ContentCard = ({icons, title, content}) => {
   return(
    <div className="flex rounded-lg border hover:border-secondary ease-in-out transition-all hover:scale-105 duration-300 cursor-pointer px-6 py-6 flex-col items-start gap-2">
    <div className="py-4">{icons}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground text-start poppinFont">{content}</p>
  </div>
   )
}

// Icon components
function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default OurMission;
