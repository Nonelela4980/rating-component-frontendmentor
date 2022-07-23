import {FC, useState} from 'react'
import './rating.css'
import star from '../assets/images/icon-star.svg';

interface Props{
    number:number,
}

const RatingItem : FC<Props>=({number})=>{ 
    const [isActive,setStatus] = useState<boolean>(false)
return(
    <div 
    className='rating-item' 
    style={{
        background:`${isActive && "hsl(217, 12%, 63%)"}`,
        color:`${isActive && "hsl(0, 0%, 100%)"}`
    }}  
    onClick={()=>setStatus(!isActive)}
    >
        <h3>{number}</h3>
    </div>
)
}

const Rating:FC =()=>{
    return(
        <div className='rating'>
            <div className='star-icon'>
                <img src={star}  alt='star'/>
            </div>
            <div className="text">
                <h2>How did we do?</h2>
                <p> Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!
                </p>
            </div>
            <div className="ratings">
                <RatingItem number={1}/>
                <RatingItem number={2}/>
                <RatingItem number={3}/>
                <RatingItem number={4}/>
                <RatingItem number={5}/>
            </div>
            <button>submit</button>
        </div>
    )
}

export default Rating;