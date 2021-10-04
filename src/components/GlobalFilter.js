import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <div>
      <label htmlFor="">Search: </label>
      <input
        type="text"
        placeholder="type here..."
        style={{ width: "300px" }}
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default GlobalFilter;
