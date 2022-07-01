import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    baseURL: 'http://www.omdbapi.com/?',
    apikey: 'apikey=65ddf0d7',
    query: '&t=',
    movieTitle: '',
    searchURL: ''
  }

  handleChange =  (event) =>{
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({searchURL:this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle})
  }
  
  render(){
  return (
    <div className="App">
      <h1> Movie App</h1>


      <form onSubmit={this.handleSubmit}>
        <label htmlFor='movieTitle'>Title</label>

        <input type="text" id="movieTitle" 
        value={this.state.movieTitle}
        onChange={this.handleChange}
        />

        <input type="submit" /> 
      </form>
      <a href={this.state.searchURL}>{this.state.searchURL}</a>
    </div>
  );
}
}

export default App
