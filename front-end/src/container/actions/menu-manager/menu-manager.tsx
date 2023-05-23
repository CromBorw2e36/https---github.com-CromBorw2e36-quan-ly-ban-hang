import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { BhClient, ProductionModel } from '../../../common/interface/BHInterface';
import "./index.css";
import { Box, CardMedia, Divider, FormControlLabel, Switch, Typography, styled } from '@mui/material';
import { uploadFile } from '../../../common/api/get-apit';
import BHNotification from '../../../component/BH/Notification/Notification';
import Loading from '../../../component/linearIndeterminate/linearIndeterminate';
import { useSnackbar } from 'notistack';



const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
    open: boolean | undefined;
    onClose: () => void;
    action: string | undefined;

    row?: any;
    onReload: () => void;


}


export default function ActionMenuManager(props: IProps) {

    const bHClient = new BhClient();
    const SessionLogin = JSON.parse(localStorage.getItem('UserLogin') || "{}");

    const [product, setProduct] = React.useState<ProductionModel>({} as ProductionModel);

    const [isLoading, setLoading] = React.useState<boolean>(false);


    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        if (props.action === "ADD") {
            setProduct({
                ...new ProductionModel()
            });
        } else {
            setProduct({
                ...props.row
            })
        }
    }, [props.row])

    const handleChange = (e: any) => {

        if (props.action !== "DETAIL") {

            const { name, value } = e.target;

            if (name !== 'status') {

                setProduct({
                    ...product,
                    [name]: value
                } as ProductionModel);

            } else {

                setProduct({
                    ...product,
                    [name]: e.target.checked
                } as ProductionModel);

            }

        }

    }

    const handleSumit = () => {

        setLoading(true);

        switch (props.action) {
            case "ADD":
                bHClient.productionIns({
                    ...product,
                    c_User: SessionLogin.username,
                    ma_ch: SessionLogin.ma_ch
                }).then(res => {



                    BHNotification(res.status, res.message, enqueueSnackbar);

                    props.onReload();

                    setLoading(false);

                }).catch(error => {

                    console.log(error)
                    setLoading(false);

                })
                break;
            case "EDIT":
                bHClient.productionUpd({
                    ...product,
                }).then(res => {

                    setLoading(false);

                    BHNotification(res.status, res.message, enqueueSnackbar)

                    props.onReload();



                }).catch(error => {

                    setLoading(false);
                    console.log(error)

                })
                break;
        }
    }

    const handleRemove = (image: string) => {
        if (product.images) {
            const images = product.images.split(";");
            setProduct({
                ...product,
                images: images.filter(item => item != image).join(';')
            })
        }
    }


    const handleUpload = (e: any) => {
        const { name, value } = e.target;
        uploadFile(value)
    }

    return (
        <div>
            <Dialog
                id="sysMenu3"
                open={props.open || false}
                TransitionComponent={Transition}
                onClose={props.onClose}
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
                            props.action === "DETAIL" ? "Xem chi tiết" : props.action === "ADD" ? "Thêm mới" : "Cập nhật"
                        }
                    </Typography>

                </DialogTitle>
                <DialogContent>
                    <div className="form-group">
                        <label htmlFor="">Tên sản phẩm</label>
                        <input
                            autoFocus={true}
                            type="text"
                            className="form-control form-control-user"
                            id="form-product-name"
                            placeholder="Tên sản phẩm"
                            name='name'
                            value={product?.name || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <label htmlFor="form-product-price">Giá</label>
                            <input
                                type="number"
                                className="form-control form-control-user"
                                id="form-product-price"
                                placeholder="Giá"
                                name='price'
                                onChange={handleChange}
                                value={product?.price || ""}

                            />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="form-product-total">Số lượng</label>
                            <input
                                type="number"
                                className="form-control form-control-user"
                                id="form-product-total"
                                placeholder="Số lượng"
                                name='total'
                                onChange={handleChange}
                                value={product?.total || ""}

                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label htmlFor="form-product-PricePersent">Giảm giá (%)</label>
                            <input
                                type="number"
                                className="form-control form-control-user"
                                id="form-product-PricePersent"
                                placeholder="Phần trăm"
                                name='pricePersent'
                                onChange={handleChange}
                                value={product?.pricePersent || ""}

                            />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="">Trạng thái</label>
                            <FormControlLabel
                                control={<Android12Switch defaultChecked />}
                                label="Hiển thị trên thực đơn"
                                name='status'
                                onChange={handleChange}
                                checked={product?.status || false}

                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-product-About">Mô tả</label>
                        <textarea
                            rows={10}
                            autoFocus={true}
                            className="form-control form-control-user"
                            id="form-product-About"
                            placeholder="Mô tả sản phẩm"
                            name='about'
                            value={product?.about || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <label htmlFor="upImage" className='d-flex justify-content-center flex-column text-center p-5 border-label-upload'>
                                <i className="far fa-images"></i>
                                Chọn hình ảnh
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                className="d-none"
                                id="upImage"
                                placeholder="Hình ảnh"
                                name='image'
                                onChange={handleUpload}
                            />
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
                        </div>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Đóng</Button>
                    {
                        props.action !== "DETAIL"
                        && <Button variant='contained' onClick={handleSumit}>Agree</Button>

                    }
                </DialogActions>
            </Dialog>

            <Loading isLoading={isLoading} />

        </div >
    );
}