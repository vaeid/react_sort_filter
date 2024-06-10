export default function Selector({ children, handelChange, name }) {
  return (
    <div className='bg-white p-2 rounded-lg'>
      <select name={name} onChange={(e) => handelChange(e.target.value)}>
        {children}
      </select>
    </div>
  );
}
