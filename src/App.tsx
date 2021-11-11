import AllRoutes from './routes/Routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
