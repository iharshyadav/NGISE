
import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'



const Navbar=()=> {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const currentPathname = location.pathname;
  console.log(currentPathname)

  return (
    <div className="relative w-full sm:h-20 bg-white border-b-2">
      <div className="mx-auto sm:h-20 flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
         <img className='sm:w-[4.5vw] w-[12vw]' src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png" alt="" />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <Link to='/'><li className={`text-base font-semibold ${currentPathname === '/' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Home</li></Link>
            <Link to='/about'><li className={`text-base font-semibold ${currentPathname === '/about' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>About</li></Link>
            <Link to='/callforpaper'><li className={`text-base font-semibold ${currentPathname === '/callforpaper' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Call For Paper</li></Link>
            <Link to='/papersubmission'><li className={`text-base font-semibold ${currentPathname === '/papersubmission' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Paper Submission</li></Link>
            <Link to='/commitee'><li className={`text-base font-semibold ${currentPathname === '/commitee' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Commitee</li></Link> 
            <Link to='/acceptedpaper'><li className={`text-base font-semibold ${currentPathname === '/acceptedpaper' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Accepted Paper</li></Link> 
            <Link to='/Registration'><li className={`text-base font-semibold ${currentPathname === '/Registration' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Registration</li></Link> 
            <Link to='/accomodation'><li className={`text-base font-semibold ${currentPathname === '/accomodation' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Accomodation</li></Link>
            <Link to='/contact'><li className={`text-base font-semibold ${currentPathname === '/contact' ? 'underline' : 'text-gray-800'} hover:text-gray-900`}>Contact Us</li></Link> 
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
                     <Link to='/'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold text-gray-800 hover:text-gray-900">Home</li></Link>
                     <Link to='/about'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer text-gray-800 hover:text-gray-900">About</li></Link>
                     <Link to='/callforpaper'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer text-gray-800 hover:text-gray-900">Call For Paper</li></Link>
                     <Link to='/papersubmission'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Paper Submission</li></Link>
                     <Link to='/commitee'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Commitee</li></Link> 
                     <Link to='/acceptedpaper'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Accepted Paper</li></Link> 
                     <Link to='/Registration'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Registration</li></Link> 
                     <Link to='/accomodation'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold text-gray-800 hover:text-gray-900">Accomodation</li></Link>
                     <Link to='/contact'><li onClick={()=>setIsMenuOpen(false)} className="text-base font-semibold hover:cursor-pointer  text-gray-800 hover:text-gray-900">Contact Us</li></Link> 
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