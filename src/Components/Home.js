import React from 'react';
import { connect } from 'react-redux';
import { YoutubePlayer } from './YoutubePlayer';
import { VideoList } from './VideoList';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    InputGroupAddon,
    InputGroup,
    Button,
    Container,
    Col,
    Row,
 } from 'reactstrap';
 import { videoActions } from '../Actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e){
        if (e.key === 'Enter') {
            this.props.dispatch(videoActions.search(e.target.value, false));
          }
    }

    render() {
 
        return (
            <div>
                 <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/">yaTube</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={true} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <InputGroup>
                                    <Input placeholder="Search" onKeyPress={(e) => this.handleKeyPress(e)}/>
                                    <InputGroupAddon addonType="append"><Button color="secondary"><i className="fa fa-search"></i></Button></InputGroupAddon>
                                </InputGroup>
                                </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/morganster">Github</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                <Container style={ {backgroundColor: '#333'}} fluid={true}>
                    <Row>
                        <Col xs="12" sm="12" >
                            <YoutubePlayer />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="12">
                            <VideoList />
                        </Col>
                    </Row>
                </Container>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { videos } = state;
    return {
        videos
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };