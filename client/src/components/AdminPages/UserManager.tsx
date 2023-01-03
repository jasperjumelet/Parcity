import { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import axios from '../../api/axios';
import { AxiosError, AxiosResponse } from 'axios';

const GET_DB_URL = '/api/users/getall'

const UserManager = () => {
  const [users, setUsers] = useState<AxiosResponse | null>(null)

  useEffect(() => {
    axios.get(GET_DB_URL)
      .then((response) => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className="bg-gradient-to-b from-primary to-secondary/70 min-h-screen">

        <NavBar />
        <div className="p-12"></div>
        <div className="flex flex-col justify-center">
          <div className="h-16 border-1 border-black bg-gray-100 mx-10 rounded-xl flex flex-row">

            <p className="font-jetbrains-mono font-[500] text-md text-black text-center pt-5 pl-5">jasper</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default UserManager
