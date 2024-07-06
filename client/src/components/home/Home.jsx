import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import homeStyles from "./Home.module.css";

// Assuming you want to simulate 6 products as per your layout description
const productList = new Array(6).fill(null);
function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    try {
      setIsLoading(true);

      const getData = async () => {
        try {
          const response = await fetch("http://localhost:3000/products");
          if (!response.ok) {
            throw new error("Could not fetch data");
          }
          const products = await response.json();
          setData(products);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      getData();
    } catch (error) {}
  }, []);
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.homeImage}>
        <img
          src="https://plus.unsplash.com/premium_photo-1684785617153-b57947c147c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
        />
      </div>
      <div className={homeStyles.productList}>
        {data.map((item, _index) => (
          <Product
            key={item._id}
            name={item.name}
            price={item.price}
            url={item.imageUrl}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
