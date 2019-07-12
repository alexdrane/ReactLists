import React from "react";
import ReactDOM from "react-dom";
import { InputBox } from "./input";
import EntryList from "./list";
import "./styles.css";

import styled from "styled-components";

const MainDiv = styled.div`
  color: white;
  background-color: #004466;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  onEnter = entry => {
    this.setState(prevState => ({
      entries: [entry, ...prevState.entries]
    }));
  };

  deleteEntry = id => {
    this.setState(prevState => ({
      entries: prevState.entries.filter(entry => entry.id !== id)
    }));
  };
  render() {
    return (
      <MainDiv className="App">
        <h1>List App</h1>
        <InputBox onEnter={this.onEnter} />
        <EntryList
          deleteEntry={this.deleteEntry}
          entries={this.state.entries}
        />
      </MainDiv>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
