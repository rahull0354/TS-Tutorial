import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "John",
    last: "Doe",
  };

  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Tony",
      last: "Stark",
    },
  ];

  return (
    <div className="App">
      {/* How to use a prop demo: */}
      <Greet name="John" messageCount={10} isLoggedIn={false} />

      {/* how to display a pn object prop demo: */}
      <Person name={personName} />

      {/* displaying data through an array: */}
      <PersonList name={personList} />

      {/* conditional rendering using props demo: */}
      <Status status="loading" />
    </div>
  );
}

export default App;
