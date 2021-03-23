/*import logo from './logo.svg';*/
/*import Book from './book'; */
import './App.css';
import data from './data';
import BookCard from './BookCard';

/********* Exercici 2  *****************/
/*export default () => { 
  return ( 
      <div> 
          <Book />
      </div> 
    );
}; */

/********** Exercici 3 *****************/

function App() {
  return (
    <div className="wrapper">
      {data.map(book => (
        <BookCard 
          key={book.name}
          name={book.title}
          author={book.author}/>
      ))}
    </div>
  )
}

export default App;