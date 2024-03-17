import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Posts from "./Posts/Posts";
import Post from "./Posts/Post";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState<number>(1);
  return (
    <div className={style.app}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className={style.title}>Посты</h1>
              <Posts activePage={activePage} setActivePage={setActivePage} />
            </>
          }
        />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
