
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [books ,setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z8BNeeG0UKzmm1JbSHOHIARqTVG4JW0c')
    .then(resp => resp.json())
    .then((data) => {
      console.log(data.results.books);
      setBooks(data.results.books);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  if (loading) {
    return(
      <div>
        <div>loading....</div>
      </div>
    );
  } else {
    return (
      <div style={{padding:10, paddingLeft:'30px'}}>
        <div > 
          <br />
          <h2 style={{fontFamily:'sans-serif'}}>New York Times best selling books</h2>
          <hr />
          </div>
        <div>
        <div class='row'>
          {
              books.map((book, i) => (
             <div className='col-md-4' > 
          <div class="card" style={{width:'250px'}}>
          <img class="card-img-top" src={book.book_image} alt="Card image cap" />
          <div class="card-body">
          <h5 class="card-title">{book.title}</h5>
          <i>{book.author}</i>
          <p class="card-text">{book.description}</p>
          <a href="#" class="btn btn-primary">$ {book.price} </a>
          </div>  
        </div>
        </div>
              ))
          }
       
         </div>

        </div>
        <hr />
      </div>
    );
  }


}

export default App;
