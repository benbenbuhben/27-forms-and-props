import React from 'react';

import './search.scss';

export default class SubredditSearch extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      numResults: 0,
      loading:null,
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state);
  }

 

  render() {
    let input1, input2, noResults;
    if(this.props.noError === true){
      input1 = <input name="subreddit" placeholder="Subreddit Name..." value={this.state.subreddit} onChange={e => this.handleChange(e)}/>;
      input2 = <input name="numResults" type="number" min="0" max="100" value={this.state.numResults} onChange={e => this.handleChange(e)}/>;
      noResults = '';
    }
    else{
      input1 = <input className="error" name="subreddit" placeholder="Subreddit Name..." value={this.state.subreddit} onChange={e => this.handleChange(e)}/>;
      input2 = <input className="error" name="numResults" type="number" min="0" max="100" value={this.state.numResults} onChange={e => this.handleChange(e)}/>;
      noResults = <p className="results">Not a valid subreddit. Try again!</p>;
    }

    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSearch}>

          <label htmlFor="subreddit">Subreddit Name: </label>
          {input1}

          <br />

          <label htmlFor="numResults"># of Results: </label>
          {input2}
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Search</button>
        </form>
        {noResults}
  
      </React.Fragment>
    );
  }
}

