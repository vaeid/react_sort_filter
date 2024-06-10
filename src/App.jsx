import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

import { useState } from 'react';

function App() {
  const [sorter, setSorter] = useState('latest');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [status, setStatus] = useState('all');
  const [showProjects, setShowProjects] = useState(false);

  const handleSortChange = (value) => {
    setSorter(value);
  };
  const handlerCategoryChange = (value) => {
    setCategoryFilter(value);
  };
  const handlerStatusChange = (value) => {
    setStatus(value);
  };
  const handelShowProjects = () => {
    setShowProjects(true);
  };
  return (
    <div>
      <div className={showProjects ? 'hidden' : 'flex justify-center items-center h-screen'}>
        <button className='rounded-lg px-6 py-3 bg-blue-600 text-white font-bold' onClick={() => handelShowProjects()}>
          مشاهده پروژه ها
        </button>
      </div>
      <div className={showProjects ? '' : 'hidden'}>
        <Header
          onSort={handleSortChange}
          onCategory={handlerCategoryChange}
          onStatus={handlerStatusChange}
          status={status}
        />
        <ProjectList sorter={sorter} categoryFilter={categoryFilter} status={status} />
      </div>
    </div>
  );
}

export default App;
