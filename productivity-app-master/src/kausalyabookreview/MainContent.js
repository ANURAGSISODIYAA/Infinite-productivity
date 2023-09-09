import React from 'react';
import BookContainer from './BookContainer';
import "./bookreview.css";
import finish from "./518zn-CzddL..jpg";
import goal from "./51TqRvf51wL.jpg";
import work from "./714TiEEKIbL._AC_UF1000,1000_QL80_.jpg";
import magnetic from "./71lprObHiSL._AC_UF1000,1000_QL80_.jpg";
import best from "./Best-Life-200x300.webp"
import Base from '../components/base';

function MainContent() {
  // Define an array of book objects with data
  const books = [
    {
      id: 1,
      imgSrc: finish,
      altText: 'Book 1',
      title: 'Finish What You Start',
    },
    {
      id: 2,
      imgSrc: goal,
      altText: 'Book 2',
      title: 'Goal Setting',
    },
    {
      id: 3,
      imgSrc:work,
      altText: 'Book 3',
      title: 'Work Energy',
    },
    {
      id: 4,
      imgSrc: magnetic,
      altText: 'Book 4',
      title: 'Magnetic Goals',
    },
    {
      id: 5,
      imgSrc: best,
      altText: 'Book 5',
      title: 'Creating Your Best Life',
    },
  ];

  return (
    <Base>
    <main>
      <section id="bookReviews">
        {books.map((book) => (
          <BookContainer
            key={book.id}
            imgSrc={book.imgSrc}
            altText={book.altText}
            title={book.title}
          />
        ))}
      </section>
  
    </main>

  

    <footer>
  <h4>@copy; 2023 About Infinite Productix</h4>
          <p>
            Infinite Productix is dedicated to empowering students with the tools and knowledge they need to excel in their studies and beyond. We provide valuable resources, tips, and strategies to boost productivity, time management, and academic success.
          </p>
  </footer>
    </Base>
 
  );

}

export default MainContent;
