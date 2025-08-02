import './App.css'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import RegisterEvent from "../src/pages/RegisterEvent"
import ViewEvent from "../src/pages/ViewEvent"
import EventRegistrationForm from './pages/EventRegistrationForm'
import Oragnizer from './pages/Oragnizer'
import OrganizerLogin from './pages/OrganizerLogin'
import OraganizerSignUp from "./pages/OraganizerSignUp"
import OrganizeEvent from './pages/OrganizeEvent'
import ViewStudents from './pages/ViewStudents'
function App() {
  const router = createBrowserRouter([
    
    {
      path:'/',
      element:<><Home/></>
    },
    {
      path:'/login',
      element:<><Login/></>
    },
    {
      path:'/signup',
      element:<><SignUp/></>
    },
    {
      path:'/user',
      element:<><User/></>
    },
    {
      path:'/registerevent',
      element:<><RegisterEvent/></>
    },
    {
      path:'/viewevents',
      element:<><ViewEvent/></>
    },
    {
      path:'/Logout',
      element:<>
      
      <Home/>
      </>
    },
    {
      path:'/eventregistraionform',
      element:<><EventRegistrationForm/></>
    },
    {
      path:'/organizer',
      element:<><Oragnizer/></>
    },
    {
      path:'/organizer/createevent',
      element:<><OrganizeEvent/></>
    },
    {
      path:'/organizer/login',
      element:<><OrganizerLogin/></>
    },
    {
      path:'/organizer/signup',
      element:<><OraganizerSignUp/></>
    },
    {
      path:'/viewstudents',
      element:<><ViewStudents/></>
    },
    
  ])

  return (
    <>
    <RouterProvider router={router}>
      {router.element}
    </RouterProvider>
    </>
  )
}

export default App
