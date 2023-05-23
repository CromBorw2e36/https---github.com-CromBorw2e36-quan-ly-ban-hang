import { SnackbarOrigin, VariantType, useSnackbar } from 'notistack';
import React from 'react'


interface IProps {
    status: number,
    message: string | undefined;
}
const convert: VariantType[] = ["success", "error", "warning", "info", "default"];




const BHNotification = (status: number, message: string | undefined , enqueueSnackbar:any) => {

    enqueueSnackbar(message, {
        autoHideDuration: 1500,
        variant: convert[status],
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
    });

}

export default BHNotification