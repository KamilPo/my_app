import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Events(props) {
  const sortedEvents = props.events.sort(eventComparator)

  function eventComparator(a, b) {
    if (a.startDate > b.startDate) {
      return 1
    } else if (a.startDate < b.startDate) {
      return -1
    }
    return 0
  }

  function getCategoryName(categoryId) {
    const category = props.categories.find(category => category.id == categoryId);
    return category.name
  }

  function getCategoryColor(categoryId) {
    const category = props.categories.find(category => category.id == categoryId);
    return category.color
  }

  const eventCards = sortedEvents.map(event => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={event.startDate + " -> " + event.endDate}
        iconStyle={{ background: getCategoryColor(event.categoryId), color: '#fff' }}
      >
        <Link to={"/events/" + event.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 className="vertical-timeline-element-title">
          {event.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">{getCategoryName(event.categoryId)}
        </h4>
        <br/>
        <img src={event.url} style={{width: "100px"}}></img>
        <p>
          {event.description}
        </p>
        </Link>
      </VerticalTimelineElement>
    )
  })

  return (
    <VerticalTimeline
      // lineColor={{ color: 'rgb(200, 200, 200)' }}
    >
      {eventCards}
    </VerticalTimeline>
  )
}
