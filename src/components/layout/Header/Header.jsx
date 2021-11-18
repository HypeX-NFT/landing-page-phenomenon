import { useState, useCallback } from 'react';
import clsx from 'clsx';
import { MAX_SCROLL_Y_POSITION_LOGO } from '@constants';
import Container from '@components/layout/Container/Container';
import Menu from './Menu/Menu';
import classes from './Header.module.css';
import logo from '@images/logo.png';

const Header = () => {
    const [logoAdditionalClass, setLogoAdditionalClass] = useState();

    const toggleLogo = useCallback(hasMobMenu => {
        if (!hasMobMenu) {
            setLogoAdditionalClass('');

            return;
        }

        if (window.pageYOffset > MAX_SCROLL_Y_POSITION_LOGO) {
            setLogoAdditionalClass(classes.headerLogoHide);
        } else {
            setLogoAdditionalClass('');
        }
    }, []);

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.headerInner}>
                    <a href="/" className={clsx(classes.headerLogo, logoAdditionalClass)}>
                        <img src={logo} alt="logo" />
                    </a>
                    <Menu toggleLogo={toggleLogo} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
