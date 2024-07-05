import React from "react";
import Product from "../product/Product";
import homeStyles from "./Home.module.css";

// Assuming you want to simulate 6 products as per your layout description
const productList = new Array(6).fill(null);

function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.homeImage}>
        <img
          src="https://plus.unsplash.com/premium_photo-1684785617153-b57947c147c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
        />
      </div>
      <div className={homeStyles.productList}>
        {productList.map((_, index) => (
          <Product key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
