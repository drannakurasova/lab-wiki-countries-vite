import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>

      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/countries/:alpha3Code" element={<CountryDetails />}>
          Home
        </Route>
      </Routes>
    </div>
  );
}

export default App;
