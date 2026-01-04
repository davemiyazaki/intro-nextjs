import {useState} from 'react';
import "./index.css";

function Header ({title}) {
  return <h1>{title}</h1>
}

function HomePage () {

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  const [likes, setLikes] = React.useState(0);
  function handleClick (){
      return setLikes(likes + 1);
  } 
  return (
      <div>
          <Header title="Hello World!"/>
          <ul id="list">
              {names.map(
                  (name)=>{
                      return <li key={name}>{name}</li>
                  })
              }
          </ul>
          <button id="btnLike" onClick={handleClick}>Likes {likes}</button>
      </div>
  )
}

root.render(<HomePage />)

//on CHAPTER 9
