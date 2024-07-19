import PropTypes from "prop-types";
import _rem from "@/styles/remTransform";

export default function Icon({ id, className, width = "17", height = "17", mgr, ...props }) {
  return (
    <>
      {id && (
        <svg className={className} width={_rem(width)} height={_rem(height)} {...props} style={{marginRight: _rem(mgr)}}>
          <use href={`#${id}`} />
        </svg>
      )}
    </>
  );
}

Icon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  mgr: PropTypes.string,
  color: PropTypes.string,
};
