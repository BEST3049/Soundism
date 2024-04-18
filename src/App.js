// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
// App.js
import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CarouselSlider from './components/Carouselheadphone';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route element={<CarouselSlider />} />
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
