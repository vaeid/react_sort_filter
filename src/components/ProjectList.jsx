import Badge from '../components/Badge';
export default function ProjectList({ projects, sorter, categoryFilter }) {
  let sortedProjects = projects;
  if (categoryFilter !== 'All') {
    sortedProjects = projects.filter((p) => p.category.id == categoryFilter);
  }

  if (sorter === 'earliest')
    sortedProjects = [...sortedProjects].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (sorter === 'latest')
    sortedProjects = [...sortedProjects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

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
          {sortedProjects.map((project) => {
            return (
              <tr key={project._id} className=' bg-white border-b-2 shadow-inner hover:bg-blue-50'>
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
          })}
        </tbody>
      </table>
    </div>
  );
}
