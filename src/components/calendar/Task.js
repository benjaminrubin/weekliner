import React, { PureComponent } from 'react'
import ContentEditable from 'react-contenteditable'
import './task.css'

class Task extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    contentOnChange = (e) => {
        console.log(e.target.value)
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
                <td >
                    <input type="checkbox" className="check-box" tabIndex="-1" />
                    <ContentEditable
                        style={contentStyle}
                        tabindex="0"
                        onChange={this.contentOnChange}
                    ></ContentEditable>
                </td>
            </tr>
        )
    }
}

export default Task