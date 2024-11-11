import React, { Component } from 'react';
import events from '../../../data/events.json';
import { NavLink } from 'react-router-dom';
import './EventTable.css';

class EventTable extends Component {
    state = {  } 
    render() { 
        return  <>
                    <table className='eventTable'>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Wochentag</th>
                                <th>Startzeit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(event => (
                                <tr key={event.id}>
                                    <td><NavLink to={event.page}>{event.event}</NavLink></td>
                                    <td>{event.weekday}</td>
                                    <td>{event.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>;
    }
}
 
export default EventTable;