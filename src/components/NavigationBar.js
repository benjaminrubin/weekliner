import React, { PureComponent } from 'react';
import { Menu, Button, Image } from 'semantic-ui-react';
import logo from '../../src/images/logo.png';

class NavigationBar extends PureComponent {



    render() {

        return (

            <Menu secondary >
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

export default NavigationBar;