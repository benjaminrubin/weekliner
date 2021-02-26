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


        // If the date/time isn't set yet
        if (!this.state.date) {

            // Return a loader to indicate the date and time
            return (
                <div>
                    <div class="ui active centered inline loader">
                    </div>
                    <div style={{ ...textCentered, marginTop: "0.6rem" }}>
                        Fetching your date and time...
                </div>

                </div >
            )
        }

        return (
            <div style={textCentered}>
                <h3 >{this.state.date}</h3>
                <h3 style={{ marginTop: ".5rem" }}>{this.state.time}</h3>
            </div>
        )
    }
}

export default DateAndTime