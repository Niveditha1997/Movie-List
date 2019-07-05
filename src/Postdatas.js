import React, { Component, PropTypes } from 'react'
import PostData from './data/data.json';
import modal from 'react-responsive-modal';
import a from './a'; import b from './b';
import c from './c'; import d from './d';
import e from './e'; import f from './f';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import g from './g';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import fetchdata from './fetchdata';

import { browserHistory } from 'history';
import fetch from 'isomorphic-fetch';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Postdatas extends React.Component {
  taskTypes = [];
  addData = PostData;

  constructor(props) {

    super(props);

    this.state = {
      value: '', taskTypes: PostData, modal: false,
      act: 0,
      index: '',
      datas: [],
      showComponent: false,
      passPostDetail: ''
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.adddata = this.adddata.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleChange(event) {
    this.setState({ value: event.target.value });

    this.taskTypes = PostData.map(function (a) { return a });
    let suggestions = this.taskTypes.filter(function (tname) {
      return tname.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({
      taskTypes: suggestions
    })
  }
  fSubmit = (e) => {
    console.log(this.addData.length);
    e.preventDefault();
    // console.log('try');
    let addData = this.state.addData;
    let img = this.refs.url.value;
    let title = this.refs.name.value;

    let rating = this.refs.ratings.value;
    let likes = this.refs.likes.value;
    let year = this.refs.year.value;
    let content = this.refs.content.value;
    if (this.state.act === 0) {
      //new
      let id = this.addData.length + 1;
      let data = {
        id, img, title, rating, likes, year, content
      }
      this.addData.push(data);
    }
    console.log(this.addData);
    this.refs.myform.reset();
    this.setState({
      addData: addData,
      taskTypes: this.addData, modal: !this.state.modal
    });


  }

  adddata(postdetails) {
    console.log(postdetails);
    this.setState({
      showComponent: true,
      passPostDetail: postdetails
    });

  }
  fRemove = (i) => {
    let addData = this.state.addData;

    addData.splice(i, 1);
    console.log(this.addData);
    this.refs.myform.reset();
    this.setState({
      addData: addData,
      taskTypes: this.addData
    });


  }
  remove(postdetails) {
    console.log(postdetails);
    this.setState({
      showComponent: true,
      passPostDetail: postdetails
    });

  }





  //   showData(){
  //     return(
  // <div>
  // {this.state.showComponent ?
  //   <div class="container">

  //   <div class="row"> 
  //   <div class="col-sm-3 mr-5 mt-5 ml-5">

  //       <img src={this.state.passPostDetail.img}  width="300" height="300" /> 
  //       </div>
  //       <div class="col   ml-5"> 
  //       <div class="row-sm-3 offset-sm-3 ml-5 mt-5">  
  //     <div class="text-center"> <h3>{this.state.passPostDetail.title}</h3></div>
  //      </div>
  // <div class="row mt-5">
  // <div class="col-sm-4">
  // <div>
  // <i class="fa fa-star fa-2x">{this.state.passPostDetail.rating}</i>  
  // </div>

  // </div>
  // <div class="col-sm-4">
  // <div>
  // <i class="fa fa-heart fa-2x">{this.state.passPostDetail.likes}</i>  
  // </div>
  // </div>
  // <div class="col-sm-4">
  // <div>
  // <h3>{this.state.passPostDetail.year} </h3> 
  // </div>
  // </div>
  // </div>
  // <div class="row mt-3">
  // <div class="col-sm">
  // <h6>{this.state.passPostDetail.content}</h6>

  // </div>
  // </div>

  //       </div>

  // </div>

  // </div>    
  // :
  //  null
  // }
  // </div>
  //     )
  //   }


  render() {

    return (

      [<div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-6 mt-5">
            <div className="from-group">
              <div className="input-group input-group-lg">
                <span className="input-group-addon  bg-warning text-light p-2">
                  <i className="fa fa-search fa-2x"></i>
                </span>
                <input type="text" className="form-control bg-light text-dark" placeholder="Search Here"
                  value={this.state.value} onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-2 mt-5">
            <div>
              <Button color="primary" onClick={this.toggle}> Add Movie</Button>
              <form ref="myform" className="myForm" >
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle} className="text-center">Add Movie</ModalHeader>
                  <ModalBody>

                    <div className="form-group">
                      <label>Image url*:</label>
                      <input type="text" id="name" placeholder="Enter movie image url..." ref="url" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Movie Name:*</label>
                      <input type="text" id="type" placeholder="Enter Movie name..." ref="name" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Ratings:*</label>
                      <input type="text" id="use" placeholder="Enter Movie ratings..." ref="ratings" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Likes*:</label>
                      <input type="text" id="company" placeholder="Enter Movie Likes..." ref="likes" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Year:*</label>
                      <input type="text" id="quantity" placeholder="Enter Year of Movie..." ref="year" className="form-control" />
                    </div>
                    <div className="form-group">

                      <label>Movie Content:*</label>
                      <textarea type="text" id="price" rows="3" cols="3" placeholder="Enter Movie content..." ref="content" className="form-control"></textarea>
                    </div>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={(e) => this.fSubmit(e)}>Add Detailes</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </form>
            </div>



          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>,









      this.state.taskTypes.map((postdetails, index) => {

        return (
          <div className="row">
            <div className="col-sm-10 offset-sm-1 mt-5">

              <div className="card-deck">

                <div className="col-sm-4 offset-sm-4">
                  <img src={postdetails.img} width="300" className="ml-5 " onClick={() => this.adddata(postdetails)} />
                </div>


                <div>


                  {
                    this.state.showComponent && this.state.passPostDetail.id === postdetails.id ?
                      <div className="container">

                        <div className="row">
                          <div className="col-sm-3 mr-5 mt-5 ml-5">

                            <img src={this.state.passPostDetail.img} width="300" height="300" />
                          </div>
                          <div className="col   ml-5">
                            <div className="row-sm-3 offset-sm-3 ml-5 mt-5">
                              <div className="text-center"> <h3>{this.state.passPostDetail.title}</h3></div>
                            </div>
                            <div className="row mt-5">
                              <div className="col-sm-4">
                                <div>
                                  <i className="fa fa-star fa-2x">{this.state.passPostDetail.rating}</i>
                                </div>

                              </div>
                              <div className="col-sm-4">
                                <div>
                                  <i className="fa fa-heart fa-2x">{this.state.passPostDetail.likes}</i>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div>
                                  <h3>{this.state.passPostDetail.year} </h3>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm">
                                <h6>{this.state.passPostDetail.content}</h6>

                              </div>

                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-2 offset-sm-4">
                                <button className="btn btn-primary myButton mb-3" onClick={() => this.remove(index)}  >Delete</button>
                              </div>
                            </div>

                          </div>

                        </div>


                      </div>


                      :
                      null
                  }
                </div>


              </div></div>
          </div>





        )
      }




      )


      ]

    )

  }
}