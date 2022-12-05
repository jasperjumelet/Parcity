import { useState, useRef, useEffect } from 'react';
import axios from '../../api/axios';
import { AxiosError } from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const ADD_PROPERTIES_URL = '/api/properties/add'

const AddProperties = () => {
  const navigate = useNavigate()
  const loc = useLocation()
  const from = loc.state?.from?.pathname || "/";

  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [annual_yield, setAnnual_yield] = useState('');
  const [cap_rate, setCap_rate] = useState('');
  const [description, setDescription] = useState('');

  const [errMsg, setErrMsg] = useState('');

  const locRef = useRef()
  const errRef = useRef()


  useEffect(() => {
    locRef.current.focus();
  })

  useEffect(() => {
    setErrMsg('');
  }, [location])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(ADD_PROPERTIES_URL,
        JSON.stringify({ location, email, price, annual_yield, cap_rate, description }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      );

      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response))

      setLocation('')
      setEmail('')
      setPrice('')
      setAnnual_yield('')
      setCap_rate('')
      setDescription('')
      navigate(from, { replace: true })
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg('no Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Data in forms')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      }
      errRef.current.focus();
    }
  }

  return (
    <div>
      <p>test</p>
    </div>
  )
}

export default AddProperties;
