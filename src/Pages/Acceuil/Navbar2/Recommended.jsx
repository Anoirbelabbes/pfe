import React from 'react'

const Recommended = ({ books2 }) => {
    if (!books2) {
        return <div>Aucun livre à afficher</div>;
      }
  return (
    <div>
        <div className="bg-[#000300] py-4 px-2 ">
          <h2 className="text-lg font-bold mb-10 text-[#00df9a]">Recommended</h2>
          <div className="overflow-x-auto whitespace-nowrap text-center">
            {books2.map((book2) => (
              <div key={book2.id} className="inline-block mx-4">
                <img src={book2.image} alt={book2.title} className=" w-48 h-80 object-cover hover:transform hover:scale-110 transition-all duration-500 rounded-2xl" />
                <p className="mt-2 text-sm w-32 break-all text-neutral-400">{book2.title}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Recommended
