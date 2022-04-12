import React from 'react';
import './App.css';
import userImg from "./images/image-victor.jpg";
import Card from './Components/Card';

function App(){
    return(
        <div className='App'>
            <Card
            imgUrl={userImg}
            Name='Victor Crest'
            Age='26'
            locality='London'
            followers='80K'
            like='803K'
            Photos='1.4K' 
            />
        </div>
    )
}

export default App; 