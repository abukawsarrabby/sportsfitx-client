import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import ClassList from "../pages/Dashboard/ClassList/ClassList";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoutes";
import UpdateClass from "../pages/Dashboard/UpdateClass/UpdateClass";
import InstructorRoute from "./InstructorRoutes";
import AdminRoute from "./AdminRoutes";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/dashboard/make-payment/:id',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/my-selected-classes',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: '/dashboard/my-enrolled-classes',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: '/dashboard/add-new-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: '/dashboard/my-classes',
                element: <InstructorRoute><ClassList></ClassList></InstructorRoute>
            },
            {
                path: '/dashboard/update-class/:id',
                element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
            },
            {
                path: '/dashboard/manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: '/dashboard/manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
        ]
    },
])

export default router;