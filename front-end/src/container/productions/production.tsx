import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Grid,
    Typography
} from '@mui/material'
import React from 'react'
import BHCard from '../../component/card-production/BHCard'

const Production = () => {

    return (
        <Box style={{ width: '100%', height: '100vh', overflow: 'scroll', overflowX: 'hidden' }}>
            <Typography className="text-uppercase h-2 text-danger text-center">
                danh sách sản phẩm
            </Typography>
            <Grid container spacing={2} className='p-4'>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3} >
                    <BHCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Production