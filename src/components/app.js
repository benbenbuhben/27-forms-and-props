import React from 'react';

import SubredditSearch from './reddit/search.js';
import RedditResults from './reddit/results.js';
import {fetchData} from '../lib/utils.js';

//const redditAPI = `http://reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddit: {},
      postList:[],
      loading:null,
    };
    this.handleSearch = this.handleSearch.bind(this);
    //this.loadPokemonDetails = this.loadPokemonDetails.bind(this);
  }

  // async componentDidMount() {
  //   const data = await this.loadPokemonList();
  //   this.setState( Object.assign(...this.state,data) );
  //   console.log('__STATE__', this.state);
  // }

  // async loadPokemonList() {
  //   const pokeData = await fetchData(pokemonAPI);
  //   let loading = null;
  //   let pokemonList = pokeData.results;
  //   return {pokemonList, loading};
  // }

  // async loadPokemonDetails(e) {
  //   let element = e.target;
  //   let url = e.target.value;
  //   const pokeData = await fetchData(url);
  //   let loading = null;
  //   let pokemon = pokeData;
  //   this.setState( Object.assign(...this.state,{pokemon}) );
  // }
  
  handleSearch(e) {
    e.preventDefault();
    console.log(this);
    //let search = e.target.value();
    console.log(e);
  }

  render() {
    return (
      <main>
        <SubredditSearch handleSearch={this.handleSearch}/>
        {/* <RedditResults pokemon={this.state.pokemon}/> */}
      </main>
    );
  }
  
}

export default App;