import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from './singlecard'
 
const layout = (props) => {
    const blog = props.blogs;
    return (
        <div>
          {    blog ? blog.map( (blogcard,index) => (
                blogcard.map((blogcard,index)=>(
                    <div  key = {blogcard._id}> 
                    <MediaCard   
                    key = {blogcard._id}  
                    title ={blogcard.title}
                    urlToImage = {blogcard.media}
                    description={blogcard.summary}
                    author = {blogcard.country}     
                   /></div>

                ))
           
        
           )) : props.aboutdata
        
        }
        </div>

       
    );
}

layout.propTypes = {};
 
export default layout;