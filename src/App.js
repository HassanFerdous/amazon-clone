import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home-page/Home';
import Checkout from './pages/checkout/Checkout';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/checkout" component={Checkout} />
			</Switch>
		</div>
	);
}

export default App;
