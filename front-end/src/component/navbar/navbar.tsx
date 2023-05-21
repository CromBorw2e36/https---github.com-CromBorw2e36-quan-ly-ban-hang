import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface IProps {
    title: string,
    color?: string | undefined,
    fontSize?: number | undefined,
    export?: (data: any) => void;
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
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800" style={{ color: props.color }}>{props.title}</h1>
            {
                props.export
                && (
                    <Link to={""} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Xuất báo cáo
                    </Link>
                )
            }
        </div>
    )
}

export default Navbar