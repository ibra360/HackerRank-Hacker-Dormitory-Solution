import React from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";

const title = "Hacker Dormitory";
function App() {
  const [residents, setResidents] = React.useState([]);
  const [errorText, setErrorText] = React.useState("");

  // let residents = [];
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search residents={residents} setResidents={setResidents} setErrorText={setErrorText}/>
        {errorText && <Error errorText={errorText} />}
        <ResidentsList residents={residents} />
      </div>
    </div>
  );
}

export default App;
