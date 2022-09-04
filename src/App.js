// App.js

import React, { useEffect, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';


// import { collection, getDocs } from '@firebase/firestore';
// import { db } from './firebase-config'



import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header';
import CreateItem from './pages/CreateItem';
import { getAllFoodItems } from './firebaseFunctions';
import { useStateValue } from './reducers/StateProvider';
import { actionType } from './reducers/reducer';
import { firestore } from './firebase-config';


function App() {

  const [{ foodItems }, dispatch] = useStateValue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {fetchFoodItems()}, []);

  return (
    <AnimatePresence>

      <motion.div className='App'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <>
          <Router forceRefresh>
            <Header />
            <Routes>

              <Route index element={<MainContainer />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route path="/main" element={<MainContainer />} />
              <Route path="/order" element={<Order />} />
              <Route path="/order/:searchId" element={<Order />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="/createItem" element={<CreateItem />} />
              <Route exact path="/blog" render={() => {window.location.href="/YenNing/Blog.html"; window.location.reload()}} />
              <Route exact path="/gallery" render={() => {window.location.href="/YenNing/Gallery.html"; window.location.reload()}} />
              {/* <Route exact path="/*" element={<Error404 />} /> */}

            </Routes>
            <Footer />
          </Router>
        </>
      </motion.div>
    </AnimatePresence>
  );
}


export default App;