import Topbar from "../components/Topbar";
import About from "../components/about";

import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import UserProfile from "../components/UserProfile";
import ChatScreen from "../components/ChatScreen";
import Navbar from "../components/navBar";


export default function Home() {
    return (
    //   // <UserProfile/>
    //    <Topbar/>
    //  // <ChatScreen/>
    <Router>
            <Routes>
                <Route path="/" element={<Topbar />}>
                    <Route index element={<UserProfile />} />
                </Route>
                <Route path="/chat" element={<ChatScreen />} />
            </Routes>
      </Router>
    )
}