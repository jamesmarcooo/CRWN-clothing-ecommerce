import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
