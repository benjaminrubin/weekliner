import React, { PureComponent } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Task from './Task';
import './week.css';

class Day extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [
                {
                    completed: false,
                    description: "",
                },
                {
                    completed: false,
                    description: "",
                },
                {
                    completed: false,
                    description: "",
                }
            ]
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



    renderTasks = () => {
        return this.state.tasks.map(task => {
            return < Task
                completed={task.completed}
                description={task.description}
            />
        })
    }

    addTask = () => {

        this.setState({
            tasks: [...this.state.tasks, { completed: false, description: "" }]
        })
    }

    removeTask = () => {
        this.setState({
            tasks: this.state.tasks.slice(0, (this.state.tasks.length - 1))
        })

        console.log("Remove task")
    }


    render() {

        // Handles the overlapping of the columns so that
        // their dividers are only 1px vs 2px
        const overlapDay = {
            position: "relative",
            left: `-${this.props.dayNumber}px`
        }





        return (
            <div>
                {/* // Add an overlap class to make vertical table lines thinner */}
                <div style={this.props.firstDay ? null : overlapDay}>

                    <table className="ui celled table" style={{ width: "200px", borderRadius: 0, left: "-1px" }}>
                        <thead>
                            <tr className="ui gray">
                                <th className="ui text center aligned">{this.props.day}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTasks()}
                        </tbody>
                    </table>
                </div>



                <Button.Group
                    basic
                    size="mini"
                    style={{
                        marginTop: "1rem",
                        width: "max-content",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}

                >
                    <Button icon size="mini" onClick={this.addTask}><Icon name="plus" /></Button>
                    <Button icon size="mini" onClick={this.removeTask}><Icon name="minus" /></Button>
                </Button.Group>

            </div >
        )
    }
}

export default Day