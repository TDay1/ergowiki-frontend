import ChangelogCard from '../components/changelogCard'
import BookCard from '../components/bookCard'

export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">

        {/* The latest changes panel*/}
        <div>
          <div className="mb-5 p-3
            md:rounded md:mx-3 md:border md:border-slate-600">
            <p className="mb-1 text-e text-2xl text-center">Recent Changes</p>
            <ChangelogCard />
            <ChangelogCard />
            <ChangelogCard />
            <ChangelogCard />
            <ChangelogCard />
          </div>
        </div>

        {/* The spaces panel */}
        <div>
          <div className="mb-5 p-3
            md:rounded md:mx-3 md:border md:border-slate-600">
            <p className="mb-1 text-2xl text-center">My books</p>
            <div class="grid grid-cols-1 sm:grid-cols-2">
              <BookCard />  
              <BookCard />  
              <BookCard />  
              <BookCard />  
              <BookCard />  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
