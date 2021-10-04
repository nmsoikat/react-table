import React from "react";

function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <label htmlFor="">Search: </label>
      <input
        type="text"
        placeholder="type here..."
        style={{ width: "100px" }}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default ColumnFilter;
