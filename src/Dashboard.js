import React, { useState, useEffect } from "react";
import Add from "./Add";

function Dashboard(props) {
  const [events, cEvents] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getEvents().then((response) => {
      console.log(response.data);
      cEvents(response.data);
    });
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (event) => {
    cCurrent(event);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return events.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.name}</td>
          <td>{current.location}</td>
          <td>{current.information}</td>
          <td>{current.date}</td>
          <td
            className="events-buttons"
            onClick={() => removeEvent(current._id)}
          >
            remove
          </td>
          <td className="events-buttons" onClick={() => updateEvent(current)}>
            change listing details
          </td>

          <br />
          <br />
        </tr>
      );
    });
  };

  return (
    <>
      <div className="title">— — — — — — — — — — — — — — — — —</div>
      <div className="title">— — — — — — — — — — </div>
      <div className="title"> — — — — — </div>
      <div className="container">
        <div className="add-event-form">
          <Add
            client={props.client}
            refreshList={() => {
              refreshList();
              cCurrent(undefined);
            }}
            currentEvent={current}
          />
        </div>
        <div className="event-list">
          <table>
            <thead></thead>
            <tbody>{buildrows()}</tbody>
          </table>
        </div>
        <br />
        <br />
      </div>
      <div className="footer-container">
        <div className="title"> — — — — — </div>
        <div className="title">— — — — — — — — — — </div>
        <div className="title">— — — — — — — — — — — — — — — — —</div>
      </div>
    </>
  );
}

export default Dashboard;
