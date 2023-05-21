import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface IProps {
    title: string,
    color?: string | undefined,
    fontSize?: number | undefined
}

const Navbar = (props: IProps) => {

    const navigate = useNavigate();

    const data = {
        ...props,
        color: props.color || "#2295FF",
        fontSize: props.fontSize || '24px'
    } as IProps;

    const backPre = () => {

        navigate(-1);

    }

    return (
        <Box className="w-100"
            sx={{
                minHeight: '30px',
                paddingLeft: '2rem', 
                paddingTop: '1rem'
               
            }}
        >
            {/* <ArrowBackIcon color="primary" onClick={backPre}/> */}
            <Typography
                sx={{
                    color: data.color,
                    fontSize: data.fontSize,
                    fontWeight: '500'
                }}
            >
                {data.title}
            </Typography>
        </Box>
    )
}

export default Navbar