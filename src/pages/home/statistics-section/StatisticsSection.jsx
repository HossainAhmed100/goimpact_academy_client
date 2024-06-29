import { Card, CardBody } from "@nextui-org/react";

// Array of statistics data
const stats = [
    { value: '98.37%', label: 'Satisfaction Rate' },
    { value: '100+', label: 'Classes Completed' },
    { value: '0%', label: 'Moneyback Rate' },
    { value: '650+', label: 'Successfully Trained' }
  ];

const StatisticsSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            We're proud of the work we've done and the impact we've made. Here are some of our key achievements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item,index) => {
                return (
                  <Card key={index}>
                    <CardBody className="text-center py-8 space-y-2">
                      <div className="text-4xl font-bold">{item.value}</div>
                      <div className="text-muted-foreground">{item.label}</div>
                    </CardBody>
                  </Card>
                )
  
            })}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection;
