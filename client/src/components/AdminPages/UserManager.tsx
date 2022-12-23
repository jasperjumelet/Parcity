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
      <NavBar />
    </>
  )
}

export default UserManager
