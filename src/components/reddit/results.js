import React from 'react';

export default class RedditResults extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="redditResults">
        <h2>{this.props.subreddit.name}</h2>
      </div>
    );
  }
}

