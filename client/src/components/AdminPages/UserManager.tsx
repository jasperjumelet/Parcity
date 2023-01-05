import { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import UserManagerItem from '../AdminPages/admincomponents/UserManagerItem';
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
        <UserManagerItem name="jasper" email="test@gmail.com" />
        <UserManagerItem name="olof" email="stok@gmail.com" />
      </div>
    </>
  )
}

export default UserManager
