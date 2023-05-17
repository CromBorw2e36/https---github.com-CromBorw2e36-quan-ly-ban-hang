import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router'
import { Box, Divider } from '@mui/material';
import Production from './container/productions/production';
import Profiler from './container/profile/profiler';
import { Link } from 'react-router-dom';
import PaymentVoucher from './container/payment-voucher/payment-voucher';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashboard from './container/dashboard/dashboard';
import Login from './container/login/login';
import Register from './container/register/Register';
import { NOTFOUND } from 'dns';
import Notfound404 from './container/notfound404/notfound404';

function App() {
  return (
    <Box
      style={{ width: '100vw', height: '100vh', padding: 0, display: 'flex' }}
    >
      <Box
        style={{ width: '20vw', height: '100%', backgroundColor: '#cbd5e1', margin: 0 }}
      >
        <Link className="nav-link" to="./dashboard">
          <Button style={{ width: '100%' }}
            startIcon={
              <DashboardIcon />
            }
          >
            Dashboard
          </Button>
        </Link>
        <Link className="nav-link" to="/production">
          <Button
            style={{ width: '100%' }}
          >
            Bán hàng
          </Button>
        </Link>
        <Link className="nav-link" to="/payment-voucher">
          <Button style={{ width: '100%' }}
          >
            Giỏ hàng
          </Button>
        </Link>
        <Link className="nav-link" to="/list-bill">
          <Button style={{ width: '100%' }}
          >
            Danh sách hóa đơn
          </Button>
        </Link>
        <Link className="nav-link" to="/profiler">
          <Button style={{ width: '100%' }}
          >
            Thông tin tài khoản
          </Button>
        </Link>
        <Divider />
        <Link className="nav-link" to="/account-management">
          <Button style={{ width: '100%' }}
          >
            Quản trị tài khoản
          </Button>
        </Link>
        <Link className="nav-link" to="/financial-management">
          <Button style={{ width: '100%' }}
          >
            Quản lý tài chính
          </Button>
        </Link>
        <Link className="nav-link" to="/history-sale">
          <Button style={{ width: '100%' }}
          >
            Lịch sử bán hàng
          </Button>
        </Link>
        <Link className="nav-link" to="/bill-management">
          <Button style={{ width: '100%' }}
          >
            Quản lý hóa đơn
          </Button>
        </Link>
        <Link className="nav-link" to="/employee-management">
          <Button style={{ width: '100%' }}
          >
            Quản lý nhân viên
          </Button>
        </Link>
        <Link className="nav-link" to="/logout">
          <Button style={{ width: '100%' }}
          >
            Đăng xuất
          </Button>
        </Link>
        <Divider/>
        <Link className="nav-link" to="/dashboard">
          <Button style={{ width: '100%' }}
          >
            Dashboard
          </Button>
        </Link>
        <Link className="nav-link" to="/dashboard">
          <Button style={{ width: '100%' }}
          >
            Quản lý cửa hàng
          </Button>
        </Link>
        <Link className="nav-link" to="/dashboard">
          <Button style={{ width: '100%' }}
          >
            Quản lý tài khoản
          </Button>
        </Link>
        <Link className="nav-link" to="/dashboard">
          <Button style={{ width: '100%' }}
          >
            Phản ánh
          </Button>
        </Link>
        <Link className="nav-link" to="/dashboard">
          <Button style={{ width: '100%' }}
          >
            Thông báo
          </Button>
        </Link>
      </Box>
      <Box
        style={{ width: '80vw', height: '100%', backgroundColor: '#f1f5f9', margin: 0 }}
      >
        <Routes>
          <Route path="/register" element={<Register />} /> 
          <Route path="/notfound-404" element={<Notfound404 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/production" element={<Production />} />
          <Route path="/payment-voucher" element={<PaymentVoucher />} />
          <Route path="/profiler" element={<Profiler />} />
        </Routes>
      </Box>
    </Box >
  );
}

export default App;
