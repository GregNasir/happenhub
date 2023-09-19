import './index.scss'; 

const Footer = () => {
    return (
<footer 
className="footer">
    <div className="container">
        <span className="text-muted">&copy; {new Date().getFullYear()} All Rights Reserved HappenHub</span>
        
    </div>
    </footer>
);
};

export default Footer;
