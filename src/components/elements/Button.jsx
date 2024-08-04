import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ className, type, txt, onClick, children, href }) {
  return href ? (
    <Link to={href}>
      {children}
      <span>{txt}</span>
    </Link>
  ) : (
    <button className={className} type={type} onClick={onClick}>
      {children}
      <span>{txt}</span>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  txt: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
};

export default Button;
