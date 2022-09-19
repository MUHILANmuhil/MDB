import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getmovies, addmovies } from "../Movieaction";
import Details from "./Details";
import RenderedList from "./RenderedList";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { addsearchs } from "../Searchaction";
import { getAuth,signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../Firebase/Firebase' 
function Home() {
  let [idatas, setIdatas] = useState([]);
  let [datas, setDatas] = useState([]);
  let [search, setSearch] = useState("");
  let [timeout, setTimeOut] = useState();

  let val = useSelector(getmovies);
  let dispath = useDispatch();

  useEffect(() => {
    if (val !== undefined) {
      setDatas(val);
      setIdatas(val);
    }
  }, [val]);

  function fetchSearch(name) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=cc059885c5bc1eb2594978700ba49b58&language=en-US&query=${name}&include_adult=false`
      )
      .then((res) => {
        dispath(addsearchs(res.data.results));
        setDatas(res.data.results);
      });
  }
  function searchMovie(el) {
    setSearch(el.target.value);
    clearTimeout(timeout);
    let times = setTimeout(() => {
      fetchSearch(el.target.value);
    }, 500);
    setTimeOut(times);
  }
  if (datas === undefined) {
    return <></>;
  }

  function signout(){
    const auth = getAuth(app);
    signOut(auth).then(()=>{console.log("sign out successfull")});
  }
  return (
    <>
      <BrowserRouter>
        <div className="Header">
          <div className="leftHolder">
            <div className="logo">
              <Link className="link" to="/">
                <h2>Anonime</h2>
              </Link>
            </div>
            <div className="navList">
              <ul>
                <Link className="link" to="/">
                  <li
                    onClick={() => {
                      setDatas(idatas);
                    }}
                  >
                    Home
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="search">
            <input
              type="text"
              className="searchBar"
              placeholder="Search anime or movie"
              onChange={searchMovie}
              value={search}
            />
            <button onClick={signout} className="button" >Sign Out</button>
          </div>
        </div>
        <div className="Body">
          <div className="Cardsholder">
            <div className="cards">
              <Routes>
                <Route path="/" exact element={<RenderedList data={datas} />} />
                <Route path="/details" exact element={<Details />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Home;
