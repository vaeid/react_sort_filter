import Selector from './Selector';

export default function Header({ onSort, onCategory, onStatus, status }) {
  return (
    <div className='flex  flex-wrap justify-center gap-2 p-2 mt-6'>
      <h2 className='font-bold lg:text-2xl self-center text-nowrap'>لیست پروژه ها</h2>
      <div className='flex-auto'>
        <div className='flex  flex-wrap md:justify-end content-center md:gap-4 gap-2'>
          <div className='flex '>
            <span className='p-2'>وضعیت</span>
            <div className='bg-white p-2 rounded-lg flex justify-center gap-2'>
              <Button onStatus={onStatus} status={status} value={'all'} text={'همه'} />
              <Button onStatus={onStatus} status={status} value={'OPEN'} text={'باز'} />
              <Button onStatus={onStatus} status={status} value={'CLOSED'} text={'بسته'} />
            </div>
          </div>
          <Selector name='sort' handelChange={onSort}>
            <option value='latest'>مرتب سازی (جدیدترین)</option>
            <option value='earliest'> مرتب سازی (قدیمی ترین)</option>
          </Selector>

          <Selector name='category' handelChange={onCategory}>
            <option value='all'>دسته بندی (همه)</option>
            <option value='1'> طراحی UI/UX</option>
            <option value='2'> برنامه نویسی وب</option>
            <option value='3'> برنامه نویسی موبایل</option>
          </Selector>
        </div>
      </div>
    </div>
  );
}

function Button({ onStatus, value, status, text }) {
  return (
    <button
      onClick={() => onStatus(value)}
      className={`font-bold px-1 md:px-4  rounded-lg hover:bg-blue-200 ${
        status === value ? 'bg-blue-500 text-white' : ''
      }`}
    >
      {text}
    </button>
  );
}
