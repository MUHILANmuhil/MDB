import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card(props) {
  let navigate = useNavigate();
  function detail(Id){
    localStorage.setItem('ID',Id);
    navigate('/details');
  }
  let {poster_path,title,vote_average,id}=props.value
  return (
    <div className='Card' onClick={()=>detail(id)}>  
        <div className='imageHolder'>
            <img className='image' src={`https://image.tmdb.org/t/p/w185${poster_path}`}  alt='Image not Available'/>
        </div>
        <div className='movieDetails'>
            <h5>Ratings:{vote_average}</h5>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Card;