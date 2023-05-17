import { Autocomplete, Box, Button, Card, CardContent, CardMedia, FormControlLabel, Grid, InputLabel, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import './index.css'
import BHItems from '../../component/payment-voucher/BHItems'
const PaymentVoucher = () => {
    return (
        <Box className="position-relative" style={{ width: '100%', height: '100vh', overflow: 'scroll', overflowX: 'hidden' }}>
            <Box>
                <Typography className="text-uppercase h-3 text-danger text-center">
                    Thông tin khách hàng
                </Typography>
                <Grid container spacing={3} className="p-2">
                    {/* Họ và tên */}
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Khách hàng</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                    {/* Số điện thoại */}
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Số điện thoại</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                    {/* Email */}
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Email</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                    {/* Giới tính */}
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Giới tính</InputLabel>

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={true}
                                    // onChange={handleChange}
                                    name="gender" />
                            }
                            label="Giới tính"
                        />
                    </Grid>
                    {/* Hạng */}
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Hạng</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                </Grid>

            </Box>
            <Box>
                <Typography className="text-uppercase h-3 text-danger text-center">
                    Giỏ hàng
                </Typography>
                <BHItems />
                <BHItems />
                <BHItems />
                <BHItems />
                <BHItems />
                <BHItems />
                <BHItems />
                <BHItems />
                <BHItems />
            </Box>
            <Box
                className="position-fixed bottom-0 end-0 m-4 me-5"
            >
                <Box className="text-end">
                    <Button variant="contained" color='success'>Thanh toán</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default PaymentVoucher