import React, { PureComponent } from 'react'
import ContentEditable from 'react-contenteditable'
import './stylesheets/task.css'

class Task extends PureComponent {
    constructor(props) {
        super(props);

        // Creating a reference to the task DOM element
        // so that we can focus on newly added tasks
        this.taskRef = React.createRef();

        this.state = {
            completed: null,
            description: ""
        }
    }

    componentDidMount() {

        this.setState({
            completed: this.props.completed,
            description: this.props.description
        })

        // If this is a recently added task
        // then we passed the focus parameter
        if (this.props.focus) {

            // Focus on the contentEditable of this task
            // for a nicer user experience - immediately after
            // adding a new task, we will focus on this newly added task to edit it
            this.taskRef.current.focus();
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

        let contentStyle = {
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
                        tabIndex="0"
                        onChange={this.contentOnChange}
                        html={this.state.description}
                        innerRef={this.taskRef}
                    ></ContentEditable>
                </td>
            </tr>
        )
    }
}

export default Task