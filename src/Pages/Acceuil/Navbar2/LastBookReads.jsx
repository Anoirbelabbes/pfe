import React from 'react'

const LastBookReads = ({ books }) => {
    if (!books) {
        return <div>Aucun livre à afficher</div>;
      }
  return (
    <div>
        <div className="bg-[#000300] py-4 px-2 ">
          <h2 className="text-lg font-bold mb-10 text-[#00df9a] mr-11">Last Book Reads</h2>
          <div className="overflow-x-auto whitespace-nowrap text-center ">
            {books.map((book) => (
              <div key={book.id} className="inline-block mx-4">
                <img src={book.image} alt={book.title} className=" w-48 h-80 object-cover hover:transform hover:scale-110 transition-all duration-500 rounded-3xl" />
                <p className="mt-2 text-sm w-32 break-all text-neutral-400">{book.title}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default LastBookReads
