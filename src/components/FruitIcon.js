import React, { useContext, memo } from "react";
import { FruitContext } from "../providers/Fruit";
import "../styles.css";

const translateIcon = (icon) => {
  const icons = {
    Apple: "https://image.flaticon.com/icons/png/512/186/186016.png",
    Banana:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/banana.png",
    default:
      "https://cdn0.iconfinder.com/data/icons/user-interface-255/100/more-512.png"
  };
  return icons[icon] || icons.default;
};

const FruitIcon = memo(() => {
  const [fruit] = useContext(FruitContext);
  return (
    <img
      src={translateIcon(fruit.name)}
      className="FruitIcon"
      alt="fruit_icon"
    />
  );
});

export default FruitIcon;
