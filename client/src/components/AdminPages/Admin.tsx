import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
const Admin = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
      <NavBar />
      <div className="p-12"></div> {/* use this to add a invisible block at navbar */}
      <div className="grid grid-cols-2 gap-24">
        <div className="h-screen bg-gray-900">
          <div className="flex justify-center">
            <h2 className="font-jetbrains-mono font-[600] text-4xl text-gray-100">Manage Users</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-9">
              {/* Need to add more content here */}
            </div>
          </div>

        </div>
        <div className="h-screen bg-gray-900">
          <div className="flex justify-center">
            <h2 className="font-jetbrains-mono font-[600] text-4xl text-gray-100">Manage Properties</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin;
