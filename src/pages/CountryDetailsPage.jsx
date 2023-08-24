import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const params = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getInfo();
  }, [params.alpha3Code]);

  const getInfo = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`
      );
      console.log("details response", response.data);
      setInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (info === null) {
    return <h3>Searching...</h3>;
  }

  return (
    <html lang="en">
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
        {/* <!-- Country Details Page -->
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
          {/* 
      <!-- Bootstrap container wrapper div --> */}
          <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              Country Details
            </p>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${info.alpha2Code.toLowerCase()}.png`}
              alt=""
            />

            <h1>{info.name.official}</h1>

            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Capital</td>
                  <td>{info.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {info.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {info.borders.map((eachBorder) => {
                      return (
                        <ul key={eachBorder}>
                          <Link to={`/countries/${eachBorder}`}>
                            {" "}
                            {eachBorder}{" "}
                          </Link>
                        </ul>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  );
}

export default CountryDetails;
