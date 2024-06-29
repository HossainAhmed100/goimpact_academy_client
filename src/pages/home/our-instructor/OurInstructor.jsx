import { LuLinkedin, LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { Chip, Link } from "@nextui-org/react";
import "./OurInstructor.css"

const instructorList = [
    {
        name: "Yahia Amin",
        tag: "Entrepreneur",
        photo: "https://i.ibb.co/ft3xCrL/YA.png"
    },
    {
        name: "Nafees Salim",
        tag: "Marketing Expert",
        photo: "https://i.ibb.co/SNmFj0v/NS-New.png"
    },
    {
        name: "Jubaer Talukder",
        tag: "Videographer",
        photo: "https://i.ibb.co/NmWnLXx/JT.png"
    },
    {
        name: "Mubasshir Hussain",
        tag: "Senior Researcher",
        photo: "https://i.ibb.co/d0WDhJR/MH-V3.png"
    }
]

function OurInstructor() {
  return (
    <section className="max-w-6xl m-auto py-12 md:py-24 lg:py-32 px-4 md:px-8 bg-muted">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        {/* Section heading */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter">
          Meet Our <span className="text-secondary">Instructor</span> Panel 
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-base lg:text-base">
          We handpicked the best instructors in the fields just to give you the best quality experience. These instructors have great experience and are greatly admired in their respective fields.
          </p>
        </div>

        {/* Instruction section */}
        <div className="grid py-6 max-w-5xl grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        {instructorList.map((instructor, index) => <InstructorCard key={index} item={instructor} />)}
        
      </div>
      </div>
    </section>
  )
}

const InstructorCard = ({item}) => {
    const {tag, name, photo} = item;
    return(
        <div className="flex flex-col items-center justify-center space-y-6 p-6 rounded-lg hover:shadow transition-all duration-300 hover:border-1 border-1 border-transparent hover:border-gray-300">
        <div>
          <img src={photo} width={120} height={120} alt="Instructor" className="rounded-full" />
          <div className="-mt-6">
          <Chip size="sm" variant="shadow"
            classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
            }}>{tag}</Chip>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">
          {name} has over 10 years of experience in the industry
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="facebook.com"><LuFacebook size={20}/></Link>
          <Link href="facebook.com"><IoLogoInstagram size={20}/></Link>
          <Link href="facebook.com"><AiOutlineYoutube size={20}/></Link>
          <Link href="facebook.com"><LuLinkedin size={20}/></Link>
        </div>
      </div>
    )
 }


export default OurInstructor