
// Array of statistics data
const stats = [
    { value: '98.37%', label: 'Satisfaction Rate' },
    { value: '100+', label: 'Classes Completed' },
    { value: '0%', label: 'Moneyback Rate' },
    { value: '650+', label: 'Successfully Trained' }
  ];

const StatisticsSection = () => {
  return (
    <section className="bg-gray-100 py-8 rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 divide-x-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item,index) => {
                return (
                <div key={index} className="text-center py-8 space-y-2">
                    <div className="text-4xl text-secondary font-bold">{item.value}</div>
                    <div className="text-muted-foreground">{item.label}</div>
                </div>
                )
  
            })}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection;
