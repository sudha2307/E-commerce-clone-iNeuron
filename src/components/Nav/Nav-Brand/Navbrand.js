import './NavBrand.css'
import { Link } from 'react-router-dom';

const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
           <Link to="/">
    <img
        style={{
            padding: 0,
            margin: 3,
            width: '140px', // Set desired width
            height: '70px', // Maintain aspect ratio
        }}
        src="/rexy.png"
        alt="Logo"
    />
</Link>

            </h1>
        </div>
     );
}
 
export default NavBrand;