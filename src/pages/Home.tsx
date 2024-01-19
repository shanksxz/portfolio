import Nav from "../components/Nav"
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className=''>
        <Nav />
        <main
            className='mt-[8rem] px-6 flex flex-col'>
                <motion.div
                    animate={{x:[-100,0],opacity:[0,1]}}
                    transition={{ease:"easeInOut",duration:1}}
                >
                    <span className='font-heading font-medium text-[5rem]'>
                        Hey
                    </span>
                
                </motion.div>

                <motion.div
                    animate={{x:[100,0],opacity:[0,1]}}
                    transition={{ease:"easeInOut",duration:1,delay:1}}
                >
                    <span className='font-heading font-medium text-[5rem]'>
                        I'm Somya Bhatt
                    </span>
                </motion.div>

            <motion.div
                animate={{y:[100,0],opacity:[0,1]}}
                transition={{ease:"easeInOut",duration:1,delay:2}}
            >
                <p className='mt-2 font-semibold float-right text-[3rem] max-w-[780px]'>
                Crafting digital experiences from frontend finesse to backend brilliance.
                </p>
            </motion.div>

        </main>
    </section>
  )
}

export default Home 