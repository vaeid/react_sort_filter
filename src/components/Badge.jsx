export default function Badge({ status }) {
  if (status === 'OPEN') return <span className='text-white px-4 rounded-2xl bg-green-500'>باز</span>;
  return <span className='text-white px-2 rounded-2xl bg-red-500'>بسته</span>;
}
