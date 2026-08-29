import PropTypes from 'prop-types';

import './Input.css';

/** Primary UI component for user interaction */
export const Input = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <input
      type="text"
      className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />
  );
};

Input.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the input be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Input contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
