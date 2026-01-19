import "./App.css";
import { Button } from "./components/EventProps/Button";
import { Input } from "./components/EventProps/Input";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Box } from "./components/Hooks/Context/Box";
import { ThemeContextProvider } from "./components/Hooks/Context/ThemeContext";
import { UserContextProvider } from "./components/Hooks/Context/UserContext";
import { UserLogin } from "./components/Hooks/Context/User";
import { Counter } from "./components/Hooks/Counter";
import { LoggedIn } from "./components/Hooks/LoggedIn";
import { User } from "./components/Hooks/User";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Container } from "./components/StyleProps/Container";
import { DomRef } from "./components/Hooks/Ref/DomRef";
import { MutableRef } from "./components/Hooks/Ref/MutableRef";
import { ClassCounter } from './components/class/ClassCounter';
import { List } from "./components/Generics/List";
import { RandomNumber } from "./components/Restriction/RandomNumber";

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

      {/* UseState Demo: */}
      {/* <LoggedIn /> */}
      {/* <User /> */}

      {/* UseReducer Demo: */}
      {/* <Counter /> */}

      {/* UseContext Demo: */}
      {/* <Box />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* useContext Future Value Demo: */}
      {/* <UserContextProvider>
        <UserLogin />
      </UserContextProvider> */}

      {/* UseRef Hook Demo: */}

      {/* Demo for DomRef: */}
      {/* <DomRef /> */}

      {/* Demo for MutableRef */}
      {/* <MutableRef /> */}

      {/* Class Demo: */}
      {/* <ClassCounter message="The Count Value is: " /> */}

      {/* Generics Demo: */}
      {/* <List 
        items={['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye']}
        onClick={(item) => console.log(item)}
      />
      <List 
        items={[1,2,3,4,5,6]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* Restriction Demo: */}
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
