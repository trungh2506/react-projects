import { Outlet, Link, NavLink, useNavigation } from "react-router-dom";
export default function Root() {
  const navigation = useNavigation();
  return (
    <div>
      <Link to="home">Home page</Link>
      <br />
      <Link to="about">About</Link>
      <br />
      <Link to="contact">Contact</Link>
      <br />
      <div className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
