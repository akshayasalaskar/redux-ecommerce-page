import menspant from "./images/menspant.webp";
import womentop from "./images/womentop.webp";
import laptop from "./images/laptopimg.webp";
import tablet from "./images/tabletimg.webp";

const products = [
  {
    id: 0,
    img: menspant,
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
  },
  {
    id: 1,
    img: laptop,
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
  },
  {
    id: 2,
    img: womentop,
    category: "Headphones",
    title: "Bluetooth Headphone",
    price: "59.00",
  },
  {
    id: 3,
    img: tablet,
    category: "Headphones",
    title: "Bluetooth Headphone",
    price: "59.00",
  },
];

import ProductCrad from "./ProductCrad";

const NewArrival = () => {
  return (
    <div className="container mt-32">
      <div className="sm-flex justify-between items-center">
        <h2 className="text-4xl font-medium"> New Arrial</h2>
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

export default NewArrival;
