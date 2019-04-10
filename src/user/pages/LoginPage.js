import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/LoginStyle.css';
import { userActions } from '../actions/user.actions';
import { history } from '../../_helpers';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            // dispatch(userActions.login(username, password));
            localStorage.setItem('loginName', JSON.stringify("user@example.com"));
            localStorage.setItem('user', JSON.stringify("user@example.com"));
            history.push('/');
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="logincontainer">
                <div id="loginbox" style={{marginTop:'30px'}} className="mainbox">
                    <div className="wd-12" style={{padding:'0px'}}>
                        <div className="wd-8" style={{paddingLeft:'0px'}}>
                            <div className="text-content-box">
                                <h3>Demo</h3>
                            </div>
                        </div>
                        <div className="wd-4" style={{paddingRight:'4px'}}>
                            <div className="form-content">                     
                                <h3>Login</h3>
                                <form name="form" onSubmit={this.handleSubmit} style={{width:'100%'}}>
                                    <div className="input-block">
                                        <div className={"input-group" + (submitted && !username ? ' has-error' : '')}>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                                        </div>
                                        {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className="input-block">
                                        <div className={"input-group" + (submitted && !password ? ' has-error' : '')}>
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                                        </div>
                                        {submitted && !password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="input-block ptn clearfix ">
                                        <div className="input-group wd-12">
                                            <div className="checkbox pull-left">
                                                <label><input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me</label>
                                            </div>
                                            <button className="btn btn-primary pull-right">Login</button>
                                            {/* {loggingIn &&
                                                <img className="pull-right" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            } */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="wd-12 clearfix addblock-content">
                            <div className="wd-3">
                                <ul className="demo1" style={{paddingLeft:'0px'}}>
                                <li className="news-item">
                                    <div className="wd-6">USD/AUD</div>
                                    <div className="wd-6">0.7224</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">USD/AMD</div>
                                    <div className="wd-6">1.15850</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">USD/EUR</div>
                                    <div className="wd-6">1.1574</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">USD/GBP</div>
                                    <div className="wd-6">1.3038</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">USD/JPY</div>
                                    <div className="wd-6">0.0088</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">USD/CAD</div>
                                    <div className="wd-6">1.27955</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">USD/NZD</div>
                                    <div className="wd-6">0.66160</div>
                                </li>
                                </ul>
                            </div>
                            <div className="wd-6" style={{padding:'0px',borderRight:'2px solid #A8B331',borderLeft:'2px solid #A8B331'}}>
                                <img src="/src/images/graph.png" style={{width:'100%'}}/>
                            </div>
                            <div className="wd-3">
                                <ul className="demo1" style={{paddingLeft:'0px'}}>
                                <li className="news-item">
                                    <div className="wd-6">4812A2603</div>
                                    <div className="wd-6">1.0001</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">4812C0340</div>
                                    <div className="wd-6">1.0000</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">38141W364</div>
                                    <div className="wd-6">1.0005</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">26202K304</div>
                                    <div className="wd-6">0.9999</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">4812A2827</div>
                                    <div className="wd-6">1.0000</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">316175108</div>
                                    <div className="wd-6">1.0000</div>
                                </li>
                                <li className="news-item">
                                    <div className="wd-6">09248U775</div>
                                    <div className="wd-6">1.0003</div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            /*<div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>*/
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 