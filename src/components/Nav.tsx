import { FaGithub } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'


const Nav = () => {
  return (
    <header className='w-ful'>        
        <nav className="px-6 py-4 md:px-20 flex items-center justify-end">
            <ul className='flex gap-5 justify-center items-center font-medium'>
                <li>
                    <a href="">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="">
                        Contact Me
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaGithub className='' size={30} />
                    </a>
                </li>
                <li className='hover:cursor-pointer'>
                    <MdDarkMode className='' size={30} />
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav