import './App.css';

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
    deadline: '2023-12-23T12:55:48.740Z',
    createdAt: '2023-10-23T18:18:55.636Z',
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
    deadline: '2023-12-23T12:55:48.740Z',
    createdAt: '2023-10-23T18:18:55.636Z',
    updatedAt: '2024-06-02T13:37:48.468Z',
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  return (
    <>
      <div className='flex gap-2 p-2 mt-6'>
        <h2 className='font-bold lg:text-2xl self-center text-nowrap'>لیست پروژه ها</h2>
        <div className='flex-auto'>
          <div className='flex justify-end content-center md:gap-4 gap-2'>
            <div className='flex '>
              <span className='p-2'>وضعیت</span>
              <div className='bg-white p-2 rounded-lg flex justify-center gap-2'>
                <button className='font-bold px-1 md:px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-200'>
                  همه
                </button>
                <button className='font-bold px-1 md:px-4  rounded-lg hover:bg-blue-200'> باز</button>
                <button className='font-bold px-1 md:px-4  rounded-lg hover:bg-blue-200'> بسته</button>
              </div>
            </div>
            <div className='bg-white p-2 rounded-lg'>
              <select name='' id='' className='max-w-16 md:max-w-fit'>
                <option value=''>مرتب سازی (جدیدترین)</option>
                <option value=''> مرتب سازی (قدیمی ترین)</option>
              </select>
            </div>
            <div className='bg-white p-2 rounded-lg'>
              <select name='' id='' className='max-w-16 md:max-w-fit'>
                <option value=''>دسته بندی (همه)</option>
                <option value=''>دسته بندی (باز)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <table>
          <tr>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
