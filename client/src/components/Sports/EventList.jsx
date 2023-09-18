import React, { useEffect, useState } from 'react';

function EventList({ match }) {
  const [events, setEvents] = useState([]);
  const category = match.params.category; 

  useEffect(() => {
    const apiKey = 'm0o6ngepm1tvjHNa09clKOFNQZnWVpzK';
    const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${category}&apikey=${apiKey}`;

   
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
