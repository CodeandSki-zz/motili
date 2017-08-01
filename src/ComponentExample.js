import React from 'react';
import './App.css';


 function ComponentExample(props) {


	return (
    	<div className="col-sm-12">
	    			<h1>{props.header}</h1>
                    <div className="tickerBoxFrame">
                        <h3>{props.list}</h3>
                    </div>
	    		</div>
            );
	   }


export default ComponentExample;


