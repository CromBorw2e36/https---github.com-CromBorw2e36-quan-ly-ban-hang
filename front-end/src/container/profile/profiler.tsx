import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Profiler = () => {
  return (
    <Box className="w-100">
      <Typography className="text-center h-2 text-danger mb-5">Thông tin tài khoản</Typography>
      <Box className="w-100 d-flex justify-content-center mb-3">
        <CardMedia
          component="img"
          sx={{ width: 180, height: 180, borderRadius: '100%' }}
          image="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
          alt="Live from space album cover"
        />
      </Box>
      <Box className="w-100 text-center">
        <Typography className='mb-3'>Họ và tên: <strong>Nguyễn Khánh</strong></Typography>
        <Typography className='mb-3'>Giới tính: <strong>Nam</strong></Typography>
        <Typography className='mb-3'>Ngày sinh: <strong>16-10-2001</strong></Typography>
        <Typography className='mb-3'>Địa chỉ: <strong>Tổ 16, ấp 3, Phong Mỹ, Cao Lãnh, Đồng Tháp</strong></Typography>
        <Typography className='mb-3'>CCCD: <strong>123123123123</strong></Typography>
        <Typography className='mb-3'>Biển số xe: <strong>66-F1 85109</strong></Typography>
        <Typography className='mb-3'>Ghi chú: <strong>Không có mô tả</strong></Typography>
      </Box>
    </Box>
  )
}

export default Profiler