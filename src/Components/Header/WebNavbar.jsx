import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaCartPlus, FaPhone, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden lg:block sticky top-0 z-50 bg-[#f1f7fe]">
      <div className="grid grid-cols-8 py-6 px-2">
      <div className="col-span-2">
        <div className="flex justify-center items-center gap-4">
        <img src="/dating.png" className="w-12" alt="" />
        <p className="text-md text-pink-600 font-bold">MILAN<span className="text-2xl ml-2 text-red-700">BINDU</span></p>
        </div>
      </div>
      <div className="col-span-4">
        <div className="flex justify-end items-center gap-3 mt-3">
          <Link className="text-pink-600 font-semibold text-lg px-4" to="/">
            Home
          </Link>
          <div class="relative group inline-block">
            <p class="text-pink-600 font-semibold text-lg py-2 px-4 rounded inline-flex items-center">
              Pages
            </p>

            <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-pink-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/membership"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/comingsoon"
                >
                  Comingsoon
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/errorpage"
                >
                  404
                </Link>
              </li>
            </ul>
          </div>
          <div class="relative group inline-block">
            <p class="text-pink-600 font-semibold text-lg py-2 px-4 rounded inline-flex items-center">
              Community
            </p>

            <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-pink-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/community"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/allgroup"
                >
                  All Group
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/allmember"
                >
                  All Members
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/activity"
                >
                  Activity
                </Link>
              </li>
            </ul>
          </div>
          <div class="relative group inline-block">
            <p class="text-pink-600 font-semibold text-lg py-2 px-4 rounded inline-flex items-center">
              Shop
            </p>

            <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-pink-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/productdetail"
                >
                  Product Details
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/cart"
                >
                   Cart
                </Link>
              </li>
            </ul>
          </div>
          <div class="relative group inline-block">
            <p class="text-pink-600 font-semibold text-lg py-2 px-4 rounded inline-flex items-center">
              Blog
            </p>

            <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-pink-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li className="">
                <Link
                  class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/blog"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                  to="/blogdetail"
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </div>
          <Link className="text-pink-600 font-semibold text-lg px-4" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-center items-center mt-2">
        <Link to='/login' className="text-white bg-pink-400 text-lg font-semibold px-8 py-3 rounded-md">My Account</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
