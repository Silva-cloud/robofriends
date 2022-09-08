import React from 'react';
import './Hello2.css';

const Hello2 = (props) =>{

	return(
			<div className="f2 tr">
				<h1>Hello World</h1>
				<p>{props.greeting}</p>
			</div>

			);

}
export default Hello2;