import PropTypes from 'prop-types';

function Button({className,type,txt,onClick,children}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
      <span>{txt}</span>
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  txt: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button;