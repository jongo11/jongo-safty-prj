import PropTypes from 'prop-types';

function Button({className,type,txt,clickHandler,children}) {
  return (
    <button
      className={className}
      type={type}
      onClick={clickHandler}
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
  clickHandler: PropTypes.func,
  children: PropTypes.node,
}

export default Button;