import React, { PureComponent } from 'react';
import { Menu, Button, Image } from 'semantic-ui-react';
import logo from '../../src/images/logo.png';

class NavigationBar extends PureComponent {



    render() {

        return (

            <Menu secondary pointing>
                <Menu.Item style={{ fontSize: 20 }}>
                    Weekliner
                </Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item style={{ paddingRight: 0 }}>
                        <Button content="Primary" primary>Sign up</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button basic>Log in</Button>
                    </Menu.Item>
                </Menu.Menu>

            </Menu>





        )
    }
}

export default NavigationBar


// <nav className="navbar navbar-light bg-light">
// <div className="container">
//     <a className="navbar-brand" href="#">
//         <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="" />
//     Weekliner
// </a>
//     <div className="nav navbar-nav navbar-right d-flex flex-row">
//         <div className="btn-nav mr-1"><div className="btn btn-primary btn-small navbar-btn" >Sign Up</div>
//         </div>
//         <div className="btn-nav"><div className="btn btn-secondary btn-small navbar-btn" >Log in</div>
//         </div>
//     </div>
// </div>
// </nav>
