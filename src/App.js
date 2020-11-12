import React, { Component } from "react";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Service from "./pages/Service";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import Footer from "./components/Footer";
import Application from "./pages/Application";
import Backdrop from "./components/Backdrop/Backdrop";
import SignIn from './pages/SignIn';

function initizeAnalytics() {
	ReactGa.initialize("UA-169146534-1");
	//to report page view
	ReactGa.pageview("/");
}
class App extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState(prevState => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		let backdrop;
		let sideDrawer;

		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
			sideDrawer = <SideDrawer />;
		}
		initizeAnalytics();
		return (
			<div style={{ height: "100%" }}>
				<Helmet>
					<meta charSet="UFT-8" />
					<title>Queen's Web</title>
					<meta
						name="description"
						content="Queen’s Web provide professional opportunities for women who are in tech at different points of their career journey. 
						We use a team software engineers and UX/UI designers to create web applications and mobile applications."
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#000000" />
				</Helmet>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backdrop}
				<main>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/team" component={Team} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/service" component={Service} />
							<Route exact path="/policy" component={Policy} />
							<Route exact path="/terms" component={Terms} />
							<Route exact path="/application" component={Application} />
							<Route exact path="/signin" component={SignIn} />
						</Switch>
					</Router>
					<Footer />
				</main>
			</div>
		);
	}
}
export default App;
