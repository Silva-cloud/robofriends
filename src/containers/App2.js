import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App2.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../ErrorBoundry'


const state = {

	
}



class App2 extends Component{

	constructor(){
		super()
		this.state ={

			// robots:robots,
			robots:[],
			searchfield:''

		}
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{

			return response.json();
		})
		.then(users=>{

			this.setState({robots: users});

		});
		
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		console.log(event.target.value);
		// const filterRobots= this.state.robots.filter(robots =>{

		// 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());



		// });

		// console.log(filterRobots);
	}




	render(){

		const filterRobots= this.state.robots.filter(robots =>{

			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

		});

		if (this.state.robots.length ===0)
			return <h1>Loading</h1>
		else
			return (

				<div className='tc'>
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots= {filterRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>





		);



	}
}

export default App2;