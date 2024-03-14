// Main File
import React from "react";
import './App.css';
import MainContainer from "./Components/MainContainer"; 
import Login from "./Components/Login";
import {Routes,Route} from "react-router-dom"
import ChatArea from './Components/ChatArea'
import Welcome from './Components/Welcome'
import CreateGroups from './Components/CreateGroups'
import User_Groups from './Components/User'
import Groups from "./Components/groups";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="app" element={<MainContainer/>}>
            <Route path="welcome" element={<Welcome/>}></Route>
            <Route path="chat" element={<ChatArea/>}></Route>
            <Route path="users" element={<User_Groups/>}></Route>
            <Route path="groups" element={<Groups/>}></Route>
            <Route path="create-groups" element={<CreateGroups/>}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
