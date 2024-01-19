import { FaGithub } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'


const Nav = () => {
  return (
    <header className='w-ful'>        
        <nav className="px-6 py-4 md:px-20 flex items-center justify-end">
            <ul className='flex gap-5 justify-center items-center font-medium'>
                <li>
                    Projects
                </li>
                <li>
                    Contact Me
                </li>
                <li>
                    <a 
                        href="https://github.com/somyabhattcu1"
                        target='_blank'
                        rel='noopener noreferrer'    
                    >
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