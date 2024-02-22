import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-700 sm:px-8 px-4 py-4 ">
      <Link to="/">
        {/* <img src={logo} alt="logo" className="w-40 object-contain" /> */}
        <h1 className=' text-white font-bold text-2xl px-4 py-2 rounded-md'>VISION</h1>
      </Link>

      <Link to="/create-post" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-slate-900 to-slate-700 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;