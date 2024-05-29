import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200 h-40">
      <div className="flex">
          {/* <img className="size-40" src={LOGO_URL}/> */}
          <h1 className="my-14 ml-5 text-4xl" >SHEKHAR MOBILE SHOP</h1>
      </div>
      <div>
        <ul className="flex my-12 mx-10">
            <li className="mx-2"><Link to="/"> HOME </Link></li>
            <li className="mx-2"><Link to="/services"> SERVICES </Link></li>
            <li className="mx-2"><Link to="/offers"> OFFERS </Link></li>
            <li className="mx-2"><Link to="/membership"> MEMBERSHIP </Link></li>
             <li className="mx-2"> <Link to="/about" > ABOUT US </Link></li>
            <li className="mx-2"> <Link to="/contact" >CONTACT US </Link></li>
            <button className="mx-4 px-4 bg-purple-800 text-white rounded-lg"> <Link to="/login" >Login </Link></button>
        </ul>
      </div>
    </div>

  );
}

export default Header