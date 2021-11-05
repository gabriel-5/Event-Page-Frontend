import React, { useState, useEffect } from "react";
import Add from "./Add";
import spiral from "./spiral.png";

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
    const confirmBox = window.confirm("REMOVE EVENT FOR EVERYONE?");
    if (confirmBox) {
      props.client.removeEvent(id).then(() => refreshList());
    }
  };

  const updateEvent = (event) => {
    cCurrent(event);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    return false;
  };

  const buildrows = () => {
    return events.map((current) => {
      return (
        <tr key={current._id}>
          <td>
            <img className="spiral" src={spiral} alt="Orange Spiral" />
          </td>
          <td>{current.name.toLowerCase()}</td>
          <td>{current.location.toLowerCase()}</td>
          <td>{current.information.toLowerCase()}</td>
          <td>{current.date.toLowerCase()}</td>
          <td
            className="events-buttons"
            onClick={() => {
              removeEvent(current._id);
            }}
          >
            remove?
          </td>
          <td className="events-buttons" onClick={() => updateEvent(current)}>
            change listing details?
          </td>

          <br />
          <br />
        </tr>
      );
    });
  };

  return (
    <>
      <div className="logout-button-container">
        <div className="logout-button" onClick={logout}>
          logout?
        </div>
      </div>
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
