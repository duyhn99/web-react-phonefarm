import path from "./resources/path";
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<></>}>
        <BrowserRouter>
          <Switch>
            <Route exact path={path.LOGIN} render={() => <Login />} />
            <Route render={() => <MainLayout />} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
