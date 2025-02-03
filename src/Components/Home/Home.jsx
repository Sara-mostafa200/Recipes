import React, { useEffect, useState } from "react";
import style from "./home.module.scss";

import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [CatType, setCatType] = useState("All");
  const [meals, setmeals] = useState(null);
  const [Categories, setCategories] = useState([
    "All",
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ]);
  // all beef
  function getMeals(type) {
    if (type == "All") {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then((res) => {
          setmeals(res.data.meals);
          console.log(meals);
        })
        .catch((res) => console.log(res));
    } else {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
        .then((res) => {
          setmeals(res.data.meals);

          console.log(meals);
        })
        .catch((res) => console.log(res));
    }
  }

  useEffect(() => {
    getMeals(CatType);
  }, []);

  return (
    <div className=" h-screen  container p-1   ">
      <h1 className={`${style.gradientText} text-yellow`}>
        Learn, Cook, Eat Your Food
      </h1>
      <div className="btns my-2  flex flex-wrap gap-1 mb-1 ">
        {Categories.map((type) => (
          <Link
            onClick={() => getMeals(type)}
            className={`${style.ListBtn} smoothe shadow`}
          >
            {type}
          </Link>
        ))}
      </div>
      <div className={` flex flex-wrap `}>
        {meals?.map((meal) => (
          <div className={`  ${style.meal} ${style.scale}  `}>
            <div className={`meal   bg-backGray  rounded-10 shadow  text-center`}>
              <div className={`img w-70   ${style.flowImg}`}>
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className={`w-100 ${style.img}  circle`}
                />
              </div>
              <div className="pb-2 p-1">
                <h3 className={`text-18 block  text-black `}>
                  {meal.strMeal.split(" ").slice(0,3).join(" ")}
                </h3>
                <Link to={`/details/${meal.idMeal}`} className="btn-black text-13 flex items-center justify-center text-white"> Recipe <i className="ml-small fa-solid fa-arrow-right"></i></Link>
              </div>
                
                
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
