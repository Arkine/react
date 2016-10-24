import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';


export default class App extends React.Component {
  render() {
    return (
    	<div className={styles.wrapper}>
    		<h1>Environment: {__NODE_ENV__}</h1>
    		<div>
    			<i className="fa fa-star"></i>
    			<p>This is the app!</p>
    		</div>
    	</div>
    );
  }
}

// const App = React.createClass({
//   render: function() {
//     return (
//         <div className={styles.wrapper}>
//             <h1>Environment: {__NODE_ENV__}</h1>
//             <div>
//                 <i className="fa fa-star"></i>
//                 <p>This is the app!</p>
//             </div>
//         </div>
//     );
//   }
// });

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);