import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getmovies } from "../Movieaction";
import { getsearch } from "../Searchaction";

function Details() {
  let movie = useSelector(getmovies);
  let search = useSelector(getsearch);
  let [data, setdata] = useState([]);

  useEffect(() => {
    let Cid = localStorage.getItem("ID");

    let details = movie.filter((m) => {
      return Cid == m.id;
    });
    if (details.length === 0) {
      details = search.filter((m) => {
        return Cid == m.id;
      });
    }
    setdata(details);
  }, []);

  return (
    <div className="detailHolder">
      {data.map((d) => {
        let { poster_path, title, overview, vote_average, id } = d;
        return (
          <>
            <div className="dimageHolder" key={id} data-id={id}>
              <img
                className="dimage"
                src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                alt="404"
              />
            </div>
            <div className="details">
              <div className="trHolder">
                <h1>{title}</h1>
                <h5>Rating:{vote_average}</h5>
              </div>
              <div className="overview">
                <p>{overview}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Details;
