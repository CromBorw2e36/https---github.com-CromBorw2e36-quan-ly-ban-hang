import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { ProductionModel } from '../../common/interface/BHInterface';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./index.css";


interface IProps {
    handleAddStore: (data: string) => void;
    handleRemove: (data: string) => void;
    setIsOpen?: () => void;
    productItem: ProductionModel;
    productList: any;
}

const BHCard = (props: IProps) => {

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
        <>
            <Card sx={{ width: '100%' }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={props.productItem?.images || "https://th.bing.com/th/id/OIP.DlhXGRMzqOTFwwvO7f3N4AHaEi?pid=ImgDet&rs=1"}
                    title={props.productItem?.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="product-title ">
                        {
                            props.productItem?.name || "Lizard"
                        }
                    </Typography>
                    <Typography className="product-about" variant="body2" color="text.secondary">
                        {
                            props.productItem?.about || "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                        }
                    </Typography>
                    <Typography className="product-price mt-1 mr-3" variant="h5" color="text.secondary">
                        {
                            props.productItem.price?.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) || 0
                        }
                    </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-between align-items-start">

                    <Box className="d-flex justify-content-justify-content-center align-items-center pl-2"
                        style={{
                            color: '#7F7F7F'
                        }}
                    >
                        <IconButton
                            aria-label="minus"
                            color='info'

                            onClick={(e) => handleClick("REMOVE")}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant={"h5"}>{total ? total : 0}</Typography>
                        <IconButton
                            aria-label="plus"
                            color='info'
                            onClick={(e) => handleClick("ADD")}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>

                    <Button
                        className='me-2 mb-2'
                        size="medium"
                        variant='contained'
                        onClick={(e) => handleClick("ADD")}
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