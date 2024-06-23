import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-2xl" >SHEKHAR MOBILE SHOP</h1>
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input type="text" placeholder="search product here..." className="w-full outline-none" />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch/>
          </div>
        </div>

        <div className="flex items-center gap-7">
          {/* <ul className="flex my-12 mx-10">
              <li className="mx-2"><Link to="/"> HOME </Link></li>
              <li className="mx-2"><Link to="/shop"> SHOP </Link></li>
              <li className="mx-2"><Link to="/services"> SERVICES </Link></li>
              <li className="mx-2"><Link to="/offers"> OFFERS </Link></li>
              <li className="mx-2"><Link to="/membership"> MEMBERSHIP </Link></li>
              <li className="mx-2"> <Link to="/about" > ABOUT US </Link></li>
              <li className="mx-2"> <Link to="/contact" >CONTACT US </Link></li>
              <button className="mx-4 px-4 bg-purple-800 text-white rounded-lg"> <Link to="/login" >Login </Link></button>
          </ul> */}

          <div className="text-3xl cursor-pointer relative flex justify-center">
            <FaRegCircleUser/>
          </div>

          <div className="text-2xl relative">
            <span><FaShoppingCart /></span>
            
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          
        </div>

      </div>
      </header>
  );
}

export default Header