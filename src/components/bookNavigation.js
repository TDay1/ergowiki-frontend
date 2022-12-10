import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'

// Structure Parent (Name, id) -> child (name, id)

const book = [
  { name: 'Chapter 1', id: 'id', open: true, children: [
    {name: 'page 1', id: 'id', open: true, children: []},
    {name: 'page 2', id: 'id', open: true, children: [{name: 'sub-chapter page 1', id: 'id', open: true, children: []}] },
    {name: 'page 3', id: 'id', open: true, children: []},
  ]
  },
  { name: 'Chapter 2', id: 'id', open: true, children: []},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Recursively render tree
function renderTree(item) {
  return (
    <>
      <Disclosure>
        <Disclosure.Button className={classNames(item.children.length > 0 ? "" : "", "py-2 flex justify-between w-full rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900")}>

          {/* Disclosure button contents*/}
          <span className="ml-3 text-left">{item.name}</span>

          <span className={classNames(
            (item.children.length > 0) ? `` : `invisible`, `ml-auto mr-1 text-right`)} >
            <ChevronDownIcon className="h-6 w-6"/>
          </span>

        </Disclosure.Button>

        <Disclosure.Panel className="ml-3">
          {item.children.map((children) => (
            renderTree(children)
          ))}

        </Disclosure.Panel>
      </Disclosure>
    </>
  );
}

export default function BookNavigation() {
  return(
    <>
      <aside className="h-full w-64 border-r border-black dark:border-slate-600
        " aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 rounded">

          {book.map((item) => (

            renderTree(item)
          ))}

        </div>
      </aside>
    </>
  );
}
