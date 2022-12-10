import BookCard from '../components/bookCard'

export default function BookList() {
  return (
    <div className="md:container md:mx-auto">
        {/* The latest changes panel*/}
        <div>
          <div className="mb-5 p-3
            mw-3
            md:rounded md:mx-3 md:border md:border-slate-600">
            
            <p className="mb-1 text-e text-2xl text-center">Your books</p>
         
              <BookCard />  
              <BookCard />  
              <BookCard />  
              <BookCard />  
              <BookCard />  
          </div>
        </div>

    </div>
  );
}
