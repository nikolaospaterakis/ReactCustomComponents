import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import { AiOutlineCloudUpload } from "react-icons/ai";
import Testimoniass from "./components/Testimonias/index"
import { FaQuoteLeft } from "react-icons/fa";
import May from "./img/may_anderson.jpg"
import Toast from "./components/Toast/index"

function App() {

  
  const img = May //May 
  
  let randomNumberForShapes = Math.floor(Math.random() * 2)
  let randomNumberForColors = Math.floor(Math.random() * 8)
  const shape = ["Pill", "Square"]
  const colors = ["Gray", "Red", "Yellow", "Green", "Blue", "Indigo", "Purple", "Pink"]
  let randomShape = shape[randomNumberForShapes]
  let randomColor = colors[randomNumberForColors]
   
  return (
    <section>
        <Badge value={{randomShape, randomColor}}>
          Badge
        </Badge>
        
        <Banner>
            <Banner.Title></Banner.Title>
            <Banner.Extra>
              <p>This is a random Message</p>
            </Banner.Extra>
        </Banner>
        
        <Card>
          <Card.Icon><AiOutlineCloudUpload /></Card.Icon>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Details>Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.</Card.Details>
        </Card>
        
        <Toast>
          <Toast.Details></Toast.Details>
        </Toast>
    </section>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/* 
Try this 

  <Testimoniass img={img}>
        <Testimoniass.Photo img={img}></Testimoniass.Photo>
        <Testimoniass.Title><FaQuoteLeft /></Testimoniass.Title>
        <Testimoniass.Details>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." </Testimoniass.Details>
        <Testimoniass.Footer name="May Andersons" about="Workcation, CTO"></Testimoniass.Footer>
  </Testimoniass>
      
or this 

<section>

      <Badge value={{randomShape, randomColor}}>
        Badge
      </Badge>
      
      <Banner>
          <Banner.Title></Banner.Title>
          <Banner.Extra>
            <p>This is a random Message</p>
          </Banner.Extra>
      </Banner>
      
      <Card>
        <Card.Icon><AiOutlineCloudUpload /></Card.Icon>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Details>Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.</Card.Details>
      </Card>
      
      <Toast>
        <Toast.Details></Toast.Details>
      </Toast>
      
    </section>
    
    */