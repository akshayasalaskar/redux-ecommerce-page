import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks";
import ecomm from "./images/ecomm-removebg-preview.png";

const Navbar = ({ setShowCart }: any) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  return (
    <div className="pt-4 bg-white top-0 sticky">
      <div className="container">
        {" "}
        <div className="flex justify-between  items-center">
          <img className="h-[70px] ml-10 w-[100px]" src={ecomm}></img>

          <div className="lg:flex hidden w-full max-w-[500px]  ">
            <input
              className="border-2 border-accent px-6 py-2 w-full"
              type="text"
              placeholder="Search for products..."
            ></input>
            <div className="bg-accent text-white text-[26px] grid place-items-cnter px-4">
              <FaSearch className="mt-2" />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-3 hidden">
              <div className="rounded-full border-2 border-gray-300  text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                {" "}
                <AiOutlineUser />
              </div>
            </div>

            <div>
              {" "}
              <p className="text-gray-500">Hello, Sign in</p>
              <p className="font-medium">Your Account</p>
            </div>
          </div>

          <div
            className="text-gray-500 text-[32px] relative "
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />

            <div className="absolute top-[-15px] right-[10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
              {" "}
              {cartCount}
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
