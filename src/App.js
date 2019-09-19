import React from 'react';
import { Box, Button, Grommet, Heading, Image, Stack, ResponsiveContext } from 'grommet';
import background from './background1.jpeg';
import { Menu } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: "#596AFF",
      "accent-1":"#2D3580",
      "accent-2":"#434FBF"
    },
    font: {
      family: 'Roboto',
      size: '14px',
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
			elevation="medium"
			style={{ zIndex: "1" }}
			{...props}
		/>
  );
}

        {/* </Stack> */}
{/* <Stack fill backgroundImage> */}
					{/* <Box
					fill
					overflow={{ vertical: "hidden", horizontal: "hidden" }}
				>
					<Image fill="cover" src={background} opacity="strong" />
				</Box> */}

function App() {
  return (
		<Grommet theme={theme} full>
			<ResponsiveContext.Consumer>
				{size => (
					<Box>
						<Box fill>
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
								) : <Button icon={<Menu />}/>}
							</AppBar>
							<Box align="center" margin={{ top: "medium" }} fill>
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
								<Box>
									<Heading level="3">About Me</Heading>
								</Box>
							</Box>
						</Box>
					</Box>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
  );
}

export default App;
