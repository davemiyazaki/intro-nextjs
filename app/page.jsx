import "./index.css";
import "./like-button"
import LikeButton from "./like-button";
function Header ({title}) {
  return <h1>{title}</h1>
}

export default function HomePage () {

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
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
        <LikeButton />
      </div>
  )
}

//Successfully Completed
