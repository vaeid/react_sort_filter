import Selector from './Selector';

export default function Header({ onSort, onCategory, onStatus }) {
  return (
    <div className='flex  flex-wrap justify-center gap-2 p-2 mt-6'>
      <h2 className='font-bold lg:text-2xl self-center text-nowrap'>لیست پروژه ها</h2>
      <div className='flex-auto'>
        <div className='flex  flex-wrap md:justify-end content-center md:gap-4 gap-2'>
          <div className='flex '>
            <span className='p-2'>وضعیت</span>
            <div className='bg-white p-2 rounded-lg flex justify-center gap-2'>
              <button
                onClick={() => onStatus('all')}
                className='font-bold px-1 md:px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-200'
              >
                همه
              </button>
              <button onClick={() => onStatus('OPEN')} className='font-bold px-1 md:px-4  rounded-lg hover:bg-blue-200'>
                {' '}
                باز
              </button>
              <button
                onClick={() => onStatus('CLOSED')}
                className='font-bold px-1 md:px-4  rounded-lg hover:bg-blue-200'
              >
                {' '}
                بسته
              </button>
            </div>
          </div>
          <Selector handelChange={onSort}>
            <option value='latest'>مرتب سازی (جدیدترین)</option>
            <option value='earliest'> مرتب سازی (قدیمی ترین)</option>
          </Selector>

          <Selector handelChange={onCategory}>
            <option value='All'>دسته بندی (همه)</option>
            <option value='1'> طراحی UI/UX</option>
            <option value='2'> برنامه نویسی وب</option>
            <option value='3'> برنامه نویسی موبایل</option>
          </Selector>
        </div>
      </div>
    </div>
  );
}
