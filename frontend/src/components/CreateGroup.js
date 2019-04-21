import React, { Component } from 'react';
import axios from 'axios';

class CreateGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputCount: ['member1'],
      member1: '',
      groupname: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddInputField = this.handleAddInputField.bind(this);
    this.handleSendGroupDetails = this.handleSendGroupDetails.bind(this);
  }

  handleChange(e) {
    var text = e.target.id;
    this.setState({[text]: e.target.value});
  }

  handleAddInputField(e) {
    e.preventDefault();
    this.setState({
      inputCount: [...this.state.inputCount, 'member'+(this.state.inputCount.length+1)],
      ['member'+(this.state.inputCount.length+1)]: ''
    })
  }

  handleSendGroupDetails(e){
    e.preventDefault();
    console.log(e);
    const reactData = {groupname: this.state.groupname};

    for (var i=0;i<this.state.inputCount.length;i++){
      var temp = this.state.inputCount[i];
      reactData[temp] = this.state[temp];
    }
    console.log(reactData);
    const url = '//localhost:5000/';

    axios.post(url,
      reactData,
      {headers: { 'content-type':'application/x-www-form-urlencoded', 'accept':'application/json' }})
       .then(res => console.log('Data send'))
       .catch(err => console.log(err.data))

       this.setState({
         inputCount: ['member1'],
         member1: '',
         groupname: '',
       });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-sm-12 col-md-8 col-lg-6">

              <form className="text-center border border-light p-5">
                <p className="h4 mb-4">Create New Business Trip Group</p>

                <input
                  type="text"
                  id="groupname"
                  value={this.state.groupname}
                  className="form-control mb-4"
                  placeholder="Group Name"
                  onChange={this.handleChange}/>

                <p> Add Group Members </p>
                {this.state.inputCount.map((i,key) => {
                  return(
                    <input type="text"
                    id={i} key={key}
                    value={this.state[i]}
                    className="form-control mb-4"
                    placeholder="Add Member Email"
                    onChange={this.handleChange} />
                  )
                })}
                  <button onClick={this.handleAddInputField} type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-plus-sign"></span> Add More Members +
                  </button>
                <button onClick={this.handleSendGroupDetails} className="btn btn-info btn-block my-4" type="create">Create Group</button>
              </form>

          </div>
        </div>
      </div>
    );
  }
}

export default CreateGroup;
