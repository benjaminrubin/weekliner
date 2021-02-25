import React, { PureComponent } from 'react'
import Task from './Task';
import './week.css';

class Day extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // // Selects all text within the contenteditable area onFocus
    // selectElementContents = (el) => {
    //     var range = document.createRange();
    //     range.selectNodeContents(el);
    //     var sel = window.getSelection();
    //     sel.removeAllRanges();
    //     sel.addRange(range);
    // }

    render() {

        // Handles the overlapping of the days
        const overlapDay = {
            position: "relative",
            left: `-${this.props.dayNumber}px`
        }



        return (

            <div style={this.props.firstDay ? null : overlapDay}>
                <table className="ui celled table" style={{ width: "200px", borderRadius: 0, left: "-1px" }}>
                    <thead>
                        <tr className="ui gray">
                            <th className="ui text center aligned">{this.props.day}</th>
                        </tr>
                    </thead>
                    <tbody>
                        < Task />
                        < Task />
                        < Task />

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Day