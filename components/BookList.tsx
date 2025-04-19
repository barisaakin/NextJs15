import React from 'react';
import BookCard from './BookCard';
interface Props {
  title: string;
  books: Book[];
  containerclassName?: string;
}

const BookList = ({ title, books, containerclassName }: Props) => {
  return (
    <section className={containerclassName}>
      <h2 className="font-bebas-neue text text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};
export default BookList;
