import { Box, Button, ImageList, InputAdornment, Paper, Slide, TextField, Typography } from '@mui/material'
import React from 'react'
import './login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { TransitionProps } from '@mui/material/transitions';
import LinearIndeterminate from '../../component/linearIndeterminate/linearIndeterminate';
import { AccountModel, UserModel } from '../../common/interface/BHInterface';
import axios from 'axios';
import { BASE_URL } from '../../common/config';
import { postApiAll } from '../../common/api/get-apit';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../component/linearIndeterminate/linearIndeterminate';


const Login = () => {


  const [isLoading, setLoading] = React.useState<boolean>(false);

  const [account, setAccount] = React.useState<UserModel>({} as UserModel);

  const navigate = useNavigate();

  const SessionLogin = JSON.parse(localStorage.getItem("UserLogin") || "{}");

  const handleChange = (e: any) => {

    const { name, value } = e.target;

    setAccount({
      ...account,
      [name]: value
    });

  }


  const handleSubmit = () => {

    setLoading(true);

    if (account.password && account.username) {

      postApiAll('/api/BHAccounts/Login', account)

        .then(function (response) {

          setTimeout(() => {

            if (response.status === 0) {
              localStorage.setItem("UserLogin", JSON.stringify({ ...response, isLogin: true }));

              navigate('/dashboard');
            }
            setLoading(false);
          }, 1000);

        })
        .catch(function (error) {

          setLoading(false);

          console.log(error);

        });
    }

  }

  React.useEffect(() => {
    if (SessionLogin.isLogin === true) {
      navigate('./dashboard');
    } else {
      localStorage.setItem("UserLogin", JSON.stringify({ isLogin: false }));
    }
  }, [])

  return (
    <Box className="login-father">
      {/* Loading */}
      {/* <LinearIndeterminate /> */}
      <Box className="login-dialog"
        translate='yes'
      >


        <Typography
          className="text-center text-danger m-3"
          variant='h4'
        >
          Đăng nhập
        </Typography>
        <Box className='w-100 mb-2'>
          <TextField
            className='cc-input-login'
            name='username'
            value={account?.username}
            placeholder='Tên đăng nhập'
            variant='outlined'
            onChange={handleChange}
            // color='secondary'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className='w-100 mb-2'>
          <TextField
            className='cc-input-login'
            name='password'
            value={account?.password}
            placeholder='Mật khẩu'
            variant='outlined'
            size='small'
            onChange={handleChange}
            type='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className='w-100 d-flex justify-content-center mt-3'>
          <Button
            variant='contained'
            size='small'
            onClick={handleSubmit}
          >
            Đăng nhập
          </Button>
        </Box>
        <Paper elevation={3} />
      </Box>
      
      <Loading isLoading={isLoading} />

    </Box>
  )
}


export default Login