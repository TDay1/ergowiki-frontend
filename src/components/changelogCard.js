import { Link } from 'react-router-dom'

function ChangelogCard() {
  return (
    <Link to="/book/mybook">
    <div className="border border-black dark:border-slate-600 m-2 p-3 rounded-md
            transition hover:font-bold" >
      <p className="text-xl align-left break-all">My knowledge item</p>
      <div className="flex justify-between">
        <p className="text-sm ">My book</p>
        <p className="text-sm">26th of January, 2020</p>
      </div>
    </div>
      </Link>
  );
}

export default ChangelogCard;
