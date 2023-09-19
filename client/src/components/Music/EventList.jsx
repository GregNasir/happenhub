import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventList({ match }) {
  const [events, setEvents] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const apiKey = 'm0o6ngepm1tvjHNa09clKOFNQZnWVpzK';
    const classificationName = category === 'concerts' ? 'Music' : category;
    const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${classificationName}&apikey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data._embedded && data._embedded.events) {
          setEvents(data._embedded.events);
        }
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [category]);

  return (
    <div>
      <h1>Events in {category}</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>
              Location: {event._embedded && event._embedded.venues[0] ? event._embedded.venues[0].name : 'N/A'}
            </p>
            <p>
              Date & Time: {event.dates && event.dates.start ? event.dates.start.dateTime : 'N/A'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;