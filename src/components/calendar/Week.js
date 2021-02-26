import React, { PureComponent } from 'react';
import Day from './Day';
import Toolbar from './Toolbar';
import './week.css';


class Week extends PureComponent {

    // Selects all text within the contenteditable area onFocus
    // selectElementContents = (el) => {
    //     let range = document.createRange();
    //     range.selectNodeContents(el);
    //     let sel = window.getSelection();
    //     sel.removeAllRanges();
    //     sel.addRange(range);
    // }


    render() {

        return (
            <div className="ui ben-container">
                < Toolbar />
                <div className="week">

                    < Day day={"Sunday"} dayNumber={1} />
                    < Day day={"Monday"} dayNumber={2} />
                    < Day day={"Tuesday"} dayNumber={3} />
                    < Day day={"Wednesday"} dayNumber={4} />
                    < Day day={"Thursday"} dayNumber={5} />
                    < Day day={"Friday"} dayNumber={6} />
                    < Day day={"Saturday"} dayNumber={7} />
                </div>
            </div >
        )
    }
}

export default Week