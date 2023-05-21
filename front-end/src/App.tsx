import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router'
import { Box, Divider } from '@mui/material';
import Production from './container/productions/production';
import Profiler from './container/profile/profiler';
import { Link } from 'react-router-dom';
import PaymentVoucher from './container/payment-voucher/payment-voucher';
import Button from '@mui/material/Button';
import Dashboard from './container/dashboard/dashboard';
import Login from './container/login/login';
import Register from './container/register/Register';
import { NOTFOUND } from 'dns';
import Notfound404 from './container/notfound404/notfound404';
import Index from './container/index';
import '../node_modules/devextreme/dist/css/dx.softblue.css';
function App() {

  return (
    <Routes>
      <Route path='/*' element={<Index />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
