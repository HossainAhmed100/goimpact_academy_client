import { Button, Link } from "@nextui-org/react"


function ImageBanner() {
  return (
   
<section>

<div className="h-96 text-white text-center grid bg-cover bg-[url('https://i.ibb.co/NLS1k1W/bg.jpg')]">
<div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
<div className="col-start-1 row-start-1 mx-auto my-auto">
    <div>
    <div className="mx-auto text-center">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        Impact Academy's First Batch of Students
      </h1>
        <strong className="font-extrabold text-red-700 sm:block"> from Content Creation Bootcamp </strong>

      <p className="mt-4 sm:text-xl/relaxed">
      Get access to our Content Creation Bootcamp and more. Learn and improve skills
      across business, tech, design, and more.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button radius="sm" size="lg" as={Link} href="/all-courses" variant="solid" color="secondary">ENROOL NOW</Button>
      <Button radius="sm" size="lg" as={Link} href="/all-courses" variant="bordered" color="default">LEARN MORE</Button>
      </div>
    </div>
    </div>
</div>
</div>
</section>
  )
}

export default ImageBanner