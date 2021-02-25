import React, { PureComponent } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import logo from '../../src/images/logo.png';

class NavigationBar extends PureComponent {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })



    render() {

        const { activeItem } = this.state
        return (

            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
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
