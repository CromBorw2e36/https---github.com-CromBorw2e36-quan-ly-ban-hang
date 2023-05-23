import { Autocomplete, Box, Button, Card, CardContent, CardMedia, FormControlLabel, Grid, InputLabel, Switch, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import './index.css'
import BHItems from '../../component/payment-voucher/BHItems'
import { BhClient, ProductionModel } from '../../common/interface/BHInterface'
import { useSnackbar } from 'notistack'
import BHNotification from '../../component/BH/Notification/Notification'
import ActionPayment from '../actions/payment/payment-action'
const PaymentVoucher = () => {

    const bHClient = new BhClient();

    const [products, setProducts] = React.useState<ProductionModel[]>([] as ProductionModel[]);

    const [reload, setReload] = React.useState<boolean>();

    const SessionLogin = JSON.parse(localStorage.getItem("UserLogin") || "{}");

    const StoreSale = localStorage.getItem("StoreSale")?.split(";") || [];

    const [productList, setProductList] = React.useState<string[]>([] as string[]);

    const [productFilter, setProductFilter] = React.useState<ProductionModel[]>();

    const { enqueueSnackbar } = useSnackbar();

    const [isLoading, setLoading] = React.useState<boolean>(false);

    const [productListSet, setProductListSet] = React.useState<string[]>([] as string[]);

    const [isOpen, setOpen] = React.useState<boolean>(false);

    const onloadProduct = () => {

        bHClient.productionGet({
            ... new ProductionModel(),
            ma_ch: SessionLogin.ma_ch,
        })
            .then(res => {

                setProducts(res);

                const newArray = Array.from(new Set(StoreSale));

                const lst: ProductionModel[] = [];

                newArray.map(item => {

                    const p = res.find((p: any) => p.id === item);

                    if (p) {
                        lst.push(p);
                    }

                })

                setProductFilter([...lst]);

            })
            .catch(err => {

                console.log(err)

            })
    }

    React.useEffect(() => {
        const newArray = Array.from(new Set(StoreSale));

        const lst: ProductionModel[] = [];

        newArray.map(item => {

            const p = products.find((p: any) => p.id === item);

            if (p) {
                lst.push(p);
            }

        })

        setProductFilter([...lst]);
    }, [productList])

    React.useEffect(() => {

        setProductList(StoreSale)

        const newArray = Array.from(new Set(StoreSale));

        setProductListSet(newArray);

        bHClient.productionGet({
            ... new ProductionModel(),
            ma_ch: SessionLogin.ma_ch,
        })
            .then(res => {

                setProducts(res);

                if (res) {

                    const lst: ProductionModel[] = [];

                    newArray.map(item => {

                        const p = res.find((p: any) => p.id === item);

                        if (p) {
                            lst.push(p);
                        }

                    })

                    console.log(lst);

                    setProductFilter([...lst]);
                }

            })
            .catch(err => {

                console.log(err)

            })

    }, [])

    React.useEffect(() => {

        onloadProduct();

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


    return (
        <Box className="position-relative" style={{ width: '100%', height: '100vh', overflow: 'scroll', overflowX: 'hidden' }}>

            <Box>
                <Typography className="text-uppercase h-2 text-danger text-center">
                    Giỏ hàng
                </Typography>
                <Typography className="text-uppercase h-4 text-end">
                    Số lượng {productListSet.length > 1 && productListSet.length < 11 ? `0${productListSet.length-1}` : productListSet.length-1}
                </Typography>
                {
                    productFilter
                    && productFilter.map(item => (
                        <BHItems
                            productList={productList}
                            productItem={item}
                            handleAddStore={(data: string) => handleAddStore(data)}
                            handleRemove={(data: string) => handleRemove(data)}
                        />
                    ))
                }

            </Box>
            <Box
                className="position-fixed bottom-0 end-0 m-4 me-5"
            >
                <Box className="text-end">
                    <Button variant="contained" color='success' onClick={() => setOpen(true)}>Thanh toán</Button>
                </Box>
            </Box>


            {/* thanh toán */}

            {
                React.useMemo(() => {
                    return (
                        <ActionPayment
                            open={isOpen}
                            onClose={() => setOpen(false)}
                            onReload={() => setReload(!reload)}
                            productList={productList}
                            productFilter={productFilter}
                            action={"PAYMENT"}
                        />
                    )
                }, [isOpen])
            }


            {/* <Box>
                <Typography className="text-uppercase h-3 text-danger text-center">
                    Thông tin khách hàng
                </Typography>
                <Grid container spacing={3} className="p-2">
                    Họ và tên
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Khách hàng</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                    Số điện thoại
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Số điện thoại</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                    Email
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Email</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                    Giới tính
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
                    Hạng
                    <Grid item xs={6} md={3}>
                        <InputLabel className="label-form">Hạng</InputLabel>
                        <TextField className="w-100" id="outlined-basic" placeholder="Nhập..." variant="outlined" size="small" />
                    </Grid>
                </Grid>

            </Box> */}
        </Box>
    )
}

export default PaymentVoucher