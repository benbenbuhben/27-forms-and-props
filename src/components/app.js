import React from 'react';

import SubredditSearch from './reddit/search.js';
import RedditResults from './reddit/results.js';
import {fetchData} from '../lib/utils.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subredditList: {},
      postList:[],
      noError: true,
      loading:null,
    };
    this.handleSearch = this.handleSearch.bind(this);
   
  }

  async handleSearch(input) {
    let url = `https://www.reddit.com/r/${input.subreddit}.json?limit=${input.numResults}`;
    const redditData = await fetchData(url);
    if(redditData === 'error'){
      this.setState({noError: false});
    }
    else{
    let redditResults = redditData;
    let children = redditResults.data.children;
    let subredditList = children.filter(child => child.data.stickied !== true);
    this.setState({noError: true});
    this.setState( Object.assign(...this.state,{subredditList}) );
    }
  }

  render() {

    return (
      <main>
        <SubredditSearch noError={this.state.noError} handleSearch={this.handleSearch}/>
        <RedditResults results={this.state.subredditList}/>
      </main>
    );
  }
  
}

export default App;