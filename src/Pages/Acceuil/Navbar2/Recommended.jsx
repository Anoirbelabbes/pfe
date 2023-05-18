import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=recommended+books&maxResults=10"
      )
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="bg-[#000300] py-4 px-2 ">
        <h2 className="text-lg font-bold mb-10 text-[#00df9a]">Recommended</h2>
        <div className="overflow-x-auto whitespace-nowrap text-center">
          {books &&
            books.map((book) => (
              <div key={book.id} className="inline-block mx-4">
              <div className="overflow-hidden">
                {book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-48 h-80 object-cover hover:transform hover:scale-110 transition-all duration-500 rounded-2xl"
                  />
                )}
                <p className="mt-2 text-sm w-48 break-all text-neutral-400 max-w-full">
                  {book.volumeInfo.title}
                </p>
              </div>
            </div>

            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
