import React from 'react'
import Marquee from 'react-fast-marquee'

const Industries = () => {
  const capital = [
    {
      img: "/DiverseProducts/Ship-Building.png",
      text: "Ship Building"
    },
    {
      img: "/DiverseProducts/Medical-Equipment.png",
      text: "Medical equipment"
    },
    {
      img: "/DiverseProducts/Food-Packaging.png",
      text: "Food packaging"
    },
    {
      img: "/DiverseProducts/Automobile.png",
      text: "Automobile"
    },
    {
      img: "/DiverseProducts/Building-Construction.png",
      text: "Building construction"
    },
    {
      img: "/DiverseProducts/Power-Infrastructure.png",
      text: "Power infrastructure"
    },
    {
      img: "/DiverseProducts/Defence.png",
      text: "Defence"
    },
    {
      img: "/DiverseProducts/Electronic.png",
      text: "Electronic appliances"
    }
  ]

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden">
       {/* <div className='w-fit mx-auto py-6'>
        <Heading2 text="Our Six Capitals"/>
        </div> */}
      <Marquee gradient={false}  speed={40} loop={0}>
        {capital.map((item, index) => (
         <div
         key={index}
         className="w-[250px] h-[250px] mx-2 bg-white rounded-3xl overflow-hidden  hover:shadow-xl transition-shadow duration-300 border border-[#0db14b] flex flex-col"
       >
         <div className="w-full h-[80%]">
           <img
             src={item.img}
             alt={item.text}
             className="w-full h-full object-cover rounded-3xl object-top"
           />
         </div>
         <div className="flex-grow px-4 py-3 flex items-center justify-center">
           <p className="text-lg text-center text-gray-700 font-medium">
             {item.text}
           </p>
         </div>
       </div>
       
        ))}
      </Marquee>
    </div>
  )
}

export default Industries
