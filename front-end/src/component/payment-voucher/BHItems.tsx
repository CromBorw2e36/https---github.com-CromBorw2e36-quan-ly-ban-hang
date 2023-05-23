import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ProductionModel } from '../../common/interface/BHInterface';




interface IProps {
    handleAddStore: (data: string) => void;
    handleRemove: (data: string) => void;
    setIsOpen?: () => void;
    productItem: ProductionModel;
    productList: any;
}


const BHItems = (props: IProps) => {

    const [total, setTotal] = React.useState<number>(0);


    React.useEffect(() => {
        const id = props.productItem.id;
        if (id) {
            countTotal(id);
        }
    }, [])

    const countTotal = (id: string) => {

        const productTemp = props.productList.filter((item: any) => item === id);

        setTotal(productTemp.length)
    }

    const handleClick = (action: string) => {
        const id = props.productItem?.id!;
        switch (action.toLocaleUpperCase()) {
            case "ADD":

                props.handleAddStore(id);

                countTotal(id)

                break;
            case "REMOVE":

                props.handleRemove(id);

                countTotal(id)

                break
        }
    }

    return (
        <Grid container spacing={2} className='p-4'>
            <Grid item xs={10} sm={10} lg={10}>
                <Card sx={{ display: 'flex' }} >
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={props.productItem.images || "https://th.bing.com/th/id/OIP.6bGRuz-04JrY2VMmP_tz1QHaEK?pid=ImgDet&rs=1"}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <CardContent className='d-flex justify-content-between align-items-center'>
                            <Box sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {
                                        props.productItem?.name || "Live From Space"
                                    }
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {
                                        props.productItem?.about || "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                                    }
                                </Typography>
                            </Box>
                            <Typography className="product-price mt-1 mr-3" variant="h6" color="text.secondary">
                                {
                                    props.productItem.price?.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) || 0
                                }
                            </Typography>
                        </CardContent>
                    </Box>

                </Card>

            </Grid>
            <Grid item xs={2} sm={2} lg={2} className='d-flex align-items-center'>
                <Typography>Số lượng: {total ? total : 0}</Typography>
                <Box className="d-flex justify-content-around">
                    <IconButton
                        onClick={(e) => handleClick("ADD")}
                    >
                        <AddIcon fontSize='small' color='primary' />
                    </IconButton>
                    <IconButton
                        onClick={(e) => handleClick("REMOVE")}
                    >
                        <RemoveIcon fontSize='small' color='primary' />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    )
}

export default BHItems