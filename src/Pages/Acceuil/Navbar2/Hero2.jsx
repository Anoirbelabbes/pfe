import React from 'react'

const Hero2 = () => {
    const challenges = [
        {
          id: 1,
          title: "Lire 50 pages par jour",
          status: "en cours"
        },
        {
          id: 2,
          title: "Lire un livre en une semaine",
          status: "terminé"
        },
        {
          id: 3,
          title: "Lire un livre dans un genre différent",
          status: "abandonné"
        }
      ];
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:ml-32">
     <div className="max-w-md w-full mx-4 lg:mx-10">
       <div className="bg-black shadow-md rounded-md p-4">
         <div className="flex flex-row">
           <div className="w-1/3">
             <img className="w-full hover:transform hover:scale-110 transition-all duration-500 rounded-2xl" src="https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg" alt="book cover" />
           </div>
           <div className="w-2/3 pl-4">
             <h2 className="text-xl font-semibold mb-2 text-gray-200">Atomic Habits</h2>
             <p className="text-gray-500 mb-4">Book Description</p>
           </div>
         </div>
       </div>
     </div>
     <div className="max-w-md w-full mx-4 lg:mx-4">
       <div className="bg-[#000300] shadow-md rounded-md p-4">
         <h2 className="text-xl font-semibold mb-2 text-[#00df9a]">Challenges</h2>
         {challenges.map((challenge) => (
           <div key={challenge.id} className="flex flex-row items-center mb-2">
             <div className="h-2 w-2 rounded-full bg-[#00df9a] mr-2"></div>
             <p className="text-sm text-white">{challenge.title}</p>
             <p className={`text-sm ml-auto ${challenge.status === "en cours" ? "text-yellow-500" : challenge.status === "terminé" ? "text-green-500" : "text-red-500"}`}>{challenge.status}</p>
             </div>
           ))}
         </div>
       </div>
  </div>
  )
}

export default Hero2
