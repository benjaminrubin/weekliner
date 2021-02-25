import React, { Component } from 'react';
import Week from './calendar/Week';
import NavigationBar from './NavigationBar';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div></div>
                < Week />
            </div>
        )
    }
};

export default App;