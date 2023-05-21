import { Box } from '@mui/material'
import React from 'react'
import { SysRoleRightModel } from '../../../common/interface/BHInterface'
import BHButton from '../Button/BHButton'

interface IProps{
    roleRight: SysRoleRightModel[];
    clickAction?: (data: any) => void
}

const BHGroupButton = (props: IProps) => {
    const {roleRight, clickAction} = props;
    return (
        <Box>
            {
                roleRight
                && roleRight.map(item => (
                    <BHButton
                        class={item.class}
                        icon={item.icon}
                        key={item.id}
                        title={item.nameVn}
                        size='small'
                        variant='text'
                        disable={false}
                        color='primary'
                        clickAction={clickAction}
                    />
                ))
            }
        </Box>
    )
}

export default BHGroupButton