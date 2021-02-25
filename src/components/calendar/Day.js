import React, { PureComponent } from 'react'
import { Table } from 'semantic-ui-react';
import Task from './Task';

class Day extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // Selects all text within the contenteditable area onFocus
    selectElementContents = (el) => {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    render() {
        return (
            <>
                <Table.Row >

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>

                    <Table.Cell >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" style={{ display: "block", marginRight: ".78571429em" }} tabIndex="-1" />
                            <div contentEditable="true" style={{ width: "100%", position: "relative" }} tabIndex="0" onFocus="selectElementContents(this)"></div>
                        </div>
                    </Table.Cell>



                </Table.Row>
            </>
        )
    }
}

export default Day