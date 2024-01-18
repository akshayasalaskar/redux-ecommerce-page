import headPhone from "./images/gaming headphone.webp";
import btheadphone from "./images/-original-imagmuggusa94g3u.webp";
import mensjacket from "./images/mensjacket.webp";
import tv from "./images/tv.webp";
import musicsystem from "./images/musicsystem.webp";
import womendress from "./images/womendress.webp";
import googlepixel from "./images/googlepixel.webp";
import cover from "./images/case.webp";

const products = [
  {
    id: 0,
    img: headPhone,
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
  },
  {
    id: 1,
    img: btheadphone,
    category: "Headphones",
    title: "Bluetooth Headphone",
    price: "59.00",
  },
  {
    id: 2,
    img: mensjacket,
    category: "MensJacket",
    title: "Mens Jacket",
    price: "59.00",
  },
  {
    id: 3,
    img: tv,
    category: "Television",
    title: "LED TV",
    price: "59.00",
  },
  {
    id: 4,
    img: musicsystem,
    category: "MusicSystem",
    title: "Music System",
    price: "59.00",
  },
  {
    id: 5,
    img: womendress,
    category: "Women Dress",
    title: "Women Dress",
    price: "59.00",
  },
  {
    id: 6,
    img: googlepixel,
    category: "GooglePixel",
    title: "Google Pixels Phone",
    price: "59.00",
  },
  {
    id: 7,
    img: cover,
    category: "PhoneCase",
    title: "Phone Case",
    price: "59.00",
  },
];

import ProductCrad from "./ProductCrad";

const TrendingProduct = () => {
  return (
    <div className="container mt-32">
      <div className="sm-flex justify-between items-center">
        <h2 className="text-4xl font-medium"> Trending Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black ">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((item) => (
          <ProductCrad
            key={item.id}
            id={item.id}
            img={item.img}
            category={item.category}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
