// import React from 'react';
// import {Header} from './Components/index'
// import {Home , Cart} from "./Pages/index";
//
// function App() {
//   return (
//       <div className="wrapper">
//         <Header/>
//         <div className="content">
//           <Home/>
//         </div>
//       </div>
//   );
// }
//
// export default App;

import React from 'react';
import { Header } from './Components/index';
import { Home, Cart } from './Pages/index';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;