import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const BHItems = () => {
    return (
        <Grid container spacing={2} className='p-4'>
            <Grid item xs={10} sm={10} lg={10}>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://th.bing.com/th/id/OIP.6bGRuz-04JrY2VMmP_tz1QHaEK?pid=ImgDet&rs=1"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                    </Box>

                </Card>

            </Grid>
            <Grid item xs={2} sm={2} lg={2} className='d-flex align-items-center'>
                <Typography>Số lượng: 10</Typography>
                <Box className="d-flex justify-content-around">
                    <IconButton>
                        <AddIcon fontSize='small' color='primary' />
                    </IconButton>
                    <IconButton>
                        <RemoveIcon fontSize='small' color='primary' />
                    </IconButton>
                </Box>
            </Grid>

        </Grid>
    )
}

export default BHItems