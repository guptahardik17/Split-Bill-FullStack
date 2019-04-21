import React, { Component } from 'react';
import axios from 'axios';

class AddExpense extends Component {
  constructor(props){
    super(props);
    this.state = {
      groupname: '',
      expense: '',
      totalamount: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSendExpenseDetails = this.handleSendExpenseDetails.bind(this);
  }

  handleChange(e) {
    var text = e.target.id;
    this.setState({[text]: e.target.value});
  }

  handleSendExpenseDetails(e){
    e.preventDefault();
    const reactData = {groupname: this.state.groupname,
                       expense: this.state.expense,
                       totalamount: this.state.totalamount
                      };
    console.log(reactData);

    const url = '//localhost:5000/api/addexpense';

    axios.post(url,
      reactData,
      {headers: { 'content-type':'application/x-www-form-urlencoded', 'accept':'application/json' }})
       .then(res => console.log('Data send'))
       .catch(err => console.log(err.data))

    this.setState({
      expense: '',
      totalamount: ''
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
                <p className="h4 mb-4">Add Expense to a Group</p>

                <input
                  type="text"
                  id="groupname"
                  value={this.state.groupname}
                  className="form-control mb-4"
                  placeholder="Group Name"
                  onChange={this.handleChange}/>

                <input
                  type="text"
                  id="expense"
                  value={this.state.expense}
                  className="form-control mb-4"
                  placeholder="Expense Heading"
                  onChange={this.handleChange}/>

                  <input
                    type="text"
                    id="totalamount"
                    value={this.state.totalamount}
                    className="form-control mb-4"
                    placeholder="Total Cost"
                    onChange={this.handleChange}/>

                <button onClick={this.handleSendExpenseDetails} className="btn btn-info btn-block my-4" type="create">Add Expense</button>
              </form>

          </div>
        </div>
      </div>
    );
  }
}

export default AddExpense;
