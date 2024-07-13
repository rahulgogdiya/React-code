import { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import Sidebar from "./Components/Sidebar";
import PostListProvider from "./store/post-list-stor";

function App() {
  const [selectedTap, setSelectedTap] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
        <div className="contain">
          <Header />
          {selectedTap === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
