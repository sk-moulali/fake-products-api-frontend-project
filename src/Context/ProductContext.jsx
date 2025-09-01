import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //1. Data fetch using async & wait 😍
    async function fetchdata() {
      const responce = await fetch("https://fakestoreapi.com/products/");
      const data = await responce.json();
      console.log("data using async & await : ", data);
      setProducts(data);
    }
    fetchdata();

    //2. Data fetch using promise 😍
    // let response = fetch("https://fakestoreapi.com/products/");
    // response.then((data) => {
    //   data
    //     .json()
    //     .then((data) => {
    //       console.log("data using promise : ", data);
    //       setProducts(data);
    //     })
    //     .catch((err) => console.log(err));
    // });
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
