import { Box, CardMedia } from '@mui/material'
import React from 'react'
import { SysMenuRoleModel } from '../../../../common/interface/BHInterface';
import { Link } from 'react-router-dom';

interface Iprops {
    sysMenus: SysMenuRoleModel[] | undefined;
    handleClick: (data: any) => void;
    handleLogout: () => void;
} 

const Sidebar = (props: Iprops) => {

    const menuid = JSON.parse(localStorage.getItem("menuid") || "{}");

    const [toggled, setToggled] = React.useState(false)

    return <>
        <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggled  && "toggled"}`} id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Cửa hàng 001 <sup>2</sup></div>
            </Link>

            <hr className="sidebar-divider" />

            {
                props.sysMenus
                && props.sysMenus.map(item => (
                    <li key={item.link} className={`nav-item ${item.menuid === menuid.id ? "active" : ""}`}>
                        <Link className="nav-link" key={item.id} to={item?.link!} onClick={() => props.handleClick(item?.menuid || "")}>
                            <i className={item.icon}></i>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))
            }

            <hr className="sidebar-divider" />

            <li className="nav-item active">
                <Link className="nav-link" to="/logout" onClick={props.handleLogout}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Đăng xuất</span>
                </Link>
            </li>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => setToggled(!toggled)}></button>
            </div>

        </ul>
    </>
}

export default Sidebar