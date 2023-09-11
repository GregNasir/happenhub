import { Outlet } from 'react-router-dom';
import Hubnav from '../Navbar';
import './index.scss';


const Layout = () => {
    return (
        <>
        <div className='App'>
            <Hubnav />
            
            <div className='page'>
                <Outlet />
            </div>
        </div>
        
        
        
        
        </>
    )
}

export default Layout;