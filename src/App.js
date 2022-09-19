import "./App.css";
import Home from "./components/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addmovies } from "./Movieaction";
import PropagateLoader from "react-spinners/PropagateLoader";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./Firebase/Firebase";
function App() {
  let [Loading, setLoading] = useState(true);
  let [user, setuser] = useState("");

  let dispath = useDispatch();

  function fetchMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=cc059885c5bc1eb2594978700ba49b58"
      )
      .then((res) => {
        dispath(addmovies(res.data.results));
      });
  }
  useEffect(() => {
    fetchMovies();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // setLoading(false)
        setuser(true);
      } else {
        setuser(false);
      }
    });
    return unsubscribe;
  }, []);
  if (user === "") {
    return (
      <PropagateLoader
        color="#ffffff"
        loading={Loading}
        size={15}
        className="loader"
      />
    );
  }
  function googleauth() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });   
  }
  return (
    <div className="App">
      {Loading ? (
        <PropagateLoader
          color="#ffffff"
          loading={Loading}
          size={15}
          className="loader"
        />
      ) : user ? (
        <Home />
      ) : (
        <div>
          <button className="button si" onClick={googleauth}>sign in</button>
        </div>
      )}
    </div>
  );
}

export default App;
