import React, { PureComponent } from 'react'
import ContentEditable from 'react-contenteditable'
import ReactDOM from 'react-dom'
import './task.css'

class Task extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            completed: null,
            description: ""
        }
    }


    contentOnChange = (e) => {
        this.setState({ description: e.target.value });

    }

    checkBoxOnChange = (e) => {

        if (this.state.completed) {
            this.setState({ completed: false });
        }
        else {
            this.setState({ completed: true });
        }

    }

    isCompleted = () => {

        // If task is completed
        if (this.state.completed) {

            // Return "completed" className
            return "completed";
        }
        return "";
    }

    render() {


        const contentStyle = {
            width: "100%",
            position: "relative",
            marginLeft: ".78571429em",
            outline: 0
        }

        return (
            <tr>
                <td className={this.isCompleted()} >
                    <input type="checkbox" className="check-box" tabIndex="-1" onClick={this.checkBoxOnChange} />
                    <ContentEditable
                        style={contentStyle}
                        tabindex="0"
                        onChange={this.contentOnChange}
                        html={this.state.description}
                    ></ContentEditable>
                </td>
            </tr>
        )
    }
}

export default Task