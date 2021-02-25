import React, { PureComponent } from 'react'
import Task from './Task';

class Day extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>Day
                <Task />
            </div>
        )
    }
}

export default Day