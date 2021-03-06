import React, {Component} from 'react';
import logo from '../../assets/Asset_3_logo.svg';
import list from '../../assets/Asset_2_list.svg';
import main from '../../assets/Asset_4_map.svg';
import details from '../../assets/Asset_1_setting.svg';
import './App.css';
import {Navbar, Button} from 'react-bootstrap';
import axios from 'axios';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            statusSort: 'all',
        }
    }

    componentDidMount() {
        return axios.get(`http://34.204.33.48:3002/api/reports/`)
            .then(result => {
                this.setState({ data: result.data }, () => {
                    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } } = { coords: {} }) => {
                        this.setState({ location: { lat: latitude, lng: longitude } }, () => console.log('SET'));
                    });
                })
            });
    }

    getAllReports = () => {
        return axios.get(`http://34.204.33.48:3002/api/reports/`)
            .then((result) => {
                console.log('DATA??', result)
                return this.setState({
                    data: result.data.sort((prev, curr) => curr.createdAt - prev.createdAt)
                });
            })
            .catch(err => console.log('failed to get reports!', err));
    };

    updateReportStatus = (entryId, nextStatus) => {
        return axios.put(`http://34.204.33.48:3002/api/reports/${entryId}`, {status: nextStatus})
            .then(() => this.getAllReports())
    };

    updateStatusSort = (status) => {
        this.setState({statusSort: status});
    };

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="navbar-band" href="/main">
                                <img src={logo} alt="logo"/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullRight className="icon">
                            showing:
                            {'  '}
                            {(this.state.statusSort !== 'all') ?
                                <Button bsStyle="link" onClick={this.updateStatusSort.bind(this, 'all')}>all</Button>
                                :
                                <Button bsStyle="link" disabled>
                                    <b>
                                        <div className="selectedLink">all</div>
                                    </b>
                                </Button>
                            }
                            {'|'}
                            {(this.state.statusSort !== 'pending') ?
                                <Button bsStyle="link"
                                        onClick={this.updateStatusSort.bind(this, 'pending')}>pending</Button>
                                :
                                <Button bsStyle="link" disabled>
                                    <b>
                                        <div className="selectedLink">
                                            pending
                                        </div>
                                    </b></Button>
                            }
                            {'|'}
                            {(this.state.statusSort !== 'dispatched') ?
                                <Button bsStyle="link"
                                        onClick={this.updateStatusSort.bind(this, 'dispatched')}>dispatched</Button>
                                :
                                <Button bsStyle="link"
                                        disabled>
                                    <b>
                                        <div className="selectedLink">
                                            dispatched
                                        </div>
                                    </b>
                                </Button>
                            }
                            {'|'}
                            {(this.state.statusSort !== 'resolved') ?
                                <Button bsStyle="link"
                                        onClick={(this.updateStatusSort.bind(this, 'resolved'))}>resolved</Button>
                                :
                                <Button bsStyle="link"
                                        disabled>
                                    <b>
                                        <div className="selectedLink">
                                            resolved
                                        </div>
                                    </b>
                                </Button>
                            }
                            {'     '}
                            <a className="icon" href="/list">
                                <img src={list} alt="list"/>
                            </a>
                            <a className="icon" href="/main">
                                <img src={main} alt="main"/>
                            </a>
                            <a className="icon" href="/list">
                                <img src={details} alt="details"/>
                            </a>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                < div >
                    {this.props.children && React.cloneElement(this.props.children, {
                        updateReportStatus: this.updateReportStatus,
                        statusSort: this.state.statusSort,
                        data: this.state.data,
                        addReport: this.getAllReports,
                        location: this.state.location
                    })
                    }
                </div>
            </div>
        );
    }
}
