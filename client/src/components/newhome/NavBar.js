import './styles.css' 

const NavBar = () => {
  return (
    <>
    <nav className="px-2">
      <div className="container flex flex-wrap item-center justify-between mx-auto ">
        <a href="#" class="flex items-center">
          <img src="/parcity3.svg" class="h-6 mr-3 sm:h-12 mt-5" alt="Parcity Logo" /> 
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center float-right place-items-end p-2 ml-2 mt-5 text-sm text-gray-100 rounded-lg md:hidden hover:bg-sky-700/50 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-8 h-8 " aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full mt-8 md:block md:w-auto" id="navbar-default">
          <ul className="flex"> 
            <li>
              <a href="#" className="text-gray-400 mx-7">BUY</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 mx-7">SELL</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 mx-7">EXPLORE</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 ml-96 mr-3">LOGIN</a>
            </li>
            <li>
              <p className="text-gray-400 mx-3">|</p>
            </li>
            <li>
              <a href="#" className="text-gray-400 mx-3">SIGN UP</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 

    </>
  )
}

export default navButton;
