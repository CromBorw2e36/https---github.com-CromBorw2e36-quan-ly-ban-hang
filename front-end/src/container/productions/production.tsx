import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid,
    Slide,
    Typography
} from '@mui/material'
import React from 'react'
import BHCard from '../../component/card-production/BHCard'
import { BhClient, ProductionModel } from '../../common/interface/BHInterface'
import { useSnackbar } from 'notistack'
import BHNotification from '../../component/BH/Notification/Notification'
import Loading from '../../component/linearIndeterminate/linearIndeterminate'
import { TransitionProps } from '@mui/material/transitions'
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';

import "./index.css";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Production = () => {

    const bHClient = new BhClient();

    const [products, setProducts] = React.useState<ProductionModel[]>([] as ProductionModel[]);

    const [reload, setReload] = React.useState<boolean>();

    const SessionLogin = JSON.parse(localStorage.getItem("UserLogin") || "{}");

    const [productSelected, setProductSelected] = React.useState<ProductionModel[]>([] as ProductionModel[]);

    const [productList, setProductList] = React.useState<string[]>([] as string[]);

    const { enqueueSnackbar } = useSnackbar();

    const [isOpen, setOpen] = React.useState<boolean>(false);

    const [product, setProduct] = React.useState<ProductionModel>({} as ProductionModel)

    const [isLoading, setLoading] = React.useState<boolean>(false);


    React.useEffect(() => {
        setProductList(localStorage.getItem("StoreSale")?.split(";")!)
    }, [])

    React.useEffect(() => {

        bHClient.productionGet({
            ... new ProductionModel(),
            ma_ch: SessionLogin.ma_ch,
        })
            .then(res => {

                setProducts(res);

            })
            .catch(err => {

                console.log(err)

            })



    }, [reload])




    const handleAddStore = (id: string) => {


        const lstProduct = productList;

        lstProduct.push(id);

        setProductList(lstProduct);

        localStorage.setItem("StoreSale", lstProduct.join(";"));
    }


    const handleRemove = (id: string) => {

        if (productList.includes(id) && productList) {

            const index = productList.findIndex((p: string) => p === id);

            const lstProduct = productList;

            lstProduct.splice(index, 1);

            setProductList([...lstProduct]);

            localStorage.setItem("StoreSale", lstProduct.join(";"));

        }
        else {
            BHNotification(2, "Giỏ hàng không có sản phẩm nảy", enqueueSnackbar);
        }
    }

    const changeAction = (e: any) => {
        setProduct(e);
        setOpen(true);
    }




    return (
        <Box style={{ width: '100%', height: '87vh' }} className='box-product'>
            <Box className="w-100 h-100"
            >
                <Typography className="text-uppercase h-2 text-danger text-center position-fixed start-50">
                    danh sách sản phẩm
                </Typography>
                <Grid container spacing={2} className='p-4'>
                    {
                        products
                        && products.map(productItem => (
                            <Grid key={productItem.id} item xs={6} sm={4} lg={3} >
                                <BHCard
                                    productList={productList}
                                    productItem={productItem}
                                    handleAddStore={(data: string) => handleAddStore(data)}
                                    handleRemove={(data: string) => handleRemove(data)}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

            <Box
                className="position-fixed bottom-0 end-0 m-5 me-5"
            >
                <Box className="text-end">
                    <Button
                        variant="contained"
                        color='info'
                        size="large"
                        startIcon={
                            <ShoppingCartCheckoutSharpIcon />
                        }
                    >
                        Thanh toán
                    </Button>
                </Box>
            </Box>

            <Dialog
                id="sysMenu3"
                open={isOpen}
                TransitionComponent={Transition}
                onClose={() => setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth='sm'
            >
                <DialogTitle>
                    <Typography className="text-center"
                        sx={{
                            fontSize: 24,
                            fontWeight: "600",
                            color: "#2295FF"
                        }}
                    >
                        {
                            "Sản phẩm"
                        }
                    </Typography>

                </DialogTitle>
                <DialogContent>

                    {
                        product.images
                        && (
                            <Box
                                sx={{
                                    height: "400px",
                                    overflowY: "scroll",
                                    width: "100%",
                                    scrollbarWidth: "2px",
                                }}>
                                {
                                    product.images.split(';').map(image => (
                                        <Box sx={{ height: 240, width: '45%', float: 'left', margin: '4px', position: 'relative' }}>
                                            <CardMedia
                                                sx={{ height: '100%', width: "100%" }}
                                                image="https://th.bing.com/th/id/OIP.DlhXGRMzqOTFwwvO7f3N4AHaEi?pid=ImgDet&rs=1"
                                                title="green iguana"
                                            />

                                            <i className="fas fa-times-circle position-absolute top-0 end-0 m-2 text-danger" onClick={() => handleRemove(image)}></i>

                                        </Box>
                                    ))
                                }
                            </Box>
                        )
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Đóng</Button>

                </DialogActions>
            </Dialog>

            <Loading isLoading={isLoading} />
        </Box >
    )
}

export default Production