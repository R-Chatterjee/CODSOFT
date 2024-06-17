import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Postjob from "../Pages/Postjob";
import SalaryPage  from "../Pages/SalaryPage";
import JobDetails from "../Pages/JobDetails";
import MyJobs from "../Pages/MyJobs";
import Update from "../Pages/Update";
import Apply from "../Pages/Apply";
import Login from "../Components/Login";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/post-job",
          element: <Postjob/>
        },
        {
          path: "/my-job",
          element: <MyJobs/>
        },
        {
          path: "/salary",
          element: <SalaryPage/>
        },
        {
          path: "/job/:id",
          element: <JobDetails/>
        },
        {
          path: "edit-job/:id",
          element: <Update/>,
          loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
        {
          path: "/apply",
          element: <Apply/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ],
    },
  ]);
export default router;  
