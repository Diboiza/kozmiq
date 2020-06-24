import React, {Component} from 'react';
import Nav from './Nav';
import './App.css';
import CardList from './CardList';
import Scroll from './Scroll';
import Footer from './Footer';

class App extends Component {
      constructor(props){
        super(props)
        this.state ={
          mixes: []
        }
      }

      componentDidMount(){
        fetch("https://api-v2.hearthis.at/kozmiqdj/?type=tracks&page=1&count=50")
        .then(response => response.json())
        .then(mix => this.setState({mixes: mix})
        )}


    render(){
      return (
    
        <div className="tc">
         <Nav />
         <p className="tc white-70 hover-white">
           Yoh, welcome to the Soulful Allergy Mixtapes By KozmiqDJ.<br/>
           This is where we keep it deep, we keep it sould and vocals coming.<br/>
           Stream them or Download Them. Enjoy!!
        </p>
         <Scroll>
           <CardList mixes={this.state.mixes}/>
         </Scroll>
         <Footer/>
        </div>
      );
    }

}

export default App;
