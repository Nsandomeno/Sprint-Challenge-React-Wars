import React, {useState, useEffect,} from 'react';
import './App.css';
import axios from 'axios';
import {Card, CardSubtitle, CardTitle, CardBody} from 'reactstrap';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swData, setSwData] = useState([]);

  useEffect(function(){
    axios.get(`https://swapi.co/api/people/`)
      .then(function(response){
        console.log("This is the response:",response.data.results)
        setSwData(response.data.results);
      })
      .catch(function(error){
        console.log("This is the error:", error)
      })

  },[]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {swData.map(function(trait, index){
          return(
            <Card key = {index}>
              <CardBody>
                <CardTitle>{trait.name}</CardTitle>
                <div>
                  <CardSubtitle>Height: {trait.height}</CardSubtitle>
                  <CardSubtitle>Weight: {trait.mass}</CardSubtitle>
                  <CardSubtitle>Birth: {trait.birth_year}</CardSubtitle>
                </div>  
              </CardBody>
            </Card>
          );
        })}

      </div>
    </div>
  );
}

export default App;
