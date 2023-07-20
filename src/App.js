import Header from "./components/Header"
import Groups from "./pages/Groups"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </div>
    </>
  )
}

export default App
