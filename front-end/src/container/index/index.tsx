import { Box, Button } from '@mui/material'
import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Register from '../register/Register'
import Notfound404 from '../notfound404/notfound404'
import Dashboard from '../dashboard/dashboard'
import Production from '../productions/production'
import PaymentVoucher from '../payment-voucher/payment-voucher'
import Profiler from '../profile/profiler'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuManager from '../menu-manager/menu-manager'
import { SysMenuRoleModel } from '../../common/interface/BHInterface'
import { postApiAll } from '../../common/api/get-apit'
import { CommonConfig } from '../../common/commonConfig'
import { link } from 'fs'
import Sidebar from '../../component/BH/Theme/Sidebar/Sidebar'
import Toolbar from '../../component/BH/Theme/Toolbar/Toolbar'


const Index = () => {

    const [login, setLogin] = React.useState<boolean>();

    const [sysMenus, setSysMenus] = React.useState<SysMenuRoleModel[]>([] as SysMenuRoleModel[]);

    const [sysMenu, setSysMenu] = React.useState<SysMenuRoleModel>({} as SysMenuRoleModel);


    const SessionLogin = JSON.parse(localStorage.getItem('UserLogin') || "{}");

    const route = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("UserLogin");
        localStorage.removeItem("menuid");
        setLogin(false);

    }

    React.useEffect(() => {

        if (SessionLogin.isLogin === false) {
            route("/");
        } else if (SessionLogin.isLogin === true) {
            postApiAll("/api/SysMenuRoles/GetSysMenuRole", {
                username: SessionLogin.username,
                permision: SessionLogin.permision,
            })
                .then(res => {
                    setSysMenus(res);
                    if (res) {
                        handleClick(res[0]?.menuid)
                    }
                })
                .catch((error: any) => {
                    console.log(error);
                })
        }

    }, [])

    React.useEffect(() => {
        if (
            (
                SessionLogin.isLogin
                && SessionLogin.isLogin === false
            )
            || SessionLogin.isLogin === undefined
        ) {
            route("/");
        }
    }, [login])


    const handleClick = (menuid: string) => {

        const item = {
            id: menuid
        };
        localStorage.setItem("menuid", JSON.stringify(item));
    }

    return (

        <div id="wrapper">
            {
                sysMenus
                && <Sidebar
                    sysMenus={sysMenus}
                    handleClick={(data: any) => handleClick(data)}
                    handleLogout={() => handleLogout()}
                />
            }
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <Toolbar />
                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">
                        <Routes>

                            {
                                sysMenus
                                && sysMenus.map(itemMenu => {
                                    return (
                                        itemMenu.link
                                        && itemMenu.component
                                        && (
                                            <Route key={itemMenu.link} path={itemMenu.link} Component={CommonConfig[itemMenu.component.toLocaleUpperCase()] || Notfound404} />
                                        )
                                    )
                                })
                            }
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index