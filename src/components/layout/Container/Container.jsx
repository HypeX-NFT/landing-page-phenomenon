import PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './Container.module.css';

const Container = props => {
    const { children, additionalClasses = [] } = props;

    return <div className={clsx(classes.container, additionalClasses)}>{children}</div>;
};

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    additionalClasses: PropTypes.array,
};

export default Container;
