
import { BrowserRouter, Routes , Route, Router } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails"
import { AppContext} from "./context/contextApi";

function App() {
  

  return (  
     <AppContext>
      <BrowserRouter basename="/youtube-clone">
      <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route path="/youtube-clone"  excat element={<Feed />} ></Route>
        <Route path="/searchResult/:searchQuery" element={<SearchResults />} ></Route>
        <Route path="/video/:id" element={<VideoDetails />} ></Route>
      </Routes>
      </div>
      </BrowserRouter>
     </AppContext>
  )
}

export default App
