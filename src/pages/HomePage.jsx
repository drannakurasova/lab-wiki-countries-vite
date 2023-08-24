import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCountries, setAllCountries] = useState();
  // console.log("all countries", allCountries)

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        // console.log("response", response.data)
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allCountries === undefined) {
    return <h3>...searching</h3>;
  }

  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {/* <!-- Home Page -->
    <!-- Use this example code to structure and style your components -->
    <!-- The code uses Bootstrap classes for basic layout and styling --> */}

        <div>
          {/* <!-- Navbar --> */}
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>

          {/* <!-- Bootstrap container wrapper div --> */}
          <div>
            <h1 style={{ fontSize: "24px" }}>
              WikiCountries: Your Guide to the World
            </h1>

            <div>
              {allCountries.map((eachCountry) => {
                return (
                  <ul key={eachCountry.name.official}>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                      alt=""
                    />
                    <br />
                    <Link to={`/countries/${eachCountry.alpha3Code}`}>
                      {eachCountry.name.official}
                    </Link>
                    <hr />
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default HomePage;
