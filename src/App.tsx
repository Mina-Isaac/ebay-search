import React from "react";
import "./App.scss";
import { selectSearchStatus, selectError } from "./store/dataSlice";
import { useAppSelector } from "./store/hooks";
import { Spinner } from "./Components/Spinner";
import ErrorMessage from "./Components/ErrorMessage";
import SearchBar from "./Components/SearchBar";
import Grid from "./Components/Grid";

function App() {
  const loadingStatus = useAppSelector(selectSearchStatus);
  const err = useAppSelector(selectError);

  const errMessage = err && (typeof err === "string" ? err : err.message);

  return (
    <div className="wrapper">
      <SearchBar />
      {loadingStatus === "succeeded" && !errMessage && <Grid />}
      {loadingStatus === "loading" && <Spinner />}
      {errMessage && <ErrorMessage message={errMessage} />}
    </div>
  );
}

export default App;
