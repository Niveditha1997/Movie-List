import ReactDom from 'react-dom';
import React, { Component } from 'react';
import PostData from './data/data.json'
import Postdatas  from './Postdatas';
import 'font-awesome/css/font-awesome.min.css';
export default class  a extends React.Component
{  
    
    
 
    render()
    {  
       return(  
        PostData.map((postdetails,index)=>{
            
            return(
           <div class="container">
             
                 <div class="row"> 
                 <div class="col-sm-3 mr-5 mt-5 ml-5">
                         
                 <img src={postdetails.img}  width="300" height="300" className="ml-5 "  /></div> 
                     
                     <div class="col   ml-5"> 
                     <div class="row-sm-3 offset-sm-3 ml-5 mt-5">  
                   <div class="text-center"> <h3>{postdetails.title}</h3></div>
                    </div>
 <div class="row mt-5">
 <div class="col-sm-4">
 <div>
 <i class="fa fa-star fa-2x">{postdetails.rating}</i>  
 </div>
 
     </div>
     <div class="col-sm-4">
 <div>
 <i class="fa fa-heart fa-2x">{postdetails.likes}</i>  
 </div>
 </div>
 <div class="col-sm-4">
 <div>
  <h3>{postdetails.year} </h3> 
 </div>
 </div>
      </div>
      <div class="row mt-3">
 <div class="col-sm">
 <h6>{postdetails.content}</h6>
 
 </div>
 </div>
 
                     </div>
                      
            </div>
             
           </div>    
            
           ); 
    }))}
}



{/* <div class="row">
<div class="col-sm-6">
    <button type="button" class="btn btn-success ml-5" data-target="#m1" data-toggle="modal">Add Movie</button>
</div>
          <div class="modal"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"id="m1">
                    <div class="modal-dialog">
                    <div class="modal-content" >
              
                    <div class="modal-header text-center"><h4 class="text-dark">Add Movie</h4><a data-dismiss="modal" class="text-danger close " >X</a>  </div>
                    <div class="modal-body">
                          <form>
            <div class="form-group">
            <label for="name">Image url :</label>
            <input type="text" id="name" placeholder="Enter movie image url..." name="mname"  class="form-control"/>
            </div>
            <div class="form-group">
            <label for="type">movie Name:</label>
            <input type="text" id="type"  placeholder="Enter Movie name..." name="mtype"   class="form-control"/>
            </div>
            <div class="form-group">
            <label for="use">Ratings</label>
            <input type="text" id="use"   placeholder="Enter Movie ratings..." name="musage"  class="form-control"/>
            </div>
            <div class="form-group">
                <label for="company">Likes :</label>
                <input type="text" id="company"  placeholder="Enter Movie Likes..." name="mcompany"   class="form-control"/>
                </div>
                <div class="form-group">
                <label for="quantity">Year:</label>
                <input type="text" id="quantity"  placeholder="Enter Year of Movie..." name="mquantity"  class="form-control"/>
                </div>
                <div class="form-group">
                <label for="price">Movie Content:</label>
                <input type="text" id="price"   placeholder="Enter Movie content..." name="mprice" class="form-control"/>
              </div>
            <button type="submit" class="btn btn-success btn-block " onclick="$('#m1').modal('hide')">Add</button>
           </form>
            </div>
            </div>
            </div>
            </div>
          

          </div>     */}
