import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const BHCard = () => {
    return (
        <>
            <Card sx={{ width: '100%' }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image="https://th.bing.com/th/id/OIP.DlhXGRMzqOTFwwvO7f3N4AHaEi?pid=ImgDet&rs=1"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-end">
                    <Button
                        className='me-2 mb-2'
                        size="medium"
                        variant='contained'
                        startIcon={
                            <LocalGroceryStoreIcon />
                        }
                    >
                        Thêm
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default BHCard