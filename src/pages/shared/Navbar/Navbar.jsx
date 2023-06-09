import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import Container from "../Container/Container";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
        <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
        <li><ActiveLink to='/dashboard '>Dashboard </ActiveLink></li>
    </>
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="bg-black sticky top-0 z-10">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow flex justify-center items-center rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-4xl text-white">SportsFitX</Link>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                                {navItems}
                            </ul>
                        </div>
                        {
                            user ? <><div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                                <Link onClick={handleLogOut}><Button label="Logout"></Button></Link></>
                                : <Link to={'/login'}><Button label="Login"></Button></Link>
                        }

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;