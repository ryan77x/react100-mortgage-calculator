import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  render() {
    return (
      <div className='container'>
        <form className="form-horizontal" action="/action_page.php">

          <div className="form-group">
              <label className="control-label col-sm-2" ></label>
            <div className="col-sm-10">
              <h2>Mortgage Calculator</h2>
              <hr/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="loanBalance">Loan Balance</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="loanBalance" placeholder="0" name="balance"/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" for="rate">Interest Rate (%)</label>
            <div className="col-sm-10">          
              <input type="number" className="form-control" id="rate" placeholder="0" name="rate"/>
            </div>
          </div>
          
          <div className="form-group">
            <label className="control-label col-sm-2" for="loanTerm">Loan Term (years)</label>
            <div className="col-sm-10">          
              <select className="form-control" id="loanTerm" placeholder="15" name="term">
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>

          <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" name="submit">Calculate</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}
