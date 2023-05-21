import { Box } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../component/navbar/navbar'
import { postApiAll } from '../../common/api/get-apit';
import BHButton from '../../component/BH/Button/BHButton';
import { BhClient, ProductionModel, SysRoleRightModel } from '../../common/interface/BHInterface';
import BHGroupButton from '../../component/BH/GroupButton/BHGroupButton';
import BHDataGrid from '../../component/BH/DataGrid/BHDataGrid';
import ActionMenuManager from '../actions/menu-manager/menu-manager';

interface IActions {
    open?: boolean | undefined;
    idItemSelected?: string | undefined;
    payload?: string | undefined;
    data?: any;
}

const MenuManager = () => {

    const menuid = JSON.parse(localStorage.getItem("menuid") || "{}");

    const SessionLogin = JSON.parse(localStorage.getItem("UserLogin") || "{}");

    const [action, setAction] = React.useState<IActions>({} as IActions);

    const [sysRoleRights, setSysRoleRights] = useState<SysRoleRightModel[]>([] as SysRoleRightModel[]);

    const [reload, setReload] = useState<boolean>();

    const bHClient = new BhClient();

    const [dataTable, setDataTable] = useState<ProductionModel[]>([] as ProductionModel[]);

    const [productSelect, setProductSelect] = useState<ProductionModel[]>([] as ProductionModel[]);

    React.useEffect(() => {
        if (menuid) {
            postApiAll("/api/SysMenuRoles/SysRoleRightGet", {
                menuid: menuid.id,
                show: "view"
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

    const clickAction = (data: any) => {
        const { row, action } = data;
        if (action === "SELECTED") {
            setProductSelect([...row])
        } else if (action !== "ADD") {
            setAction({
                ...action,
                open: true,
                data: row.data,
                payload: action
            });
        }
        else if (action === "ADD") {
            setAction({
                ...action,
                open: true,
                payload: action
            });
        } else if (action === "ADD") {
            setAction({
                ...action,
                open: true,
                payload: action
            });
        }

    }


    return (
        <Box className="w-100 h-100">

            {
                React.useMemo(() => {
                    return <ActionMenuManager
                        action={action.payload}
                        onClose={() => setAction({ ...action, open: false })}
                        row={action.data}
                        open={action.open}
                    />
                }, [action.open])
            }

            <Navbar
                title='Quản lý menu'
            />
            {
                <BHGroupButton
                    roleRight={sysRoleRights}
                    clickAction={(e) => clickAction(e)}
                    filterOptions={[]}
                />
            }
            <BHDataGrid
                key='Id'
                dataSource={dataTable}
                HandleClick={(data) => clickAction(data)}
            />
        </Box>
    )
}

export default MenuManager;