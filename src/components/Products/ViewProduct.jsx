import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const avatarUrls = {
  Male: "https://www.w3schools.com/w3images/avatar2.png",
  Female:
    "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png",
  Other:
    "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
};

let userName, gender;
if (localStorage.getItem("LoggedIn")) {
  userName = JSON.parse(
    localStorage.getItem(localStorage.getItem("LoggedIn"))
  ).name;
  gender = JSON.parse(
    localStorage.getItem(localStorage.getItem("LoggedIn"))
  ).gender;
}

const ViewProduct = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state ? state.product : null; // Access the product passed from Home

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBack = () => {
    navigate("/product");
  };

  const handleLogout = () => {
    localStorage.setItem("LoggedIn", ""); // Clear the logged-in status
    navigate("/"); // Redirect to login page
  };

  return (
    <div
      className="flex bg-gray-100"
      onClick={() => {
        if (dropdownOpen) setDropdownOpen(!dropdownOpen);
      }}
    >
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg p-5">
        <img
          src="https://i.ibb.co/ByLzC9v/original-df30b3883ad9c46ac18607caab7a66bb-c.png"
          alt="logo"
          className="w-[60%] ml-6"
        />
        <p className="text-gray-500 text-left">M E N U</p>
        <ul className="mt-4">
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://www.v0.app/api/image/bxs-dashboard-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoiYnhzIiwiaWNvblNsdWciOiJkYXNoYm9hcmQifX0"
                width={20}
                alt=""
              />
              Dashboard
            </div>
          </li>
          <li className="py-2 text-white bg-blue-400 font-bold rounded-sm cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9280/9280764.png"
                width={20}
                alt=""
              />
              Products
            </div>
          </li>
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8743/8743903.png"
                width={20}
                alt=""
              />
              Customer
            </div>
          </li>
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9131/9131997.png"
                width={20}
                alt=""
              />
              Category
            </div>
          </li>
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3624/3624080.png"
                width={20}
                alt=""
              />
              Orders
            </div>
          </li>
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3837/3837379.png"
                width={20}
                alt=""
              />
              Coupons
            </div>
          </li>
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around relative">
              <img
                src="https://cdn-icons-png.flaticon.com/128/589/589708.png"
                width={20}
                alt=""
              />
              Chats
              <img
                className="absolute bottom-0 right-0"
                src="https://cdn-icons-png.flaticon.com/128/3840/3840753.png"
                alt=""
                width={18}
              />
            </div>
          </li>
        </ul>
        <p className="text-gray-500 text-left mt-4">O T H E R</p>
        <ul className="mt-4">
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer my-4">
            <div className="flex justify-around">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png"
                width={20}
                alt=""
              />
              Settings
            </div>
          </li>
          <li className="py-2 text-gray-600 hover:text-blue-600 cursor-pointer">
            <div className="flex justify-around" onClick={handleLogout}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png"
                width={20}
                alt=""
              />
              Logout
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <div className="w-1/3 relative">
            <input
              type="text"
              placeholder="Search something here"
              className="border border-gray-300 rounded-lg pl-10 py-2 w-full"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/622/622669.png"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
          <div
            className="flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              className="mr-4 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                return;
              }}
              src="https://cdn-icons-png.flaticon.com/128/16598/16598435.png"
              width={20}
              alt=""
            />
            <p className="mr-4 text-gray-600 cursor-pointer">
              {userName}&nbsp; ▼
            </p>
            <img
              src={avatarUrls[gender]}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            {dropdownOpen && (
              <div className="absolute top-12 right-36 mt-2 w-32 bg-white border rounded shadow-md z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            {product.name}
          </h2>
          <div className="flex">
            {/* Product Image */}
            <div className="w-1/3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-2/3 pl-8">
              <div className="mb-4">
                <p className="text-gray-600 text-2xl font-bold">Product ID:</p>
                <p>{product.id}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-2xl font-bold">Email:</p>
                <p>{product.email.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-2xl font-bold">Category:</p>
                <p>{product.category}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-2xl font-bold">Stock:</p>
                <p>{product.stock}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-2xl font-bold">Price:</p>
                <p>₹{product.price}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-2xl font-bold">Description:</p>
                <p>{product.area}</p>
              </div>
              <button
                className="px-4 py-4 mt-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
                onClick={handleBack}
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
