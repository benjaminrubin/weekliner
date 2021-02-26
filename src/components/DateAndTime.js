import React, { PureComponent } from 'react';

class DateAndTime extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            date: "",
            time: ""
        }
    };

    componentDidMount() {
        this.interval = setInterval(
            () => {
                let dateObject = new Date();

                // Using dateFormat library to format the date
                let dateFormat = require("dateformat");
                let date = dateFormat(dateObject, "dddd, mmmm dS, yyyy")
                let time = dateFormat(dateObject, "h:MM:ss TT"); // 1:05 PM
                // let euroTime = dateFormat(dateObject, "H:MM"); // 13:05

                this.setState({
                    time: time,
                    date: date
                })

            }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }





    render() {

        let textCentered = {
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "2rem"
        }

        return (
            <div style={textCentered}>
                <h3 >{this.state.date}</h3>
                <h4 style={{ marginTop: ".5rem" }}>{this.state.time}</h4>
            </div>
        )
    }
}

export default DateAndTime