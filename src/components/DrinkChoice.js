import axios from "axios";
import React,{useEffect, useState } from "react";
import DrinkChoiceTable from "../components/DrinkChoiceTable"

const App = () => {
  const [drinkChoice, setDrinkChoice] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  const getProductData = async () => {
    try {
       const response = await axios.get(
        process.env.REACT_APP_API_URL+process.env.REACT_APP_API_MODEL_ID, 
        { 'headers': { 'Authorization': "Bearer "+ process.env.REACT_APP_API_KEY } }
      );
      console.log(response.data.data.attributes);
      console.log(typeof response.data);
      setDrinkChoice(response.data.data.attributes);
      setIsLoading(false);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();    
  }, []);

  return (
    <>
  {isLoading ? <h1>Loading Data.........</h1> : <DrinkChoiceTable props={drinkChoice}/>}   
  </>
  );
};

export default App;
