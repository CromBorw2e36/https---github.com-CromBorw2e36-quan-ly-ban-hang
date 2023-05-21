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
                    if(res) {
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
        <Box
            style={{ width: '100vw', height: '100vh', padding: 0, display: 'flex' }}
        >
            <Box
                style={{ width: '20vw', height: '100%', backgroundColor: '#cbd5e1', margin: 0 }}
            >
                {
                    sysMenus
                    && sysMenus.map(itemMenu => (
                        <Link className="nav-link" key={itemMenu.id} to={itemMenu?.link!} onClick={() => handleClick(itemMenu?.menuid || "")}>
                            <Button style={{ width: '100%' }}
                                startIcon={
                                    <DashboardIcon />
                                }
                            >
                                {itemMenu.name}
                            </Button>
                        </Link>
                    ))
                }
                <Link className="nav-link" to="/logout">
                    <Button style={{ width: '100%' }}
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </Button>
                </Link>
            </Box>
            <Box
                style={{ width: '80vw', height: '100%', backgroundColor: '#f1f5f9', margin: 0 }}
            >
                <Routes>

                    {
                        sysMenus
                        && sysMenus.map(itemMenu => {
                            return (
                                itemMenu.link
                                && itemMenu.component
                                && (
                                    <Route key={itemMenu.link} path={itemMenu.link} Component={CommonConfig[itemMenu.component.toLocaleUpperCase()]} />
                                )
                            )
                        })
                    }

                    {/* <Route path="/register" element={<Register />} />
                    <Route path="/notfound-404" element={<Notfound404 />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/production" element={<Production />} />
                    <Route path="/payment-voucher" element={<PaymentVoucher />} />
                    <Route path="/profiler" element={<Profiler />} />
                    <Route path="/menu" element={<MenuManager />} /> */}
                    {/* <Route path="/menu-manager" element={<MenuManager />} /> */}
                </Routes>
            </Box>
        </Box >
    )
}

export default Index