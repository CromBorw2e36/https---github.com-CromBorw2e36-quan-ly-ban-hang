import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, Popover, Stack } from '@mui/material'
import React from 'react'
import { SysRoleRightModel } from '../../../common/interface/BHInterface'
import BHButton from '../Button/BHButton'
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IProps {
    roleRight: SysRoleRightModel[];
    clickAction?: (data: any) => void;
    idItemSelected?: string | undefined;

    filterOptions?: any;
}

const BHGroupButton = (props: IProps) => {
    const { roleRight } = props;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <Box className="pb-3 w-100 d-flex justify-content-between">
            <Stack spacing={1} direction="row">
                {
                    roleRight
                    && roleRight.map(item => (
                        <BHButton
                            class={item.class}
                            icon={item.icon}
                            key={item.id}
                            title={item.nameVn}
                            size='small'
                            variant='contained'
                            disable={item.enable}
                            color={item.color || "primary"}
                            clickAction={() => {
                                if (props.clickAction)
                                    props?.clickAction({
                                        action: item.class
                                    });
                            }}
                            idItemSelected={props.idItemSelected}
                        />
                    ))
                }
            </Stack>
            <IconButton size='small' aria-describedby={id} onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            {
                props.filterOptions
                && (
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <FormGroup className="m-4">
                            <FormControlLabel control={<Checkbox />} label="Lọc 1" />
                            <FormControlLabel control={<Checkbox />} label="Lọc 2" />
                            <FormControlLabel control={<Checkbox />} label="Lọc 3" />
                        </FormGroup>
                    </Popover>
                )
            }

        </Box>
    )
}

export default BHGroupButton