import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.onChange} name="title" placeholder="Title" value={props.title} />
        <textarea onChange={props.onChange} name="content" placeholder="Take a note..." rows="3" value={props.content} />
        <button onClick={(event) => {props.clickToAdd(event)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
