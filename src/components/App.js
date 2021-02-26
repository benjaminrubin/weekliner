import React, { Component } from 'react';
import Calendar from './calendar/Calendar';
import Week from './calendar/Week';
import DateAndTime from './DateAndTime';
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

                < DateAndTime />

                {/* < Calendar /> */}
                < Week />
            </div>
        )
    }
};

export default App;