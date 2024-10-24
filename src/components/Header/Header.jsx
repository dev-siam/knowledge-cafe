import profile from '../../assets/images/profile.avif'
export default function Header() {
  return (
    <header className='flex justify-between items-center border-b-2 mx-auto max-w-7xl p-4'>
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} className='w-12 rounded-full' alt="profile" />
    </header>
  );
}
