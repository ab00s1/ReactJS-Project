import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const universalProduct = [
  {
    email: { email: "universal@uni" },
    id: "A",
    name: "Nike Sportswear",
    category: "Caps",
    stock: "120",
    price: "923",
    area: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus voluptate laboriosam ut eligendi tempore, id explicabo? Dolor labore odit perspiciatis eaque temporibus soluta tempore totam vitae, maiores odio accusamus expedita neque enim explicabo, corporis aperiam obcaecati quisquam vel reiciendis? Est cumque, deleniti beatae explicabo perspiciatis a vero temporibus deserunt.",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVQoMO6Cp_Ra8zybfAm9wx4Gyo-K-8GKRPUP1JXs3tvfZpq0dEpNR1DA7eemOivMbNRW7gF3AgNHPZzrAVgDfCoCsUOe7dtU2PERgIGr7y-t8Aen6LGWJQ1A",
    universal: true,
  },
  {
    email: { email: "universal@uni" },
    id: "B",
    name: "Nike Air",
    category: "Shoes",
    stock: "645",
    price: "9876",
    area: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus voluptate laboriosam ut eligendi tempore, id explicabo? Dolor labore odit perspiciatis eaque temporibus soluta tempore totam vitae, maiores odio accusamus expedita neque enim explicabo, corporis aperiam obcaecati quisquam vel reiciendis? Est cumque, deleniti beatae explicabo perspiciatis a vero temporibus deserunt.",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJS3s-Ka7wJnIp1mwPUAOjAnYwf4FbDXWHbvWQ5dva2fFNN4CIEd1_UYgcvScramPCyx5lLhigt0wJVrea4nCVFsSMOJFlhDxrUZcGfo9wcHOlOMdKI3gnnPPmtypv2FfR-FK2zbw&usqp=CAc",
    universal: true,
  },
  {
    email: { email: "universal@uni" },
    id: "C",
    name: "Nike Windrunner",
    category: "Jacket",
    stock: "62",
    price: "5876",
    area: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus voluptate laboriosam ut eligendi tempore, id explicabo? Dolor labore odit perspiciatis eaque temporibus soluta tempore totam vitae, maiores odio accusamus expedita neque enim explicabo, corporis aperiam obcaecati quisquam vel reiciendis? Est cumque, deleniti beatae explicabo perspiciatis a vero temporibus deserunt.",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2171dae8-64db-4ea7-8295-2dd87e885cbc/AS+M+NK+WVN+WR+LND+GFX+JKT.png",
    universal: true,
  },
  {
    email: { email: "universal@uni" },
    id: "D",
    name: "Nike Dry Fit",
    category: "T-Shirt",
    stock: "200",
    price: "1024",
    area: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus voluptate laboriosam ut eligendi tempore, id explicabo? Dolor labore odit perspiciatis eaque temporibus soluta tempore totam vitae, maiores odio accusamus expedita neque enim explicabo, corporis aperiam obcaecati quisquam vel reiciendis? Est cumque, deleniti beatae explicabo perspiciatis a vero temporibus deserunt.",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgYrdszaK-41jBhc5t_fC9GlPGpgNAyH8u9TKLCtr1VCzxVejQW5vJm8ehY5_3EMCTB9OC0c6sKwydx3OTP1iKW4MOWK6AfmQpzS2kj1nMKFbl_icUB3mC",
    universal: true,
  },
  {
    email: { email: "universal@uni" },
    id: "E",
    name: "Nike Everyday Plus",
    category: "Socks",
    stock: "999",
    price: "800",
    area: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus voluptate laboriosam ut eligendi tempore, id explicabo? Dolor labore odit perspiciatis eaque temporibus soluta tempore totam vitae, maiores odio accusamus expedita neque enim explicabo, corporis aperiam obcaecati quisquam vel reiciendis? Est cumque, deleniti beatae explicabo perspiciatis a vero temporibus deserunt.",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpmsYeYADJeUx74Ntfz7wvQZjRuRlaZBWfuLnID5X0uOVx5U-U8giRt8NMvwBxhVNbfVmhT78oaibm8UpuJWe3xEoFBconLvCnavlLTV1FZF8ECRI9nZTZUA",
    universal: true,
  },
];

const avatarUrls = {
  Male: "https://www.w3schools.com/w3images/avatar2.png",
  Female:
    "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png",
  Other:
    "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
};

let userName, gender, email;
if (localStorage.getItem("LoggedIn")) {
  userName = JSON.parse(
    localStorage.getItem(localStorage.getItem("LoggedIn"))
  ).name;
  email = JSON.parse(localStorage.getItem("LoggedIn")).email;
  gender = JSON.parse(
    localStorage.getItem(localStorage.getItem("LoggedIn"))
  ).gender;
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const navigateToAddProduct = () => {
    navigate("/product/add");
  };

  const navigateToEditProduct = (product) => {
    if (product.email.email !== email) {
      alert("Edit Only your products");
      return;
    }
    if (product.universal) {
      alert("Edit Only your products");
      return;
    }
    navigate("/product/edit", { state: product });
  };

  const navigateToViewProduct = (product) => {
    navigate("/product/view", { state: { product } });
  };

  const handleLogout = () => {
    localStorage.setItem("LoggedIn", ""); // Clear the logged-in status
    navigate("/"); // Redirect to login page
  };

  // Fetch products from localStorage on load
  useEffect(() => {
    let storedProducts = [];
    if (localStorage.getItem("products"))
      storedProducts = JSON.parse(localStorage.getItem("products"));
    setProducts(storedProducts);
  }, []);

  const handleDelete = (prod) => {
    if (prod.email.email !== email) {
      alert("Delete Only your products");
      return;
    }
    if (prod.universal) {
      alert("Delete Only your products");
      return;
    }
    const updatedProducts = products.filter(
      (product) => product.email !== prod.email
    ); // compares objects by reference
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  let combinedProducts = [...universalProduct, ...products];

  const filteredProducts = [
    ...new Map(
      combinedProducts
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => [product.id, product]) // Map by `id` to ensure uniqueness
    ).values(),
  ];

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <div className="absolute top-12 right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
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

        {/* Product List */}
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold">Products</h2>
            <button
              onClick={navigateToAddProduct}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              + Add Product
            </button>
          </div>

          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3 text-left">
                  Product
                </th>
                <th className="border border-gray-200 p-3">Category</th>
                <th className="border border-gray-200 p-3">Stock</th>
                <th className="border border-gray-200 p-3">Price</th>
                <th className="border border-gray-200 p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => navigateToViewProduct(product)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <td className="border border-gray-200 p-3 flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    {product.name}
                  </td>
                  <td className="border border-gray-200 p-3 text-center">
                    {product.category}
                  </td>
                  <td className="border border-gray-200 p-3 text-center">
                    {product.stock}
                  </td>
                  <td className="border border-gray-200 p-3 text-center">
                    ₹{product.price}
                  </td>
                  <td className="border border-gray-200 p-3 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToEditProduct(product);
                      }}
                      className="text-blue-500 mr-3"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
                        width={20}
                        alt=""
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(product);
                      }}
                      className="text-red-500"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
                        width={20}
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
