/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import Menu from './Menu/Menu';
import classes from './Header.module.css';
import logo from '@images/logo.png';

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.headerInner}>
                    <a onClick={scrollToTop} className={clsx(classes.headerLogo)}>
                        <img src={logo} alt="logo" />
                    </a>
                    <Menu toggleLogo={()=>{}} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
