import logo from '../../assets/Logo.png'
import icon from '../../assets/icon.png'
import shopicon from '../../assets/shop icon.png'

const NavBar = () => {
    return (
        <nav className = 'px-[90px] flex justify-between items-center w-full h-[106px] text-xl'>
           <img src={logo}/>
           <div className= "space-x-[30px]">
            <button>Home</button>
            <button>About Us</button>
            <button>Products</button>
            <button>Features</button>
            <button>Reviews</button>
            <button>Contact Us</button>
           </div>

           <div className = "flex items-center gap-6">
            <img src={icon} alt="icon" />
            <img src={shopicon} alt="shopicon" />

            </div> 
        </nav>
    );
};

export default NavBar;