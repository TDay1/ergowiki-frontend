import { useParams } from 'react-router-dom'

import BookNavigation from '../components/bookNavigation';
import PagePane from '../components/pagePane'

export default function Book() {
  const { bookId } = useParams();

  return(
    <>
      <div className="flex flex-grow">
        {/* View tree */}
        <div className="">
          <BookNavigation />
        </div>
        {/* Page window */}
        <div className="w-full h-full">
        {/*Either edit or view pages here*/}
          <PagePane />
        </div>
      </div>
    </>
  );
}
