import React, {useState, useEffect,} from 'react';
import './App.css';
import axios from 'axios';
import {Card, CardSubtitle, CardTitle, CardBody} from 'reactstrap';
import styled from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swData, setSwData] = useState([]);

  const CardContainer = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  `;

  const CharacterCard = styled.div`
    width: 30%;
    height: 40%;
    margin: 2.5%;
    background: black;
    box-shadow: 10px 10px 5px gray;
  `;

  const CardHead = styled.h1`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.4rem;
  color: #FFE81F;

  `;

  const CardTraits = styled.h4`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  font-size: 1.1rem;
  color: black;
  `;

  const TraitDiv = styled.div`
  background-color: #FFE81F;
  
  `;





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
      <CardContainer>
        {swData.map(function(trait, index){
          return(
            <CharacterCard className="characterCard" key = {index}>
              <CardBody>
                <CardHead>{trait.name}</CardHead>
                <TraitDiv>
                  <CardTraits>Height: {trait.height}</CardTraits>
                  <CardTraits>Weight: {trait.mass}</CardTraits>
                  <CardTraits>Birth: {trait.birth_year}</CardTraits>
                </TraitDiv>  
              </CardBody>
            </CharacterCard>
          );
        })}

      </CardContainer>
    </div>
  );
}

export default App;
