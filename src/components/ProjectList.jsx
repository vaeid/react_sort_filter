const projects = [
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
export default function ProjectList({ sorter, categoryFilter, status }) {
  let sortedProjects = projects;
  if (sorter === 'earliest')
    sortedProjects = [...projects].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (sorter === 'latest') sortedProjects = [...projects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (categoryFilter !== 'all') {
    sortedProjects = sortedProjects.filter((p) => p.category.id == categoryFilter);
  }
  if (status !== 'all') {
    sortedProjects = sortedProjects.filter((p) => p.status == status);
  }
  if (sortedProjects.length === 0) {
    return (
      <div className='p-2 m-6 bg-yellow-100 rounded-lg p-2'>
        <h2 className='font-bold text-xl text-orange-800'>توجه</h2>
        <p className='font-bold text-orange-800'> پروژه ای مطابق با گزینه هایی که انتخاب کرده اید یافت نشد!</p>
      </div>
    );
  }
  return (
    <div className='p-2 mt-6'>
      <table className='border-collapse table-auto w-full'>
        <thead>
          <tr className='font-bold border-b-2'>
            <th className='pb-4'>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.map((project) => (
            <ProjectRow key={project._id} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProjectRow({ project }) {
  return (
    <tr className=' bg-white border-b-2 shadow-inner hover:bg-blue-50'>
      <td className='py-4 pr-2'>{project._id}</td>
      <td>{project.title}</td>
      <td>{project.budget}</td>
      <td>
        {new Date(project.deadline).toLocaleString('fa-IR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}
      </td>
      <td>
        <Badge status={project.status} />
      </td>
      <td className='cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='size-6 text-blue-500 inline'
        >
          <path d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
        </svg>
      </td>
    </tr>
  );
}
function Badge({ status }) {
  if (status === 'OPEN') return <span className='text-white px-4 rounded-2xl bg-green-500'>باز</span>;
  return <span className='text-white px-2 rounded-2xl bg-red-500'>بسته</span>;
}
