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
      {props.currentEvent ? "Update" : "Add"}
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        Name: <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.name}
          name="eventName"
          disabled={disabled}
        />
        <br />
        Location:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.location}
          name="eventLocation"
          disabled={disabled}
        />
        <br />
        Information:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.information}
          name="eventInformation"
          disabled={disabled}
        />
        <br />
        Date:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.date}
          name="eventDate"
          disabled={disabled}
        />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Add;
