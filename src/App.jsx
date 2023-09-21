import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header";

function App() {
  const navigation = useNavigation();
  const location=useLocation()
  console.log(location)
  return (
    <>
      <Header></Header>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
    </>
  );
}

export default App;
