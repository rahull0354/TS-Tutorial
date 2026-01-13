import "./App.css";
import { Button } from "./components/EventProps/Button";
import { Input } from "./components/EventProps/Input";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { LoggedIn } from "./components/Hooks/LoggedIn";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Container } from "./components/StyleProps/Container";

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
      {/* <Greet name="John" messageCount={10} isLoggedIn={false} /> */}

      {/* how to display a pn object prop demo: */}
      {/* <Person name={personName} /> */}

      {/* displaying data through an array: */}
      {/* <PersonList name={personList} /> */}

      {/* conditional rendering using props demo: */}
      {/* <Status status="loading" /> */}

      {/* Rendering child component inside parent component */}
      {/* <Heading>Placeholder Text Here...</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Decaprio!</Heading>
      </Oscar> */}

      {/* Event Props */}
      {/* <Button handleClick={() => {
        console.log('Button Clicked !');
      }} />
      <Input value="" handleChange={(event) => console.log(event.target.value)} /> */}

      {/* Style Props */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem', color: 'red'}} /> */}

      {/* props using hooks */}
      <LoggedIn />
    </div>
  );
}

export default App;
