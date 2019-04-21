import React, { Component } from 'react';
import axios from 'axios';

class GetDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      groupname: '',
      outputstatus: 0,
      output: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSendExpenseDetails = this.handleSendExpenseDetails.bind(this);
    this.handleApproveExpense = this.handleApproveExpense.bind(this);
  }

  handleChange(e) {
    var text = e.target.id;
    this.setState({[text]: e.target.value});
  }

  handleSendExpenseDetails(e){
    e.preventDefault();
    const reactData = {groupname: this.state.groupname};
    console.log(reactData);

    const url = '//localhost:5000/api/getdetails';

    axios.post(url,
      reactData,
      {headers: { 'content-type':'application/x-www-form-urlencoded', 'accept':'application/json' }})
       .then(res => this.setState({
            outputstatus: 1,
            output: res.data
       }))
       .catch(err => console.log(err.data))
  }

  handleApproveExpense(e){
    e.preventDefault();
    const reactData = {groupid: this.state.output.groupid};
    console.log(reactData);

    const url = '//localhost:5000/api/approveexpense';

    axios.post(url,
      reactData,
      {headers: { 'content-type':'application/x-www-form-urlencoded', 'accept':'application/json' }})
       .then(res => console.log("Approved"))
       .catch(err => console.log(err.data))

    this.setState({
      groupname: '',
      outputstatus: 0,
      output: {}
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
                <p className="h4 mb-4">Get Details by Group Name</p>

                <input
                  type="text"
                  id="groupname"
                  value={this.state.groupname}
                  className="form-control mb-4"
                  placeholder="Group Name"
                  onChange={this.handleChange}/>

                <button onClick={this.handleSendExpenseDetails} className="btn btn-info btn-block my-4" type="create">Check Group Details</button>
              </form>

              { this.state.outputstatus===1 ? (
                <div>
                  <p><strong>Group Name:</strong> {this.state.output.groupname} (id: {this.state.output.groupid})</p>
                  <p><strong>Group Members:</strong></p>

                  {this.state.output.members.map((i,key) => {
                    return(
                      <p key={key}>{i}, <i>Due Amount: Rs. {(this.state.output.totalamount)/this.state.output.members.length}</i></p>
                    )
                  })}

                  <p><strong>Group Expenses:</strong></p>

                  {this.state.output.expenses.map((i,key) => {
                    return(
                      <p key={key}>{i.amount}/- &nbsp; {i.expensename}</p>
                    )
                  })}

                  <p><strong>Total Group Expense:</strong> Rs. {this.state.output.totalamount}</p>

                  <button onClick={this.handleApproveExpense} className="btn btn-success" type="button">Approve Expenses and Delete Group</button>
                </div>
              ): ""}

          </div>
        </div>
      </div>
    );
  }
}

export default GetDetails;
