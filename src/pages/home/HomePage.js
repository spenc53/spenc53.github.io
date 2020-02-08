import React, { Component } from 'react';
import { Box, Heading, Image, ResponsiveContext, Paragraph, Tab } from 'grommet';
import byuLogo from '../../byu-logo.png';

class HomePage extends Component {

    render() {
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Box style={{width: '100%'}} margin={{ horizontal: "small" }} align="center" overflow={{vertical: "scroll"}}>
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
                            <Heading margin={{ top: "large", bottom: "none" }} level="2">About Me</Heading>
                            <Paragraph fill>
                                <Tab/>
                                Hi, I'm Spencer Seeger! I'm a software engineer and I love to code, learn, and build things! If I think of an idea I think would be fun to try, I sit down and try it out. Some of my hobbies and interests are: gaming (my current favorite game is Beat Saber), cooking, and coding.
                            </Paragraph>
                            <Paragraph fill>
                                <Tab />Currently, I work at Sam's Club Technology helping develop a chatbot platform. As part of this project, I have helped develop a platform which Sam's Club uses to in both the clubs and on their online site. Online, the chat bot is used to help resolve members questions. The chat bot can asnwer simple questions or it can help a member start the return process of an item. Another use for this chat bot platform is "Ask Sam". "Ask Sam" is a Siri-like digital assistant for associates in the club. Some things Ask Sam is able to do is help associates know who is working next, how to prepare food, and check product avaiablity.
                            </Paragraph>
                        </Box>
                        <Box align='center'>
                            <Heading margin={{ top: "large", bottom: "none" }} level="2">Education</Heading>
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
            <Box direction="row" align="center" justify="center" width='large'>
                <Box justify="center" margin={{right:'large'}}>
                    <Heading margin={{ top: "small", bottom: "none" }} level="2">Brigham Young Univeristy</Heading>
                    <Heading margin="none" level="5">Bachelor's in Computer Science and Statistical Science</Heading>
                    <Heading margin="none" level="5">Minor in Mathmatics</Heading>
                    <Heading margin="none" level="5">2014-2018</Heading>
                </Box>
                <Box justify="center" width="xsmall" height="xsmall" round="full" margin={{left:'large'}}>
                    <Image fit="contain" src={byuLogo} />
                </Box>
            </Box>
        );
    }
}

export default HomePage;
