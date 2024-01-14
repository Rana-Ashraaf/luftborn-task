import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import UserCard from "./components/UserCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
      });
  }, []);

  const colorPalette = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#FF8B64",
    "#55C2E6",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
    "#4BCF82",
  ];

  return (
    <div className="main-contents">
      <UserCard />

      {products?.map((item, index) => {
        const headerColor = colorPalette[index % colorPalette.length];
        return (
          <Card
            category={item.category}
            title={item.title}
            price={item.price}
            count={item.rating.count}
            key={item.id}
            headerColor={headerColor}
          />
        );
      })}
    </div>
  );
}

export default App;
