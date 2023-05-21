import { Box, Stack } from '@mui/material'
import React from 'react'
import { SysRoleRightModel } from '../../../../common/interface/BHInterface';

interface IProps {
    roleRight: SysRoleRightModel[];
    clickAction?: (data: any) => void,
}

const TButton = (props:IProps) => {
    const { roleRight, clickAction } = props;
    return (
        <Box className="pb-2">
            <Stack spacing={1} direction="row">
                {
                    roleRight
                    && roleRight.map(item => (
                        <button
                            className={`btn btn-icon-split ${item.color ? "btn-" + item.color : "btn-primary"}`}
                            onClick={clickAction}
                        >
                            <span className="text">{item.nameVn}</span>
                        </button>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default TButton