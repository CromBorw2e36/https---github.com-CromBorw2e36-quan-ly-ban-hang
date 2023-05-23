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
// import "./index.css";
import { Box, CardMedia, Divider, FormControlLabel, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import { uploadFile } from '../../../common/api/get-apit';
import BHNotification from '../../../component/BH/Notification/Notification';
import Loading from '../../../component/linearIndeterminate/linearIndeterminate';
import { useSnackbar } from 'notistack';


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
    onReload: () => void;
    productList: string[];
    productFilter?: ProductionModel[];

}


export default function ActionPayment(props: IProps) {

    const bHClient = new BhClient();
    const SessionLogin = JSON.parse(localStorage.getItem('UserLogin') || "{}");


    const [isLoading, setLoading] = React.useState<boolean>(false);


    const { enqueueSnackbar } = useSnackbar();

    const total = (id: string) => {
        const newArr = props.productList.filter(p => p === id);
        return newArr.length;
    }

    const totalPrice = () => {
        const productFilter = props.productFilter;
        const productList = props.productList;
        let totalP = 0;

        if (productList && productFilter) {
            productFilter.map(item => {
                if (item.id) {
                    totalP += (total(item.id) * Number(item.price));
                }
            })
        }
        return totalP;
    }


    return (
        <div>
            <Dialog
                id="sysMen5"
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
                            "Hóa đơn thanh toán"
                        }
                    </Typography>

                </DialogTitle>
                <DialogContent>
                    <Typography>
                        <small>Ngày 17 tháng 5 năm 2023, 23 giờ 12 phút</small>
                    </Typography>
                    <Typography>
                        <small>Khách hàng: Nguyễn Minh Đăng</small>
                    </Typography>
                    <Typography>
                        <small>Thu ngân: Nguyễn Khánh</small>
                    </Typography>
                    <Typography>
                        <small>Mã CT: 00120001</small>
                    </Typography>
                    <Typography>
                        <small>Chi tiết hóa đơn</small>
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ width: 'auto' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>STT</TableCell>
                                    <TableCell align="left">Đồ uống/thức ăn</TableCell>
                                    <TableCell align="left">Giá</TableCell>
                                    <TableCell align="left">Số lượng</TableCell>
                                    <TableCell align="left">Thành tiền</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.productFilter
                                    && props.productFilter.map((row: ProductionModel, index: number) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="left">{total(row?.id!)}</TableCell>
                                            <TableCell align="left">
                                                <strong>
                                                    {total(row?.id!) * Number(row.price)}
                                                </strong>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box className="d-flex justify-content-between mt-3 mb-3">
                        <Typography >
                            <small > Phải thanh toán: </small>

                        </Typography>
                        <Typography >
                            <small>
                                <strong>
                                    {
                                        totalPrice().toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                                    }
                                </strong>
                            </small>
                        </Typography>
                    </Box>
                    <Divider />
                    <Box className="d-flex justify-content-between mt-3 mb-3">
                        <Typography >
                            <small > Tiền khách đưa: </small>

                        </Typography>
                        <Typography >
                            <small>
                                <strong>
                                    {
                                        (0).toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                                    }
                                </strong>
                            </small>
                        </Typography>
                    </Box>
                    <Box className="d-flex justify-content-between mt-3 mb-3">
                        <Typography >
                            <small > Tiền thối lại: </small>

                        </Typography>
                        <Typography >
                            <small>
                                <strong>
                                    {
                                        (0).toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                                    }
                                </strong>
                            </small>
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Đóng</Button>
                    {
                        props.action !== "DETAIL"
                        && <Button variant='contained'
                        // onClick={handleSumit}
                        >Agree</Button>

                    }
                </DialogActions>
            </Dialog>

            <Loading isLoading={isLoading} />

        </div >
    );
}