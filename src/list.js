import React from "react";

import styled from "styled-components";
import console from "console";

const Bar = styled.div`
  background-color: ${props => (props.idx % 2 === 0 ? "grey" : "#666666")};
  cursor: pointer;
`;
function EntryList({ entries, deleteEntry }) {
  function onDel(event, id) {
    console.log("click");
    deleteEntry(id);
  }

  const entryList = entries.map((entry, idx) => (
    <Bar onClick={event => onDel(event, entry.id)} idx={idx} key={entry}>
      {entry.name}{" "}
    </Bar>
  ));
  return <div>{entryList}</div>;
}
export default EntryList;
