import ReactDom from 'react-dom';
import React, { Component } from 'react';
import PostData from './data/data.json'
import Postdatas  from './Postdatas';
import 'font-awesome/css/font-awesome.min.css';
export default class f extends React.Component
{
    render()
    {  
       return(  
        PostData.map((postdetails,index)=>{
            
            return(
           <div class="container">
             
                 <div class="row"> 
                 <div class="col-sm-3 mr-5 mt-5 ml-5">
                               
                     <img src={postdetails.f.img}  width="300" height="300" /> 
                     </div>
                     <div class="col   ml-5"> 
                     <div class="row-sm-3 offset-sm-3 ml-5 mt-5">  
                   <div class="text-center"> <h3>{postdetails.f.title}</h3></div>
                    </div>
 <div class="row mt-5">
 <div class="col-sm-4">
 <div>
 <i class="fa fa-star fa-2x">{postdetails.f.rating}</i>  
 </div>
 
     </div>
     <div class="col-sm-4">
 <div>
 <i class="fa fa-heart fa-2x">{postdetails.f.likes}</i>  
 </div>
 </div>
 <div class="col-sm-4">
 <div>
  <h3>{postdetails.f.year} </h3> 
 </div>
 </div>
      </div>
      <div class="row mt-3">
 <div class="col-sm">
 <h6>{postdetails.f.content}</h6>
 
 </div>
 </div>
 
                     </div>
                      
            </div>
            </div>    
               
            
           ); 
    }))}
}