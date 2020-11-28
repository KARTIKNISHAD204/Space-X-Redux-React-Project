import React from 'react';
import PropTypes from 'prop-types';
 
const PostContainer = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
    <span>{props.published_date}________</span>         <span>{props.topic}______</span>       <span>{props.country}_______</span>
    <h2>{props.summary}</h2>
            
        </div>
    );
}
 

 
export default PostContainer;