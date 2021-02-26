import React, { PureComponent } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class Toolbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        let toolbarStyling = {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
            marginBottom: "1rem"
        }

        return (

            <div style={toolbarStyling}>

                <Button icon labelPosition='left'>
                    <Icon name='left arrow' />
                    Previous Week

                </Button>
                <Button icon labelPosition='right' disabled>
                    Next Week
                    <Icon name='right arrow' />
                </Button>


            </div>
        )
    }
}

export default Toolbar