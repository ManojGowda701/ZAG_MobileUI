// import './App.css';
// // import Home from './Components/Home/Home';
// // import Details from '../src/Components/Details/Details'
// import Cart from './Components/Cart/Cart';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// // import Cart from './Components/Cart/Cart';

// function App() {
//   return (
//       <div className='App'>
//          {/* <Router>
//             <Routes>
//                <Route path="/" element={Home} />
//                <Route path="/product/:id" element={Details} />
//             </Routes>
//          </Router> */}
//          {/* <Home /> */}
//          {/* <Details /> */}
//          <Cart />
//       </div>
     
//   );
// }

// export default App;


import {Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Details from '../src/Components/Details/Details';
import Cart from '../src/Components/Cart/Cart';

const App = () => {
 return (
       <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
       </>
 );
};

export default App;
