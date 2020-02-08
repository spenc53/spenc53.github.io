import React, { Component } from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';

class ProjectPage extends Component {

    render() {
        return (
            <Box align="center">
                <Box align = "center" width="large" margin={{bottom:"medium"}}>
                    <Heading level="2" margin={{bottom: "small"}}>PyStudio</Heading>
                    <Paragraph fill margin={{top: "none", bottom:"small"}}>
                        Pystudio is a RStudio like development environment for Python. This was made because of my background in statistics and seeing statisticians want to learn and use python but, wanting the comfort of using RStudio. Pystudio is built using Electron and React.
                    </Paragraph>
                    <Link style={{color:"white"}} onClick={() => window.open("https://github.com/spenc53/pystudio_electron", "_blank")}>See Pystudio on Github</Link>
                </Box>

                <Box align = "center" width="large" margin={{bottom:"medium"}}>
                    <Heading level="2" margin={{bottom: "small"}}>Jupyter Kerenel Client</Heading>
                    <Paragraph fill margin={{top: "none", bottom:"small"}}>
                        Jupyter Kerenel Client is a node package that is used to connect to an ipython kernel. This is currently being developed for use with Pystudio to connect to a kernel running on the local Machine. It is built on top of the zmq library for node.
                    </Paragraph>
                    <Link style={{color:"white"}} onClick={() => window.open("https://github.com/spenc53/JupyterKernelClient", "_blank")}>See Jupyter Kerenel Client on Github</Link>
                    <Link style={{color:"white"}} onClick={() => window.open("https://www.npmjs.com/package/zmq_jupyter", "_blank")}>See Jupyter Kerenel Client on NPM</Link>
                </Box>

                <Box align = "center" width="large" margin={{bottom:"medium"}}>
                    <Heading level="2" margin={{bottom: "small"}}>Dots / Pop 'em!</Heading>
                    <Paragraph fill margin={{top: "none", bottom:"small"}}>
                        Dots / Pop 'em is a simple game app where the user taps on bubbles that appear on their screen. This was developed using the flutter framework.
                    </Paragraph>
                    <Link style={{color:"white"}} onClick={() => window.open("https://bitbucket.org/spenc53/dots/src/master/", "_blank")}>See Dots on BitBucket</Link>
                </Box>

                <Box align = "center" width="large" margin={{bottom:"medium"}}>
                    <Heading level="2" margin={{bottom: "small"}}>On The Menu</Heading>
                    <Paragraph fill margin={{top: "none", bottom:"small"}}>
                        On the Menu is a review system built for leaving reviews for menu items. The problem that I currently face when going to a new restuarant or going to a restaurant that I love but, want to try something new, is know what is good. On the Menu aims to solve that by making it possible to leave reviews on specific menu items. On the Menu is currently being developed with a Java backend using Spring boot and hibernate. The frontend is being developed as an SPA using the react framework.
                    </Paragraph>
                </Box>


                <Box align = "center" width="large" margin={{bottom:"medium"}}>
                    <Heading level="2" margin={{bottom: "small"}}>What's Up!</Heading>
                    <Paragraph fill margin={{top: "none", bottom:"small"}}>
                        What's Up is a social app that aims to help people find events in any given area. The problem with current event based apps is that they are hard to use and, are hard to see what's currnetly happening. What's Up aims to solve this by showing a map of event currently happening in an area with an ability to "Up" an event to show how many people are at an event and how fun it is. This is currently under development with a Java backend built on Spring and mobile apps developed with the Flutter Framework.
                    </Paragraph>
                </Box>
            </Box>
        );
    }
}

export default ProjectPage;
