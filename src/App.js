import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bulma';

const baseURL = process.env.REACT_APP_OMDAPI_URL;
const baseURLKEY = process.env.REACT_APP_OMDAPI_KEY;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    movies: []
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // example call API of omdbapi: curl 'http://www.omdbapi.com/?t=Batman&apikey=434202b0'
    // return: {"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.","Language":"English, French, Spanish","Country":"USA, UK","Awards":"Won 1 Oscar. Another 8 wins & 26 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.6","imdbVotes":"311,189","imdbID":"tt0096895","Type":"movie","DVD":"25 Mar 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}
    event.preventDefault();
    this.componentDidMount(this.state.value);
  }

  componentDidMount(title) {
    var API = baseURL+title+baseURLKEY;
    console.log(API);
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ movies: data })
    })
    .catch(console.log)
  }
  
  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <input type="text" value={this.state.value} className="input" onChange={this.handleChange} placeholder="Search" /> 
              <input className="button is-info" type="submit" value="Submit" />
            </p>
          </header>
        </form>
      </div>
    );
  }
}

export default App;
