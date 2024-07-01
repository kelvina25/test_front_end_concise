import {Link, useLocation} from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x && x !== "home")
  let breadcrumbPath = "/home"


  return (
    <div className="breadcrumbs">
      <Link to="/home" >Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1
        const decodedName = decodeURIComponent(name);

        return isLast ? (
          <span key={breadcrumbPath}> / {decodedName}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{decodedName}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
