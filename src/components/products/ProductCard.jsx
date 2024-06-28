import {Card, CardHeader, CardBody, Image, Link, Divider, CardFooter} from "@nextui-org/react";
import { FaRegClock } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineContentPaste } from "react-icons/md";

function ProductCard({product}) {
    const {price, total_lessons, thumbnail, duration, title, enrollment_validity, _id} = product;

    const commaSeparetor = (price) => {
      const options = {  maximumFractionDigits: 2 };
      const result = Intl.NumberFormat("en-US",options).format(price);
      return result;
    }
  return (
    <Link href={`/all-courses/${_id}`}>
    <div>
      <Card className="shadow-none bg-transparent">
        <CardHeader>
          <Image isZoomed src={thumbnail} radius="sm" alt={title} width="100%" height="180px" />
        </CardHeader>
        <CardBody>
          <h4 className="text-lg font-medium text-gray-900 text-ellipsis line-clamp-2">{title}</h4>
          <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
            <div className="flex items-center justify-start gap-2">
              <FaRegClock /> <p>{duration} hours</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <MdOutlineContentPaste /> <p>Lesson {total_lessons}</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <FiCalendar /> <p>{enrollment_validity}</p>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center justify-between">
          <p>Price: ${commaSeparetor(price)}</p>
          <p>View Details</p>
        </CardFooter>
      </Card>
    </div>
    </Link>
  )
}

export default ProductCard
