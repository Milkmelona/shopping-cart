import PropTypes from 'prop-types';

function Imgwrapper(props){

    const {children, className} = props;

    return <div className={`img-wrapper ${className}`}>{children}</div>;
}

Imgwrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  
Imgwrapper.defaultProps = {
    className: '',
  };

export default Imgwrapper;