import React from 'react';

export default class RedditResults extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    if(!(Object.keys(this.props.results).length === 0)){
      return (
        <div className="redditResults">
        
          <h2>Results</h2>
          {
        
            this.props.results.map( (post, i) =>
              <div key={i}>
                <li>
                  <a href={post.data.url}>
                    <h1>
                      {post.data.title}
                    </h1>
                    <p>
                    Upvotes: {post.data.ups}
                    </p>
                  </a>  
                </li>  
              </div>
            )
          }
        </div>
      );
    }
    else return '';

  }
}

