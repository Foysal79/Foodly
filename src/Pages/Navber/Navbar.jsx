import { FaFacebookSquare, FaShoppingCart, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsBookmarkCheck } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="font-Mali  ">

      <div className="md:flex justify-between items-center  md:px-3 bg-[#EFF5EF] px-5 hidden  " >
        <div className="flex justify-between space-x-3 " >
        <FaFacebookSquare className="text-blue-700" />
        <FaTwitter className="text-[#1DA1F2]" />
        <IoLogoInstagram className="text-[#EC4A5A]" />

        </div>
        <div>
          <h2 className="text-sm font-medium" >WelCome to Foysal Nur Onthor</h2>
        </div>
        <div>
          <h2 className="text-sm font-medium" > Support Email : Foodly@gmail.com </h2>

        </div>
        <div>
        <h2 className="text-sm font-medium" > Phone : +8801879953325 </h2>

        </div>
        <div>
          <button className="btn" >About Us</button>
        </div>
      </div>

      <div className=" flex justify-around   items-center" >


        <div className="flex justify-between items-center  " >
          <img className=" w-5 lg:w-20" src="/src/assets/Green_Leaf_Aesthetic_Organic_Skincare_Logo-removebg-preview.png" alt="" />
          <h2 className="text-2xl font-bold" >Foodly</h2>
        </div>

        <div className=" sm:flex-1 md:flex-none w-full lg:w-5/12 flex   " >

        <input type="text" placeholder="Search Here" className="input input-bordered    lg:w-full rounded-l-2xl " />
        <button className="btn  relative right-20 lg:right-20  " > Search </button>


        </div>

        <div className="md:flex hidden  justify-between items-center" >
          <button className="bg-[#0C7735] hover:bg-[#443bc4] btn text-white lg:mr-5" >Login</button>
          <BsBookmarkCheck className="mr-5 text-base lg:text-2xl" />
          <FaShoppingCart className="text-[#43da7d] mr-5 text-base lg:text-2xl" ></FaShoppingCart>
        </div>
      </div>

      {/* daisyUi navbar */}

      <div className="navbar bg-base-100 px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
        <li><a>Item 4</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">All Category</a>
  </div>
  <div className=" -ml-44 hidden  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
      <li><a>Item 4</a></li>
    </ul>
  </div>
  
</div>

      
      

      
    </div>
  );
};

export default Navbar;
