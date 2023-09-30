
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/all-products/:categoryName" element={<Explore />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Route>
  )
)
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
