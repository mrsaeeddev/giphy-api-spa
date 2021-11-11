import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

function AllRoutes() {
  return (
    <div className="App">
      <h1>Welcome to Giphy SPA!</h1>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;