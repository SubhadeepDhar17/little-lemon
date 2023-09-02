import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Body from '../Body/Body';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            
        </>
    )
}

export default Layout;