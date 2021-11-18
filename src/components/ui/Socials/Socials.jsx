import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './Socials.module.css';

const socials = [
    { href: 'https://twitter.com', id: 'twitter' },
    { href: 'https://web.telegram.org', id: 'telegram' },
    { href: 'https://discord.com', id: 'discord' },
    { href: 'https://medium.com', id: 'medium' },
    { href: 'https://www.instagram.com', id: 'instagram' },
];

const Socials = props => {
    const { additionalClasses = [] } = props;

    return (
        <ul className={clsx(classes.socials, additionalClasses)}>
            {socials.map(social => (
                <li key={social.id} className={classes.socialsItem}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className={classes.socialsItemLink}>
                        <svg>
                            <use xlinkHref={`#icon-${social.id}`}></use>
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
};

Socials.propTypes = {
    additionalClasses: PropTypes.array,
};

export default memo(Socials);
