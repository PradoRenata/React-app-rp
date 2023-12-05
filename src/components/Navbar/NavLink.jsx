const NavLink = ({href, text}) => {

    return (
      <a
        className="text-white text-lg px-6 py-2 hover:text-blue-400"
        href={href}
      >
        {text}
      </a>
    );
  };
  
  export default NavLink;