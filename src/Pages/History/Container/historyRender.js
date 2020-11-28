import React from 'react';
import PropTypes from 'prop-types';
import '../../../Components/index.css';
import Mediacard from '../../../Components/singlecard';
import Pagination from '../../../Components/pagination';
import {useState} from 'react';


 
const  HistoryRender =(props)=>{
  
  
  const [postsPerPage] = useState(4);
  const [search,setSearch]=useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [searching ,setSearching]=useState(false)
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const historycard = props.history;
  const currentPosts = historycard.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
  onchange = e =>{
   setSearch(e.target.value);
   if(e.target.value.length>0){setSearching(true)}
   else setSearching(false)
   
   
}



const filteredHistory = historycard.filter( item =>{
   return item.title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
})
  



    return (
        <div className="belowbanner">
         
           <div className="single-panel">

           <div className="row">
                        <div className="col">
                        <h1>
                          This Page Have Information OF SPACEX  HISTORY
                          </h1>
                        </div>
                        <div className="col">
                            <input label="Search Country"   placeholder="Search History" icon="search" onChange={onchange}/>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        { searching ?
                        filteredHistory.map( item =>(
                        <Mediacard 
                        forhistory={"forhistory"}                        
                         title ={item.title}
                         id={item.id}         
                         flight_number = {item.flight_number}
                         event_date_utc = {item.event_date_utc}
                          details= {item.details}
                          />
                           )) :
                           <div>  
                           {
                                currentPosts &&  currentPosts.map( (item) => (
                                   <div>
                                        <Mediacard 
                                               forhistory={"forhistory"}                        
                                               title ={item.title}
                                               id={item.id}         
                                               flight_number = {item.flight_number}
                                               event_date_utc = {item.event_date_utc}
                                               details= {item.details}
                                          />
                                       
                                          </div>  
                              ))
                              
                              }
                              <div style={{marginLeft:"35%" ,marginRight:"30%"}}>
                           <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={historycard.length}
                            paginate={paginate}
                        />
                              </div> 
                              </div>
                              
                        }
                    </div>
          
           
             

           </div>
           
          
            
        </div>
    );
}
 

 
export default HistoryRender;