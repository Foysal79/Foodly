import { FaFacebookSquare, FaShoppingCart, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsBookmarkCheck } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="font-Mali  ">

      <div className="flex justify-between items-center md:px-3 bg-[#EFF5EF] px-5 " >
        <div className="flex justify-between space-x-3 " >
        <FaFacebookSquare className="text-blue-700" />
        <FaTwitter className="text-[#1DA1F2]" />
        <IoLogoInstagram className="text-[#EC4A5A]" />

        </div>
        <div>
          <h2 className="text-sm font-medium" >WelCome to Foysal Nur Onthor</h2>
        </div>
        <div>
          <h2 className="text-sm font-medium" > Email : Foodly@gmail.com </h2>

        </div>
        <div>
        <h2 className="text-sm font-medium" > Phone : +8801879953325 </h2>

        </div>
        <div>
          <button className="btn" >About Us</button>
        </div>
      </div>

      <div className="flex justify-around  items-center" >
        <div className="flex justify-between items-center  " >
          <img className="w-20" src="/src/assets/Green_Leaf_Aesthetic_Organic_Skincare_Logo-removebg-preview.png" alt="" />
          <h2 className="text-2xl font-bold" >Foodly</h2>
        </div>

        <div className=" w-5/12 flex  " >

        <input type="text" placeholder="Search Here" className="input input-bordered w-full rounded-l-2xl " />
        <button className="btn relative right-20 " > Search </button>


        </div>

        <div className="flex justify-between items-center" >
          <button className="bg-[#0C7735] hover:bg-[#443bc4] btn text-white mr-5" >Login / Registration </button>
          <BsBookmarkCheck className="mr-5 text-2xl" />
          <FaShoppingCart className="text-[#43da7d] mr-5 text-2xl" ></FaShoppingCart>
        </div>
      </div>

      
      

      
    </div>
  );
};

export default Navbar;
