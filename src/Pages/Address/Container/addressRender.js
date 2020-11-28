import React from 'react';
import PropTypes from 'prop-types';
import '../../../Components/index.css';
import Mediacard from '../../../Components/singlecard';
import Pagination from '../../../Components/pagination';
import {useState} from 'react';

 
const  AddressRender =(props)=>{
   
  const addresscard = props.address;
  const [postsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [search,setSearch]=useState("")
  const [searching ,setSearching]=useState(false)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = addresscard.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  onchange = e =>{
    setSearch(e.target.value);
    if(e.target.value.length>0){setSearching(true)}
    else setSearching(false)
  
 }
 const filteredaddress = addresscard.filter( item =>{
  return item.payload_id.toLowerCase().indexOf( search.toLowerCase() ) !== -1
})
 

    return (
        <div className="belowbanner">
         
         
           <div className="single-panel">
           <div className="row">
                        <div className="col"><h1>
                          This Page Have Information OF SPACEX ADDRESS
                          </h1></div>
                        <div className="col">
                            <input label="Search Country"  placeholder="Search Address" icon="search" onChange={onchange}/>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">

                    {  
                    searching ? 
                    filteredaddress.map( item =>( <Mediacard   
                      foraddress = {"foraddress"}
                      payload_id = {item.payload_id}                     
                      payload_mass_kg ={item.payload_mass_kg}
                      nationality = {item.nationality}
                      orbit = {item.orbit}
                      manufacturer= {item.manufacturer}
                 />))
                    :
                    <div>{
                      currentPosts && currentPosts.map( (item) => (
                        <div>
                             <Mediacard   
                                    foraddress = {"foraddress"}
                                    payload_id = {item.payload_id}                     
                                    payload_mass_kg ={item.payload_mass_kg}
                                    nationality = {item.nationality}
                                    orbit = {item.orbit}
                                    manufacturer= {item.manufacturer}
                               /></div>  
                   ))}

                       <div style={{marginLeft:"35%" ,maxWidth:"30%"}}>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={addresscard.length}
                            paginate={paginate}
                            indexOfLastPost={indexOfLastPost}
                        />
                   </div>      

                    </div>
                 
              }


                    </div>


          

                 
               
           </div>
            
        </div>
    );
}
 

 
export default AddressRender;