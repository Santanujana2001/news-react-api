import React from 'react'
import './Newsitem.css'
const Newsitem=(props)=>{
    return (
      <div className="my-3">
         <div className="card">
        <img src={props.imurl?props.imurl:"https://source.unsplash.com/random/300×300"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.desc}...</p>
          <p className="card-text"><small className="text-muted">published by : {props.author ? props.author: "Unknown"} on {new Date(props.date).toGMTString()}</small></p>
          <a href={props.newsurl} className="btn btn-warning">read more</a>
        </div>
      </div>
      </div>
    )
}

export default Newsitem
