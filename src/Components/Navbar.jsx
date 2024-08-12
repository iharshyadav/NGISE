import React , {useEffect} from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar=()=> {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [isMenuOpen1, setIsMenuOpen1] = React.useState(false)
  const location1 = useLocation();

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1)
  }

  const currentPathname = location.pathname;
  console.log(currentPathname)

 
  useEffect(() => { 
    const hash = location.hash;
    if (hash === '#organizing-committee') {
      const section = document.getElementById('organizing-committee');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  
  
  return (
    <div className=" w-full sm:h-20 border-b-2 border-black bg-white bg-opacity-  z-50">
      <div className="mx-auto sm:h-20 flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
         <img className='sm:w-[4.5vw] w-[12vw]' src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png" alt="" />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <Link to='/'><li className={`text-base font-semibold ${currentPathname === '/' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Home</li></Link>
            <Link to='/about'><li className={`text-base font-semibold ${currentPathname === '/about' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>About</li></Link>
            <Link to='/callforpaper'><li className={`text-base font-semibold ${currentPathname === '/callforpaper' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Call For Paper</li></Link>
            <Link to='/papersubmission'><li className={`text-base font-semibold ${currentPathname === '/papersubmission' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Paper Submission</li></Link>
            <li className="relative z-50 ">
              <span className={`flex items-center text-base font-semibold cursor-pointer ${currentPathname === '/commitee' ? 'text-[#46ce9c]' : 'text-gray-800'}  hover:text-[#00cc99] `} onClick={toggleMenu1}>Committee <RiArrowDropDownLine className='text-2xl' />  </span>
              {isMenuOpen1 && (
                <ul className="bg-white w-[12vw] ring-1 ring-white ring-opacity-20  absolute mt-4 font-semibold  shadow-lg">
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to="/commitee#organizing-committee" onClick={() => { setIsMenuOpen1(false); }} > Organizing Committee </Link>
                  </li>
               <li className="py-1 px-2 hover:text-[#00cc99]">
                 <Link to="/commitee#program-committee" onClick={() => setIsMenuOpen1(false)}>Program Committee</Link>
               </li>
                </ul>
              )}
            </li>      
            <Link to='/acceptedpaper'><li className={`text-base font-semibold ${currentPathname === '/acceptedpaper' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Accepted Paper</li></Link> 
            <Link to='/Registration'><li className={`text-base font-semibold ${currentPathname === '/Registration' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Registration</li></Link> 
            <Link to='/accomodation'><li className={`text-base font-semibold ${currentPathname === '/accomodation' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Accomodation</li></Link>
            <Link to='/contact'><li className={`text-base font-semibold ${currentPathname === '/contact' ? 'text-[#46ce9c]' : 'text-gray-800'} hover:text-[#00cc99]`}>Contact Us</li></Link> 
          </ul>
        </div>
        <div className="hidden lg:block">
          {/* <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button> */}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex w-[9.5vw] items-center space-x-2">
                    <img className='w-[9.5vw]' src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                     <Link to='/'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold text-gray-800 hover:text-[#46ce9c] ">Home</li></Link>
                     <Link to='/about'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold hover:cursor-pointer  hover:text-gray-900">About</li></Link>
                     <Link to='/callforpaper'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold hover:cursor-pointer text-gray-800 hover:text-gray-900">Call For Paper</li></Link>
                     <Link to='/papersubmission'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Paper Submission</li></Link>
                     <li className="relative z-50 flex " >
              <span className={`flex items-center text-base font-semibold cursor-pointer hover:text-[#00cc99] `} onClick={toggleMenu1}>Committee <RiArrowDropDownLine className='text-2xl' />  </span>
              {isMenuOpen1 && (
                <ul className="bg-white w-[34vw] ring-1 ring-white ring-opacity-20  absolute mt-8 font-semibold  shadow-lg">
                  <li className="py-1 px-2 hover:text-[#00cc99]" onClick={()=>setIsMenuOpen(false)}>
                    <Link to="/commitee#organizing-committee" onClick={() => { setIsMenuOpen1(false); }} > Organizing Committee </Link>
                  </li>
               <li className="py-1 px-2 hover:text-[#00cc99]" onClick={()=>setIsMenuOpen(false)}>
                 <Link to="/commitee#program-committee" onClick={() => setIsMenuOpen1(false)}>Program Committee</Link>
               </li>
                </ul>
              )}
            </li> 

                     <Link to='/acceptedpaper'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Accepted Paper</li></Link> 
                     <Link to='/Registration'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Registration</li></Link> 
                     <Link to='/accomodation'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold text-gray-800 hover:text-gray-900">Accomodation</li></Link>
                     <Link to='/contact'><li onClick={()=>setIsMenuOpen(false)} className="flex text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Contact Us</li></Link> 
                  </nav>
                </div>
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar