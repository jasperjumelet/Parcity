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

  const locRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const errRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  //
  // useEffect(() => {
  //   locRef.current.focus();
  // })

  useEffect(() => {
    setErrMsg('');
  }, [location])

  const handleSubmit = async (e: any) => {
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
      <h2 className="m-3">welcome to add post</h2>
      <p ref={errRef} className={errMsg ? "text-red-700" : "text-green-700"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="location" ref={locRef} className="m-3 border border-blue-800" placeholder="location" autoComplete="off" onChange={(e: any) => setLocation(e.target.value)} value={location} required />
        <input type="text" id="email" className="m-3 border border-blue-800" placeholder="email" autoComplete="off" onChange={(e: any) => setEmail(e.target.value)} value={email} required />
        <input type="text" id="price" className="m-3 border border-blue-800" placeholder="price" autoComplete="off" onChange={(e: any) => setPrice(e.target.value)} value={price} required />
        <input type="text" id="annual_yield" className="m-3 border border-blue-800" placeholder="annual yield" autoComplete="off" onChange={(e: any) => setAnnual_yield(e.target.value)} value={annual_yield} required />
        <input type="text" id="cap_rate" className="m-3 border border-blue-800" placeholder="cap rate" autoComplete="off" onChange={(e: any) => setCap_rate(e.target.value)} value={cap_rate} required />
        <input type="text" id="description" className="m-3 border border-blue-800" placeholder="description" autoComplete="off" onChange={(e: any) => setDescription(e.target.value)} value={description} required />
        <input type="submit" value="Add property" />
      </form>

    </div>
  )
}

export default AddProperties;
