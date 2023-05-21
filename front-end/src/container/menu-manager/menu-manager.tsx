import { Box } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../component/navbar/navbar'
import { postApiAll } from '../../common/api/get-apit';
import BHButton from '../../component/BH/Button/BHButton';
import { BhClient, ProductionModel, SysRoleRightModel } from '../../common/interface/BHInterface';
import BHGroupButton from '../../component/BH/GroupButton/BHGroupButton';
import BHDataGrid from '../../component/BH/DataGrid/BHDataGrid';

const MenuManager = () => {

    const menuid = JSON.parse(localStorage.getItem("menuid") || "{}");
    const SessionLogin = JSON.parse(localStorage.getItem("UserLogin") || "{}");



    const [sysRoleRights, setSysRoleRights] = useState<SysRoleRightModel[]>([] as SysRoleRightModel[]);

    const [reload, setReload] = useState<boolean>();

    const bHClient = new BhClient();

    const [dataTable, setDataTable] = useState<ProductionModel[]>([] as ProductionModel[]);

    React.useEffect(() => {
        if (menuid) {
            postApiAll("/api/SysMenuRoles/SysRoleRightGet", {
                menuid: menuid.id
            }
            ).then(res => {
                setSysRoleRights(res);
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    React.useEffect(() => {

        bHClient.productionGet({
            ... new ProductionModel(),
            ma_ch: SessionLogin.ma_ch,
        })
            .then(res => {
               
                setDataTable(res);

            })
            .catch(err => {

                console.log(err)
                
            })

    }, [reload])

    const clickAction = (e: any) => {
        console.log(e)
    }

    
    return (
        <Box className="w-100 h-100">
            <Navbar
                title='Quản lý menu'
            />
            {
                <BHGroupButton
                    roleRight={sysRoleRights}
                    clickAction={(e) => clickAction(e)}
                />
            }
            <BHDataGrid
                key='id'
                dataSource={dataTable}
                HandleClick={(data) => clickAction(data)}
            />
        </Box>
    )
}

export default MenuManager;