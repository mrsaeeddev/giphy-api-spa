import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

function AllRoutes() {
  return (
    <Container>
      <h1 className="p-3">Giphy SPA</h1>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default AllRoutes;