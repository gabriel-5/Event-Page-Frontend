import React, { useState } from "react";

function Add(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentEvent) {
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.eventName.value,
        e.target.eventLocation.value,
        e.target.eventInformation.value,
        e.target.eventDate.value
      );
    } else {
      result = props.client.addEvent(
        e.target.eventName.value,
        e.target.eventLocation.value,
        e.target.eventInformation.value,
        e.target.eventDate.value
      );
    }

    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch((err) => {
        console.log(err);
        alert("an error occured, please try again");

        cDisabled(false);
      });
  };

  return (
    <>
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        <br />
        <input
          className="date"
          type="date"
          defaultValue={props.currentEvent?.date}
          name="eventDate"
          disabled={disabled}
          required
        />
        <br /> <br />
        <textarea
          rows="1"
          cols="25"
          defaultValue={props.currentEvent?.name}
          placeholder="event"
          name="eventName"
          disabled={disabled}
          required
        />
        <br />
        <br />
        <textarea
          rows="1"
          cols="50"
          defaultValue={props.currentEvent?.location}
          placeholder="city"
          name="eventLocation"
          disabled={disabled}
          required
        />
        <br />
        <br />
        <textarea
          rows="1"
          cols="75"
          defaultValue={props.currentEvent?.information}
          placeholder="location"
          name="eventInformation"
          disabled={disabled}
          required
        />
        <br />
        <br />
        <button className="submit-button" type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Add;
