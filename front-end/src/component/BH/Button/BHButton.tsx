import { Button } from '@mui/material'
import React from 'react'

interface IProps {
    icon?: string | undefined;
    title?: string | undefined;
    color?: string | undefined;
    variant?: string | undefined;
    disable?: boolean | undefined;
    clickAction?: (data: any) => void;
    size?: string | undefined;
    class?: string | undefined;
    idItemSelected?: string | undefined;
}


const BHButton = (props: IProps) => {

    const btn: any = {
        ...props,
    } as IProps

    return (
        <>
            <Button
                variant={btn.variant}

                color={btn.color}

                disabled={props.idItemSelected ? false : props.disable}

                size={btn.size}

                className={btn.className}

                startIcon={
                    btn.icon && <i className={btn.icon} /> 
                }

                onClick={() => btn.clickAction(btn.class)}
            >
                {btn.title}
            </Button>
        </>
    )
}

export default BHButton