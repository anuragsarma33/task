import React from 'react';
import data from '../data';
import './App.css';
const CourseList = () => {
const courseInfo=data.map(info=>{
    const {id,image,title,author,rating,price}=info;
    return (
    
        <div className="card" key={id}>
        <div className="card-header">
            <img src={image} alt="img" className="img-responsive" />
        </div>
        <div className="card-body">
        <h3>{title}</h3>
    <p className='author'>{author}</p>
    <p><strong>{rating} <span>****</span></strong></p>
    <p>&#8377; {price}</p>
        </div>
       
    </div>

    )
})
return (
    <div className="row">
     {courseInfo}
    </div>
)

}

export default CourseList;
