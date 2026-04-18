import BookCard from "@/components/BookCard";
import React from "react";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 10 },
  });
  const books = await res.json();
  return (
    <div className="w-11/12 mx-auto">
      <h2>Books: {books.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
