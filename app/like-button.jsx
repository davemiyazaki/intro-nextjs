'use client'
import {useState} from 'react';

export default function LikeButton () {
  
  const [likes, setLikes] = useState(0);

  function handleClick (){
      return setLikes(likes + 1);
  }

  return(
    <button id="btnLike" onClick={handleClick}>Likes {likes}</button>
  )
}
