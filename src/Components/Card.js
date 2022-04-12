import React from 'react';
import './Card.css';
function Card({imgUrl,Name,Age,locality,followers,like,Photos}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imgUrl} alt=''/>
        </div>
        <div className='bio'>
            <p className='userName'>{Name} <span className='age'>{Age}</span></p>
            <p className='locality'>{locality}</p>
        </div>
        <hr/>
        <div className='Social'>
            <div>
                <p className='follower'>{followers}</p>
                <p>Followers</p>
            </div>
            <div >
                <p className='likes'>{like}</p>
                <p>Likes</p>
            </div>
            <div >
                <p className='photos'>{Photos}</p>
                <p>Photos</p>
            </div>
        </div>
    </div>
  )
}

export default Card