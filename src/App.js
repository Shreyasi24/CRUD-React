import Create from "./component/Create"
import Read from "./component/Read";
// import Edit from './component/Edit'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />}>Read</Route>
          <Route path="/create" element={<Create />}>create</Route>
          {/* <Route path="/edit" element={<Edit />}>Edit</Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
