import React from 'react';
import { connect } from 'react-redux';
import { YoutubePlayer } from './YoutubePlayer';
import { VideoList } from './VideoList';
import {
    Navbar,
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
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }
    
    componentDidMount() {
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.nextVid = this.nextVid.bind(this);
    }
    componentDidUpdate() {
       if(!this.props.videos.requesting && this.props.videos.nextPlayRequesting){
            this.props.dispatch(videoActions.select(this.props.videos.videoList.items[0]));
        }
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.dispatch(videoActions.search(this.state.search, false));
          }
    }

    handleClick() {
        this.props.dispatch(videoActions.search(this.state.search, false));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    nextVid(event) {
                this.props.dispatch(videoActions.search(this.props.videos.videoList.items[0].id.videoId, true,true));
    }

    render() {
        const { search } = this.state;
        return (
            <div>
                 <Navbar color="faded" light expand="sm">
                        <NavbarBrand href="/">yaTube</NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <InputGroup>
                                    <Input placeholder="Search" onKeyPress={(e) => this.handleKeyPress(e)} name="search" value={search} onChange={this.handleChange} />
                                    <InputGroupAddon addonType="append"><Button onClick={this.handleClick} color="secondary"><i className="fa fa-search"></i></Button></InputGroupAddon>
                                </InputGroup>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/morganster">Github</NavLink>
                                </NavItem>
                            </Nav>
                </Navbar>
                <Container style={ {backgroundColor: '#333'}} fluid={true}>
                   { !!this.props.videos.videoSelected.id && <Row>
                        <Col xs="12" sm="12" >
                            <YoutubePlayer onEnd={this.nextVid} />
                        </Col>
                    </Row>}
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