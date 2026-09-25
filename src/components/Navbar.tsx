import Logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
    
<nav className="flex justify-between items-center container mx-auto mt-5 px-10 sticky top-0 z-50 bg-white">
<img src={Logo} alt=""/>

 <ul className="flex gap-8 items-center">
  <li  className="text-pink-600 font-medium" >Home</li>
  <li className="text-gray-600 text-sm font-medium">Technologies</li>
  <li className="text-gray-600 text-sm font-medium">Projects</li>
  <li className="text-gray-600 text-sm font-medium">About</li>
  <li className="text-gray-600 text-sm font-medium">Contact</li>
 </ul>
 <div className="flex gap-2">
<button className="text-gray-600 text-sm font-medium">Sign in</button>
<button className="bg-pink-500  text-white px-4 py-2 rounded-full  text-sm" >Sign up</button>


 </div>



   </nav>
    );
};

export default Navbar;