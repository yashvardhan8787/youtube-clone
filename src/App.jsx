import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResults />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;
