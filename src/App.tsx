import React from "react";
import DateDisplay from "./components/DateDisplay";
import DataFetcher from "./components/DataFetcher";
import Chart from "./components/Chart";
import DebouncedInput from "./components/DebouncedInput";
import ToggleButton from "./components/ToggleButton";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import WeatherWidget from "./components/WeatherWidget";
import Clock from "./components/Clock";
import Form from "./components/Form";

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>React Webpack App</h1>
      </header>
      <main className="container">
        <h2>List of 10 React Components</h2>
        <div className="card">
          <h2>1. Date Display</h2>
          <p className="callout">Uses Moment.js to display the current date.</p>
          <DateDisplay />
        </div>
        <div className="card">
          <h2>2. Data Fetcher</h2>
          <p className="callout">Uses Axios to fetch data from a public API and display it.</p>
          <DataFetcher />
        </div>
        <div className="card">
          <h2>3. Chart</h2>
          <p className="callout">Uses D3.js to display a simple bar chart.</p>
          <Chart />
        </div>
        <div className="card">
          <h2>4. Debounced Input</h2>
          <p className="callout">Uses Lodash for a debounced input.</p>
          <DebouncedInput />
        </div>
        <div className="card">
          <h2>5. Toggle Button</h2>
          <p className="callout">A simple toggle button component.</p>
          <ToggleButton />
        </div>
        <div className="card">
          <h2>6. Counter</h2>
          <p className="callout">A counter component that increments and decrements a number.</p>
          <Counter />
        </div>
        <div className="card">
          <h2>7. User List</h2>
          <p className="callout">A list of users fetched from a public API.</p>
          <UserList />
        </div>
        <div className="card">
          <h2>8. Weather Widget</h2>
          <p className="callout">A simple weather widget using a mock API.</p>
          <WeatherWidget />
        </div>
        <div className="card">
          <h2>9. Clock</h2>
          <p className="callout">A simple clock component that updates every second.</p>
          <Clock />
        </div>
        <div className="card">
          <h2>10. Form</h2>
          <p className="callout">A simple form with validation.</p>
          <Form />
        </div>
      </main>
      <footer>
        @2024 coypright by React Webpack App
      </footer>
    </>
  );
};

export default App;
