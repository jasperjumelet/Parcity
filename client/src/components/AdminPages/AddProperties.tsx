import { useState } from 'react';
import axios from '../../api/axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const ADD_PROPERTIES_URL = '/api/properties/add'

const AddProperties = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div>
      <p>test</p>
    </div>
  )
}

export default AddProperties;
