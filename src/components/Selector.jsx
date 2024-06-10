export default function Selector({ children, handelChange }) {
  return (
    <div className='bg-white p-2 rounded-lg'>
      <select name='' id='' onChange={(e) => handelChange(e.target.value)}>
        {children}
      </select>
    </div>
  );
}
