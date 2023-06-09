import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface Iprops {
    isLoading: boolean;
}

export default function Loading(props: Iprops) {
    return (
        <>
            {
                props.isLoading
                && (<>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            backgroundColor: 'rgba(209, 213, 219, 0.4)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: '999',
                        }}>
                        <Box style={{ width: '55%', height: '1%' }}>
                            <LinearProgress style={{ backgroundColor: 'white' }} />
                        </Box>
                    </Box>
                </>)
            }
        </>
    );
}