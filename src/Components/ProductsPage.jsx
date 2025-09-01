import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-10 text-center">
        Explore Our Products
      </h1>
      {products.map((product) => {
        const { id, image, category, title, price } = product;
        return (
          <div key={id}>
            <div className="w-80 m-auto">
              <div className="border border-[#e4e4e4] h-[300px] mb-1 group transition">
                <div className="w-full h-full flex justify-center items-center">
                  {/* image */}
                  <div className="w-[200px] mx-auto flex justify-center items-center">
                    <Link to={`/product/${id}`}>
                      <img
                        className="max-h-[160px] group-hover:scale-110 transition duration-300 cursor-pointer"
                        src={image}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* category, title & price */}
              <div key={id}>
                <div className="text-sm capitalize text-gray-500 mb-1 text-center">
                  {category}
                </div>
                <Link to={`/product/${id}`}>
                  <h2 className="font-semibold mb-1 text-center">{title}</h2>
                </Link>
                <h2 className="font-semibold text-center mb-4">$ {price}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
