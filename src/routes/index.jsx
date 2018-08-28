import HomePage from "views/HomePage/HomePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import FaqPage from "views/FaqPage/FaqPage.jsx";

var indexRoutes = [
    {path: "/", name: "HomePage", component: HomePage},
    {path: "/login-page", name: "LoginPage", component: LoginPage },
    {path: "/signup-page", name: "SignupPage", component: SignupPage},
    {path: "/faq-page", name: "FaqPage", component: FaqPage},
];

export default indexRoutes;