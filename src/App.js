import React, { Component } from 'react';
import { Box, Button, Grommet, Heading, Image, ResponsiveContext, Layer } from 'grommet';
import { Menu, FormClose, DocumentPdf, Projects, Linkedin } from 'grommet-icons';
import byuLogo from './byu-logo.png';
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
			showSidebar: false
		}

		this.SideNav = this.SideNav.bind(this);

	}

	render() {
		return (
			<Grommet theme={theme} full>
				<ResponsiveContext.Consumer>
					{size => (
						<Box fill background={{ dark: true, color: "accent-1" }} overflow={{ horizontal: "hidden" }}>
							<Box full={false} flex>
								<AppBar>
									<Heading margin="none" level="2">
										Spencer Seeger
								</Heading>
									{size !== "small" ? (
										<Box direction="row">
											<Heading
												margin={{
													horizontal: "small",
													vertical: "none"
												}}
												level="4"
											>
												Projects
										</Heading>
											<Heading
												margin={{
													horizontal: "small",
													vertical: "none"
												}}
												level="4"
											>
												Resume
										</Heading>
										</Box>
									) : <Button icon={<Menu />} onClick={() => this.setState({showSidebar: true})}/>}
								</AppBar>
								<Box margin={{ horizontal: "small" }} align="center">
									<Box align="center">
										<Heading level="1">Spencer Seeger</Heading>
										<Box align="center" width="medium">
										</Box>
									</Box>
									<Box
										round
										background="accent-2"
										width="small"
										height="small"
										align="center"
										justify="center"
									>
										<Box
											round="full"
											width="xsmall"
											height="xsmall"
											background="accent-1"
										></Box>
									</Box>
									<Box align='center' flex>
										<Heading margin={{ top: "large", bottom: "none" }} level="1">Education</Heading>
										<this.EducationSection size={size}></this.EducationSection>
									</Box>
								</Box>
							</Box>
							<this.SideNav size={size} />
						</Box>
					)}
				</ResponsiveContext.Consumer>
			</Grommet>
		);
	}

	EducationSection(props) {
		if (props.size === "small") {
			return (<Box align="center">
				<Box align="center" width="large">
					<Heading margin={{ top: "small", bottom: "none" }} level="2">Brigham Young Univeristy</Heading>
					<Heading margin="none" level="5">Bachelor's in Computer Science</Heading>
					<Heading margin="none" level="5">and Statistical Science</Heading>
					<Heading margin="none" level="5">Minor in Mathmatics</Heading>
					<Heading margin="none" level="5">2014-2018</Heading>
				</Box>
			</Box>);
		}

		return (
			<Box direction="row" align="center" justify="center">
				<Box justify="center" width="large">
					<Heading margin={{ top: "small", bottom: "none" }} level="2">Brigham Young Univeristy</Heading>
					<Heading margin="none" level="5">Bachelor's in Computer Science and Statistical Science</Heading>
					<Heading margin="none" level="5">Minor in Mathmatics</Heading>
					<Heading margin="none" level="5">2014-2018</Heading>
				</Box>
				<Box justify="center" width="xsmall" height="xsmall" round="full">
					<Image fit="contain" src={byuLogo} />
				</Box>
			</Box>
		);
	}

	SideNav(props) {

		if (!this.state.showSidebar) {
			return null;
		}

		if (props.size !== "small" || !this.state.showSidebar) {
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
						size="large"/>}
						onClick={() => this.setState({showSidebar: false})} />
				</Box>
				<Box
					fill 
					background='accent-2'
				>
					<Box margin={{horizontal:"small"}}>
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
