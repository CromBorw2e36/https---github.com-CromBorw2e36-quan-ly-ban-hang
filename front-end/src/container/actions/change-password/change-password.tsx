import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputLabel, Slide, Stack, TextField, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import "../../login/login.css"


interface IProps {
    isOpen: boolean;
    setClose: (value: boolean) => void;
    handleSubmit?: (data: any) => void;
}

const ChangePassword = (props: IProps) => {



    return (
        <Dialog
            id="sysMenu4"
            open={props.isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => props.setClose(false)}
        >
            <DialogTitle>
                <Box className="d-flex justify-content-between align-items-center">
                    <Typography className='title-navbar'>
                        Thay đổi mật khẩu
                    </Typography>
                    <IconButton
                        className="icon-close-button"
                        onClick={() => props.setClose(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={3}>
                    <Box className='w-100'>
                        <InputLabel className='cc-label w-100'>Mật khẩu cũ</InputLabel>
                        <TextField
                            className='cc-input w-100'
                            value={""}
                            placeholder='Mật khẩu cũ'
                            type='password'
                        />
                    </Box>
                    <Box className='w-100'>
                        <InputLabel className='cc-label w-100'>Mật khẩu mới</InputLabel>
                        <TextField
                            className='cc-input w-100'
                            value={""}
                            placeholder='Mật khẩu mới'
                            type='password'
                        />
                    </Box>
                    <Box className='w-100'>
                        <InputLabel className='cc-label w-100'>Xác nhận mật khẩu</InputLabel>
                        <TextField
                            className='cc-input w-100'
                            value={""}
                            placeholder='Xác nhận mật khẩu'
                            type='password'
                        />
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.setClose(false)}>Hủy</Button>
                <Button
                    onClick={props?.handleSubmit}
                    variant='contained'
                    color='primary' 
                >
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChangePassword


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});