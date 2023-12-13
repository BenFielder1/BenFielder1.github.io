import React from "react"
import {Link} from "react-router-dom"

export function Card(props){
    return (
        <Link to={props.link}>
            <div class="card">
			    <img class="work-img" src={props.image} alt={props.content} />
				<div class="work-content">{props.content}</div>
            </div>
        </Link>
    )
}