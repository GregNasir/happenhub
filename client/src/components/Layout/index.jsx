import { Outlet } from 'react-router-dom';
import Hubnav from '../Navbar';
import './index.scss';
import Footer from '../Footer'


const Layout = () => {
    return (
        <>
        <div className='App'>
            <Hubnav />
            
            <div className='page'>
                <Outlet />
                <Footer/>
            </div>
            
        </div>
        
        
        
        
        </>
    )
}

export default Layout;