import React, { Component } from 'react';
import Calendar from './calendar/Calendar';
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
                < Calendar />
            </div>
        )
    }
};

export default App;