import React, { useState } from "react";
import ListItem from "./ListItem";
import uuid from "uuid/v4";

//Components
import MainImage from "../../assets/images/item-img.png";
import FlagImage from "../../assets/images/flag-img.png";

export default function List() {
  const [data, setData] = useState([
    {
      name: "Toddler Fishing Game Gifts for 2 3 Year Old Girl and …",
      img_src: MainImage,
      flag_img_src: FlagImage,
      text: "B078WLH42J",
      data: [
        { label: "Avg Price:", value: "$5.68" },
        { label: "Avg Profit:", value: "$5.68" },
        { label: "Avg Margin:", value: "29%" },
        { label: "Avg Sold:", value: "192" },
        { label: "Avg Rev:", value: "$32,813.36" },
        { label: "Avg ROI:", value: "100%" },
        { label: "Avg Daily Rank:", value: "9.3" },
        { label: "Reviews:", value: "9.3" },
        { label: "Ratings:", value: "9.3" },
        { label: "Dimensions:", value: "9.3" },
        { label: "Avg Price:", value: "9.3" }
      ]
    }
  ]);
  return (
    <>
      <div className="container">
        {data.map(data => {
          return <ListItem key={uuid()} data={data} />;
        })}
      </div>
    </>
  );
}
