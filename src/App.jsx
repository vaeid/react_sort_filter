import './App.css';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

import { useState } from 'react';

const Allprojects = [
  {
    _id: 1,
    title: 'طراحی اپلیکیشن سفر آنلاین',
    description: 'طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین',
    status: 'CLOSED',
    category: {
      id: 1,
      title: 'طراحی UI/UX',
      englishTitle: 'design-ui/ux',
    },
    budget: 10000,
    tags: ['Ui/UX', 'Figma'],
    deadline: '2023-09-23T12:55:48.740Z',
    createdAt: '2023-01-23T18:18:55.636Z',
    updatedAt: '2024-06-02T13:37:48.468Z',
  },
  {
    _id: 2,
    title: 'توسعه سایت فروشگاهی',
    description: 'یک سایت فروشگاهی کامل با پنل ادمین',
    status: 'OPEN',
    category: {
      id: 2,
      title: 'برنامه نویسی وب',
      englishTitle: 'web development',
    },
    budget: 50000,
    tags: ['React', 'Nodejs', 'online shop'],
    deadline: '2023-10-23T12:55:48.740Z',
    createdAt: '2023-02-23T18:18:55.636Z',
    updatedAt: '2024-06-02T13:37:48.468Z',
  },
  {
    _id: 3,
    title: 'توسعه اپلیکیشن املاک',
    description: 'یک سایت فروشگاهی کامل با پنل ادمین',
    status: 'OPEN',
    category: {
      id: 3,
      title: 'برنامه نویسی موبایل',
      englishTitle: 'android development',
    },
    budget: 50000,
    tags: ['React', 'Nodejs', 'online shop'],
    deadline: '2023-11-23T12:55:48.740Z',
    createdAt: '2023-03-23T18:18:55.636Z',
    updatedAt: '2024-06-02T13:37:48.468Z',
  },
  {
    _id: 4,
    title: ' سایت خبری وردپرسی',
    description: 'یک سایت فروشگاهی کامل با پنل ادمین',
    status: 'CLOSED',
    category: {
      id: 2,
      title: 'برنامه نویسی وب',
      englishTitle: 'web development',
    },
    budget: 400000,
    tags: ['React', 'Nodejs', 'online shop'],
    deadline: '2023-12-23T12:55:48.740Z',
    createdAt: '2023-04-23T18:18:55.636Z',
    updatedAt: '2024-06-02T13:37:48.468Z',
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [projects, setProjects] = useState(Allprojects);
  const [sorter, setSorter] = useState('latest');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [status, setStatus] = useState('All');
  const handlerSort = (value) => {
    setSorter(value);
  };
  const handlerCategory = (value) => {
    setCategoryFilter(value);
  };
  const handlerStatus = (value) => {
    setStatus((s) => value);
    console.log(status);
  };
  return (
    <div>
      <Header onSort={handlerSort} onCategory={handlerCategory} onStatus={handlerStatus} />
      <ProjectList projects={projects} sorter={sorter} categoryFilter={categoryFilter} />
    </div>
  );
}

export default App;
