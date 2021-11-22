import { useState, useEffect, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import AppContext from '@context/AppContext';
import clsx from 'clsx';
import { useMediaQuery, useToggle, useDocumentLockScrollY } from '@hooks';
import classes from './Menu.module.css';

const menuItems = [
    { href: 'https://docs.hypex.us/', text: 'WHITEPAPER' },
    { href: '#benefits', text: 'BENEFITS' },
    { href: '#roadmap', text: 'ROADMAP' },
    { href: '#team', text: 'TEAM' },
    { href: '#partners', text: 'PARTNERS' },
];

const Menu = props => {
    const { toggleLogo } = props;
    const { sectionsRefs } = useContext(AppContext);
    const [menuTransitionClass, setMenuTransitionClass] = useState('');
    const hasMobileMenu = useMediaQuery('(max-width: 767px)');
    const [isActiveMenu, toggleIsActiveMenu] = useToggle();
    const [activeNavHash, setActiveNavHash] = useState('');
    const { lockScrollY, unlockScrollY } = useDocumentLockScrollY();

    const redirect = (link) => {
        window.location = link;
    };

    useEffect(() => {
        if (hasMobileMenu) {
            !menuTransitionClass && setMenuTransitionClass(classes.menuTransition);
        } else {
            menuTransitionClass && setMenuTransitionClass('');
            isActiveMenu &&
                toggleIsActiveMenu(() => {
                    unlockScrollY();
                });
        }

        !isActiveMenu && toggleLogo(hasMobileMenu);
    }, [hasMobileMenu, isActiveMenu, menuTransitionClass, toggleIsActiveMenu, toggleLogo, unlockScrollY]);

    useEffect(() => {
        const scrollHandler = () => {
            const windowHeight = window.innerHeight;

            !isActiveMenu && toggleLogo(hasMobileMenu);

            sectionsRefs.current.forEach(sectionRef => {
                const $section = sectionRef.current;

                if (!$section) {
                    return;
                }

                const { top } = $section.getBoundingClientRect();
                const sectionHeight = $section.offsetHeight;

                if (top <= windowHeight / 2 && top + sectionHeight > windowHeight / 2) {
                    const hash = `#${$section.id}`;

                    setActiveNavHash(hash);
                }
            });
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollHandler, { passive: true });
        };
    }, [hasMobileMenu, isActiveMenu, sectionsRefs, toggleLogo]);

    const toggleMenuHandler = () => {
        if (!hasMobileMenu) {
            return;
        }

        toggleIsActiveMenu(isOpen => {
            isOpen ? lockScrollY() : unlockScrollY();
        });
    };

    const clickNavLinkHandler = e => {
        e.preventDefault();
        console.log(e);
        const id = e.target.getAttribute('href').replace(/^#/, '');
        const $section = sectionsRefs.current.find(sectionRef => sectionRef.current.id === id);

        if (hasMobileMenu) {
            toggleIsActiveMenu(() => {
                unlockScrollY();
                requestAnimationFrame(() => {
                    $section.current.scrollIntoView({
                        behavior: 'smooth',
                    });
                });
            });

            return;
        }

        $section.current.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <nav className={clsx(classes.menu, menuTransitionClass, isActiveMenu && classes.menuActive)}>
                <ul className={classes.menuList}>
                    {menuItems.map(item => {
                        if(item.text === 'WHITEPAPER') {
                            return (
                                <li key={item.href} className={classes.menuItem}>
                                    <a
                                        href={item.href}
                                        className={clsx(classes.menuItemLink)}
                                        onClick={() => {
                                            redirect(item.href);
                                        }}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            );
                        } else {
                            const activeClass = activeNavHash === item.href && classes.menuItemLinkActive;
                            return (
                                <li key={item.href} className={classes.menuItem}>
                                    <a
                                        href={item.href}
                                        className={clsx(classes.menuItemLink, activeClass)}
                                        onClick={clickNavLinkHandler}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            );
                        }

                    })}
                </ul>
            </nav>
            <button
                className={clsx(classes.menuToggler, isActiveMenu && classes.menuTogglerActive)}
                onClick={toggleMenuHandler}
            >
                <span></span>
            </button>
        </>
    );
};

Menu.propTypes = {
    toggleLogo: PropTypes.func.isRequired,
};

export default memo(Menu);
