import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import NamePic from './components/NamePic'
import Contact from './components/Contact'
import Editor from './components/Editor'
import Jobs from './components/Jobs'
import Githubs from './components/Githubs'
import BioIntro from './components/BioIntro'

const apiURL = 'http://localhost:3000/api/v1/'
// as long as we keep users & currentUser at the end, we can add states
// to this list and it will automatically fetch them
const DEFAULT_STATE = {
  honors: [],
  interests: [],
  jobs: [],
  links: [],
  skills: [],
  githubs: [],
  users: [],
  currentUser: {
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = DEFAULT_STATE
  }

  componentDidMount() {
    let fetches = Object.keys(DEFAULT_STATE) // keys of the default state are the api pathnames
    fetches.pop(2) //so it doesn't try to fetch users & currentUser

    fetches.forEach( f => {
      fetch( apiURL + f )
      .then( res => res.json() )
      .then( json => this.setState({[f]: json}))
    })

    fetch( apiURL + 'users')
    .then( res => res.json() )
    .then( users => {
      this.setState({users})
      this.setState({currentUser: users[0]})
    })
    
  }

  render() {
    return (
      <div className="App ui grid">
        <div className="one column row">
          <div className="column">
            <Nav />
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <NamePic user={this.state.currentUser}/>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <BioIntro user={this.state.currentUser}/>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <Jobs jobs={this.state.jobs}/>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <Githubs githubs={this.state.githubs}/>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <Editor user={this.state.currentUser}/>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
            <Contact user={this.state.currentUser}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
