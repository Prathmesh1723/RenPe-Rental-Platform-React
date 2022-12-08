import React from "react";

function CreateListing() {
  return (
    <div>
      <form>
        <label>
          Type of Property:
          <input type="text" />
        </label>
        <label>
          No of rooms:
          <input type="text" />
        </label>
        <label>
          No of Baths:
          <input type="text" />
        </label>
        <label>Choose image of Property</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </form>
    </div>
  );
}

export default CreateListing();
