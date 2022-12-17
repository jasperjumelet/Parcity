import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
const Admin = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">
      <NavBar />
      <div className="p-12"></div> {/* use this to add a invisible block at navbar */}
      <div className="grid grid-cols-2 gap-10">
        <div className="mx-10 h-screen bg-gray-900">
          <div className="flex flex-col">
            <div className="flex flex-row justify-center">
              <h2 className="font-jetbrains-mono justify-center font-[600] text-4xl text-gray-100">Manage Users</h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-9 mt-8">
              {/* Need to add more content here */}
              <div className="grid-col-1 grid-row-1 h-80 bg-green-400">
              </div>
              <div className="grid-col-2 grid-row-1 h-80 bg-green-400">
              </div>
              <div className="grid-col-1 grid-row-2 h-80 bg-green-400">
              </div>
              <div className="grid-col-2 grid-row-2 h-80 bg-green-400">
              </div>
            </div>
          </div>

        </div>
        <div className="mx-10 h-screen bg-gray-900">
          <div className="flex flex-col ">
            <div className="flex flex-row justify-center">
              <h2 className="font-jetbrains-mono font-[600] text-4xl text-gray-100">Manage Properties</h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-9 mt-8">
              {/* Need to add more content here */}
              <div className="grid-col-1 grid-row-1 h-80 bg-green-400">
              </div>
              <div className="grid-col-2 grid-row-1 h-80 bg-green-400">
              </div>
              <div className="grid-col-1 grid-row-2 h-80 bg-green-400">
              </div>
              <div className="grid-col-2 grid-row-2 h-80 bg-green-400">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin;
