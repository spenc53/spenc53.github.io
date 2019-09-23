import React, { Component } from 'react';
import { Box, Button, Grommet, Heading, Image, ResponsiveContext, Layer, Collapsible, Paragraph, Tab } from 'grommet';
import byuLogo from '../../byu-logo.png';

class HomePage extends Component {

    render() {
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill margin={{ horizontal: "small" }} align="center">
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
                        <Box width="large" align="center">
                            <Heading margin={{ top: "large", bottom: "none" }} level="1">About Me</Heading>
                            <Paragraph fill>
                                <Tab />I am mostly a backend developer but, I have started to dabble in front end stuff. My interests lie in lots of technology stuff. I love reading and learning about new frameworks, languages, and pretty much anything programming related. In my free time, I like hitting up the gym, playing video games with my wife, and working on my side projects. I have started quite a few and, you should check them out (or just read up on them as some of them are kinda secret haha)!
										</Paragraph>
                            <Paragraph fill>
                                <Tab />As far as programming skill goes, my strength lies in java (including the springboot framework and hibernate) and react. I am also have a decent amount of skill in SQL, android dev, the flutter framework, and python. I have used all of these extensivly within my profession and my side projects. However, these are not the only languages I know, I have expeirence with R, Haskell, exlier,
										</Paragraph>
                        </Box>
                        <Box align='center'>
                            <Heading margin={{ top: "large", bottom: "none" }} level="1">Education</Heading>
                            <this.EducationSection size={size}></this.EducationSection>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
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
}

export default HomePage;
