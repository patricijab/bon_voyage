import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Header from './components/Header'
import AppRouter from './components/AppRouter'

const Content = () => (
	<div className="content">content...</div>
);

function App() {
	return (
		<div className="App">
			<Header/>
			<AppRouter/>
			<Menu/>
		</div>
	);
}

export default App;
