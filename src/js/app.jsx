import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  render() {
    return (
      <div className='container'>
        <h2>Mortgage Calculator</h2>
        <form class="form-horizontal" action="/action_page.php">

          <div class="form-group">
            <label class="control-label col-sm-2" for="loanBalance">Loan Balance</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="loanBalance" placeholder="0" name="balance"/>
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="rate">Interest Rate (%)</label>
            <div class="col-sm-10">          
              <input type="number" class="form-control" id="rate" placeholder="0" name="rate"/>
            </div>
          </div>
          
          <div class="form-group">
            <label class="control-label col-sm-2" for="loanTerm">Loan Term (years)</label>
            <div class="col-sm-10">          
              <select class="form-control" id="loanTerm" placeholder="15" name="term">
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>

          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default" name="submit">Calculate</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}
