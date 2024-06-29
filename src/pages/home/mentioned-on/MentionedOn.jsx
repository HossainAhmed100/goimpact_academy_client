import Brand1 from "../../../assets/images/brand1.png";
import Brand2 from "../../../assets/images/brand2.png";
import Brand3 from "../../../assets/images/brand3.png";
import Brand4 from "../../../assets/images/brand4.png";
import Brand5 from "../../../assets/images/brand5.png";
import Brand6 from "../../../assets/images/brand6.png";


function MentionedOn() {
  return (
    <div className="flex flex-col gap-4 md:gap-16 py-16">
        <h1 className="text-5xl text-black text-center font-semibold">Mentioned On</h1>
      <div className="flex items-center overflow-hidden">
        <img src={Brand1} alt="Brand 1" className="w-full h-32" />
        <img src={Brand2} alt="Brand 2" className="w-full h-32" />
        <img src={Brand3} alt="Brand 3" className="w-full h-32" />
        <img src={Brand4} alt="Brand 4" className="w-full h-32" />
        <img src={Brand5} alt="Brand 5" className="w-full h-32" />
        <img src={Brand6} alt="Brand 6" className="w-full h-32" />
      </div>
    </div>
  )
}

export default MentionedOn