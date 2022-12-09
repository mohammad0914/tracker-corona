import {  Typography, Grid } from '@material-ui/core';
function Card(props){
    const {type,number,date}=props
    return (
        <div>
            <p>{type}</p>
            <p>{number}</p>
            <p>{date}</p>
            <p>Number of active case covid</p>

        </div>
    )
}

export default Card