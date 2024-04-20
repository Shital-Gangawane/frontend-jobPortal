// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.js/Layout";
import Nav from "./components/Nav/Nav";
import LandingPage from "./pages/LandingPage/Index";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import AdminDashboard from "./pages/Admin/Dashboard";
import CandidateDashboard from "./pages/Candidate/Dashboard";
import Candidate from "./pages/Candidate/Candidate";
import CandidateModule from "./pages/Admin/CandidateModule";
import Jobs from "./pages/Admin/Jobs";
import Employers from "./pages/Admin/Employers";
import AdminApp from "./pages/Admin/AdminApp";
import AdminModule from "./pages/Admin/AdminModule";
import SearchedJobs from "./pages/Candidate/SearchedJobs";
import Job from "./pages/Job/Job";
import ViewJob from "./pages/Job/ViewJob";
// import { useSelector } from "react-redux";
// import { SelectUser } from "./features/userSlice";
// import Logout from "./pages/Logout/Logout";

// import Navcontents from "./components/Nav/Navcontents";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
// import Home from "./components/home/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      {/*searched Jobs on landing page*/}
      <Route path="job" element={<Job />}>
        <Route path="search-results" element={<SearchedJobs />} />
        <Route path=":jobTitle" element={<ViewJob />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<AdminApp />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="candidates" element={<CandidateModule />} />
        <Route path="employers" element={<Employers />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="admins" element={<AdminModule />} />
      </Route>
      <Route path="candidate" element={<Candidate />}>
        <Route path="dashboard" element={<CandidateDashboard />} />
      </Route>
    </Route>
  )
);

function App() {
  // const user=useSelector(SelectUser)
  // return(
  //   <div>
  //     <Navcontents/>
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home/>}></Route>
  //       <Route path="/Register" element={<Register />}></Route>
  //         <Route path="/Login" element={<Login />}></Route>
  //     </Routes>
  //     </BrowserRouter>
  //   </div>
  // )
  return(
    <div>
         {/* {user ?<Logout/>:<Login/>} */}
          <RouterProvider router={router} />;
    </div>
 
  )
}

export default App;
