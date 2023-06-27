import { Box, Container, SxProps, Tab, Tabs } from '@mui/material';

const headerStyle: SxProps = {
    position: 'fixed',
    backgroundColor: '#f5f5f5',
    width: '100%',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)',
    zIndex: 1000
};

export default function Header() {
    return <Box sx={headerStyle}>
        <Container>
            <Tabs>
                <Tab icon={<img src='img/favicon.png'/>} href='#' />
                <Tab label='Presentation' href='#presentation'/>
                <Tab label='Demo' href='#demo'/>
                <Tab label='Get it!' href='https://app.privjs.com/buy/packageDetail?pkg=@module-federation/nextjs-mf' target='_blank'/>
            </Tabs>
        </Container>
    </Box>;
}
