import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import style from "./details.module.scss"
import { forEach } from 'rsuite/esm/internals/utils/ReactChildren';
import { Link } from 'react-router-dom';

export default function Details() {
  let {id}=useParams();
  const [details, setdetails] = useState([])
  const [notFound, setnotFound] = useState(true)
  // const [num, setnum] = useState([ strIngredient1,'strIngredient2','strIngredient3','strIngredient4','strIngredient5','strIngredient6','strIngredient7','strIngredient8','strIngredient9','strIngredient10','strIngredient11'])
  console.log(id);

  function GetDetails(id){
   axios.get(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
   .then((res)=>{;
    console.log(res);
    if(res.data.meals == "Invalid ID" ){
      setdetails([])       
    }else{
      setdetails(res.data.meals) 
    }

   }).catch((res)=>{
    setdetails([])
   }
   )
  }
 
  

  useEffect( ()=>{
     GetDetails(id)
    console.log(details);
    

  },[id])

  

return <>
  <div className='container p-1  text-center'>
   { details.map((item)=> <h1 className='text-black '>{item.strMeal}</h1>)}
    {
    // justify-between  items-center flex gap-1
      details?.map((item)=><div> <div className={`text-black ${style.grid}  `}>
        <div className={`img flex flex-column  items-center   p-1 ${style.gridChild} `}>
          <img src={item.strMealThumb} className={`w-100 rounded-15`} alt="" />
          <Link to={item.strYoutube} className={`btn-yellow w-100 mt-1 text-white`}  target='_blank' > Youtube</Link>
        </div>
        
        <div className={`Instructions ${style.gridChild}    `}>
          <div className={`bg-backGray shadow rounded-15 p-1`}>
            <h3 className={`${style.textChange} text-yellow`}>Ingredients</h3>
          {item.strIngredient1? <p className={`${style.textChange}`}>{item.strIngredient1 }</p>:null}
          {item.strIngredient2? <p className={`${style.textChange}`}>{item.strIngredient2 }</p>:null}
          {item.strIngredient3? <p className={`${style.textChange}`}>{item.strIngredient3 }</p>:null}
          {item.strIngredient4? <p className={`${style.textChange}`}>{item.strIngredient4 }</p>:null}
          {item.strIngredient5? <p className={`${style.textChange}`}>{item.strIngredient5 }</p>:null}
          {item.strIngredient6? <p className={`${style.textChange}`}>{item.strIngredient6 }</p>:null}
          {item.strIngredient7? <p className={`${style.textChange}`}>{item.strIngredient7 }</p>:null}
          {item.strIngredient8? <p className={`${style.textChange}`}>{item.strIngredient8 }</p>:null}
          {item.strIngredient9? <p className={`${style.textChange}`}>{item.strIngredient9 }</p>:null}
          {item.strIngredient10? <p className={`${style.textChange}`}>{item.strIngredient10 }</p>:null}
          {item.strIngredient11? <p className={`${style.textChange}`}>{item.strIngredient11 }</p>:null}
          </div>
        </div>
        
        </div><div className="Instructions text-start mt-1">
          <h3>Instructions:</h3>
          <p>{item.strInstructions}</p>
        </div>
        </div>)
    }
  </div>
 
 

</>

}
  



//    :  <div className='container px-1 flex flex-column justify-between items-center text-center'><h1 className='pt-10 text-50'>Invalid ID</h1>
// <span className='text-textGray bg-black p-2 text-20'>Please enter the correct ID to get the recipe</span>
// </div> 