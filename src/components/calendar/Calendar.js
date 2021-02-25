import React, { PureComponent } from 'react'
import Day from '../calendar/Day';
import { Table, Label, Menu, Icon, Button, Container } from 'semantic-ui-react';

class Calendar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return (
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="center">Monday</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Tuesday</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Wednesday</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Thursday</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Friday</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Saturday</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Sunday</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        < Day />
                        < Day />
                        < Day />
                        < Day />
                        < Day />
                        < Day />
                        < Day />

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7'>
                                <Button basic>
                                    <Icon name='chevron left' />
                                    Previous Week
                                </Button>
                                <Button floated="right" basic>
                                    Next Week
                                    <Icon name='chevron right' />
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>
        )
    }
}

export default Calendar