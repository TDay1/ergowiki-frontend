import { Link } from 'react-router-dom'

function BookCard() {
  return (
    <div className="m-2 p-3 
      rounded-md border border-slate-600 text-xl
      transition hover:font-bold
      ">
      
      <Link to="/book/mybook" className="flex justify-between">
        <p className="align-left break-all
          text-ergo-heading dark:text-ergo-heading-dark">My book</p>
      </Link>
    
    </div>
  );
}

export default BookCard;
