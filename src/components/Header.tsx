import { Tab, Tabs } from '@mui/material';

export default function Header() {
    return <Tabs>
        <Tab icon={<img src='favicon.png'/>} href='#' />
        <Tab label='Presentation' href='#presentation'/>
        <Tab label='Demo' href='#demo'/>
        <Tab label='Docs' href='#docs'/>
    </Tabs>
}
