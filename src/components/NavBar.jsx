import {Link} from 'react-router-dom'
export const NavBar = () => {
  return (
    <div>
        <h3 className='mt-[30px] ml-[720px] text-black text-3xl font-serif flex bg-red w-[450px]'>Work Opportunities in  Japan  <img src="../../japanflag.png" alt="japanflag"  className='w-10 ml-5' /></h3>
        <nav className='ml-[800px] mt-5' >
            <ul className='flex '>
                <li className='mr-[20px] '>
                <Link to = '/' className='text-xl'>Home</Link>
                </li>
                <li className='mr-[20px] '>
                <Link to = '/about' className='text-xl'>About</Link>
                </li>
                <li>
                <Link to = '/jobs' className='text-xl'>Job Listing</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
