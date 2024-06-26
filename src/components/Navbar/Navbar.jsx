import './Navbar.scss';
import logo from '../../assets/logo.png';

const links =[
    {href:'#horoscope', title:"Horoscope"},
    {href:'#daily', title:"Daily"},
    {href:'#tarot', title:"Tarot"},
    {href:'#article', title:"Article"},
    {href:'#contact', title:"Contact"},
    
]

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>

            <img src={logo} alt="logo" />
        </div>
        <div className="links">
            {/* <a href="#horoscope">Horoscope</a>
            <a href="daily">Daily</a> */}

            {links.map(item =><a key={item.title} href={item.href}>{item.title}</a>)}
        </div>
    </div>
  );
};

export default Navbar