import React, { Component } from 'react';
import { Box, Button, Grommet, Heading, Image, ResponsiveContext, Layer, Collapsible, Paragraph, Tab } from 'grommet';
import { Menu, FormClose, DocumentPdf, Projects, Linkedin } from 'grommet-icons';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';

import resume from './Spencer_Seeger_Resume.pdf';

const theme = {
	global: {
		colors: {
			brand: "#596AFF",
			"accent-1": "#2D3580",
			"accent-2": "#434FBF"
		},
		font: {
			family: 'Roboto',
			size: '16px',
			height: '20px',
		},
	},
};

const AppBar = (props) => {
	return (
		<Box
			tag="header"
			direction="row"
			align="center"
			justify="between"
			background="brand"
			pad={{ left: "medium", right: "small", vertical: "small" }}
			style={{ zIndex: "1" }}
			{...props}
		/>
	);
}

class App extends Component {
	constructor() {
		super();

		this.state = {
			showSidebar: false,
			showResume: false
		}

		this.SideNav = this.SideNav.bind(this);

	}

	render() {
		return (
			<Grommet theme={theme} style={{height:"100%"}}>
				<Router>
					<ResponsiveContext.Consumer>
						{size => (
							<Box direction='row' fill background={{ dark: true, color: "accent-1" }} overflow={{ horizontal: "hidden" }}>
								<Box flex>
									<AppBar>
										<Heading margin="none" level="2">
											Spencer Seeger
									</Heading>
										<Button icon={<Menu />} onClick={() => this.setState({ showSidebar: !this.state.showSidebar })} />
									</AppBar>
									<Box fill>
										<Switch>
											<Route exact path="/" component={HomePage} />
										</Switch>
									</Box>
								</Box>
								<this.SideNav size={size} />
							</Box>
						)}
					</ResponsiveContext.Consumer>
				</Router>
			</Grommet>
		);
	}

	SideNav(props) {
		if (props.size !== "small") {
			return (
				<Collapsible direction="horizontal" open={this.state.showSidebar}>
					<Box
						flex
						width="medium"
						background='accent-2'
					>
						<Box margin={{ horizontal: "small" }}>
							<Box margin="small" direction="row" align="center">
								<Projects size="medium" />
								<Heading margin="small" level="3">Projects</Heading>
							</Box>
							<Box margin="small" direction="row" align="center" onClick={() => window.open(resume, "_blank")}>
								<DocumentPdf size="medium" />
								<Heading margin="small" level="3">Resume</Heading>
							</Box>
							<Box margin="small" direction="row" align="center" onClick={() => window.open("https://www.linkedin.com/in/spencer-seeger-03a12a133/", "_blank")}>
								<Linkedin size="medium" />
								<Heading margin="small" level="3">Resume</Heading>
							</Box>
						</Box>
					</Box>
				</Collapsible>
			);
		}

		if (!this.state.showSidebar) {
			return null;
		}

		return (
			<Layer>
				<Box
					background="accent-2"
					tag="header"
					justify="end"
					align="center"
					direction="row"
				>
					<Button
						icon={<FormClose
							size="large" />}
						onClick={() => this.setState({ showSidebar: false })} />
				</Box>
				<Box
					fill
					background='accent-2'
				>
					<Box margin={{ horizontal: "small" }}>
						<Box margin="small" direction="row" align="center">
							<Projects size="medium" />
							<Heading margin="small" level="2">Projects</Heading>
						</Box>
						<Box margin="small" direction="row" align="center" onClick={() => window.open(resume, "_blank")}>
							<DocumentPdf size="medium" />
							<Heading margin="small" level="2">Resume</Heading>
						</Box>
						<Box margin="small" direction="row" align="center" onClick={() => window.open("https://www.linkedin.com/in/spencer-seeger-03a12a133/", "_blank")}>
							<Linkedin size="medium" />
							<Heading margin="small" level="2">Resume</Heading>
						</Box>
					</Box>
				</Box>
			</Layer>
		)
	}
}

export default App;
