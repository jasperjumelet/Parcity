import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
const Admin = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
      <NavBar />
      <div className="p-12"></div> {/* use this to add a invisible block at navbar */}
      <div className="grid grid-cols-2">
        <div className="h-96 border-8 border-blue-600 bg-gray-100 mx-10 mt-48 rounded-3xl flex flex-col justify-center text-black hover:border-orange-600 hover:bg-black hover:text-gray-100">
          <div className="flex justify-center text-center">
            <h3 className="font-jetbrains-mono font-[500] text-xl md:text-5xl">Manage Users</h3>
          </div>
        </div>

        <div className="h-96 border-8 border-blue-600 bg-gray-100 mx-10 mt-48 rounded-3xl flex flex-col justify-center text-black hover:border-orange-600 hover:bg-black hover:text-gray-100">
          <div className="flex justify-center text-center">
            <h3 className="font-jetbrains-mono font-[500] text-xl md:text-5xl">Manage Properties</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin;
