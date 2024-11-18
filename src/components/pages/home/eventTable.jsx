import React, { Component } from 'react';
import events from '../../../data/events.json';
import { NavLink } from 'react-router-dom';
import './EventTable.css';
import '../../../styles/index.css';

class EventTable extends Component {
    state = {  } 

    // Funktion zum Sortieren der Events nach Wochentagen
    sortEventsByWeekday(events) {
        const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
        return events.flatMap(event => 
            event.schedule.map((scheduleItem, index) => ({
                ...scheduleItem,
                event: event.event,
                page: event.page,
                id: `${event.id}-${index}`
            }))
        ).sort((a, b) => weekdays.indexOf(a.weekday) - weekdays.indexOf(b.weekday));
    }

    render() { 
        const sortedEvents = this.sortEventsByWeekday(events);

        return (
            <>
                <table className='eventTable'>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Wochentag</th>
                            <th>Startzeit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEvents.map((event, index) => (
                            <tr key={event.id}>
                                <td><NavLink className='bold' to={event.page}>{event.event}</NavLink></td>
                                <td>{event.weekday}</td>
                                <td>{event.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default EventTable;