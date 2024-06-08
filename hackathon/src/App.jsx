import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Commentpg from "../pages/Commentpg";
import Createpost from "../pages/createpost";

import Mypost from "../pages/mypost";
import UserCard from "../pages/userCard";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/help";
import Sos from "../pages/sos";
import Fir from "../pages/Fir";
import Rights from "../pages/rights";
import Feedback from "../pages/feedback";
import Emergency from "../pages/emergency";
import Community from "../pages/community";

import Cart from "./components/cart";
import Cancel from "../pages/cancel";
import Success from "../pages/success";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />

          <Route path="/comment" element={<Commentpg />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/mypost" element={<Mypost />} />
          <Route path="/userInfo" element={<UserCard />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sos" element={<Sos />} />
          <Route path="/fir" element={<Fir />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/community" element={<Community />} />
          <Route path="/payment" element={<Cart />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
          
        </Routes>
      
    </Router>
  );
}

export default App;
