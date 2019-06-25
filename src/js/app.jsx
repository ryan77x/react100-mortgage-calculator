import React from 'react';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    this.calculatePayment(this.state.balance, this.state.rate, this.state.term);
    event.preventDefault();
  }
  calculatePayment(balance, rate, term){
    let output = 'Loan balance or interest rate must be greater than 0';
    if (rate > 0 && balance > 0){
      let numberOfPayments = term * 12;
      let monthlyRate = (rate/100) / 12;
      let temp = Math.pow((1+monthlyRate), numberOfPayments);
      let monthlyPayment = balance * ((monthlyRate * temp)/(temp - 1));
      output = '$' + Math.round(monthlyPayment * 100)/100 + ' is your payment';
    }

    document.getElementById("output").innerHTML = output;
  }

  render() {
    return (
      <div className='container'>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>

          <div className="form-group">
              <label className="control-label col-sm-2" ></label>
            <div className="col-sm-10">
              <h3>Mortgage Calculator</h3>
              <hr/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="balance">Loan Balance</label>
            <div className="col-sm-10">
              <input className="form-control" id="balance" 
                name="balance"
                type="number"        
                value={this.state.balance} 
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="rate">Interest Rate (%)</label>
            <div className="col-sm-10">          
              <input className="form-control" id="rate" 
                name="rate"
                type="number"        
                value={this.state.rate} 
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="control-label col-sm-2" for="term">Loan Term (years)</label>
            <div className="col-sm-10">          
              <select className="form-control" id="term"
                name="term"      
                value={this.state.term} 
                onChange={this.handleInputChange}>
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>

          <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary" name="submit">Calculate</button>
            </div>
          </div>

        </form>

        <div className="row">
          <div className="col-sm-6">
          </div>
          <div id="output" name="output" className="col-sm-6">
          </div>
        </div>

      </div>
    );
  }
}
