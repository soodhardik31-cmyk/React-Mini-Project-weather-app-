//import './App.css'
import SearchBox from "./components/SearchBox";
import UserContext from "./context/UserContext";
import Profile from "./components/Profile";


function App() {
  const username = "Rahul";
  
  return (
    <UserContext.Provider value={username}>
      <SearchBox />
    </UserContext.Provider>
  );
}

export default App;
