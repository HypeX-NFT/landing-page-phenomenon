import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './Tokenomics.module.css';
import tokenomicsDeskPng from '@images/tokenomics.png';
import tokenomicsDeskWebp from '@images/tokenomics.webp';
import tokenomicsMobPng from '@images/tokenomics-mob.png';
import tokenomicsmobWebp from '@images/tokenomics-mob.webp';

const Tokenomics = () => {
    return (
        <section className={classes.tokenomics}>
            <Container>
                <h2 className={clsx(classes.title, 'text-center')}>Tokenomics</h2>
                <div className={classes.info}>
                    <picture>
                        <source srcSet={tokenomicsDeskWebp} media="(min-width: 768px)" type="image/webp" />
                        <source srcSet={tokenomicsmobWebp} media="(max-width: 767px)" type="image/webp" />
                        <source srcSet={tokenomicsMobPng} media="(max-width: 767px)" type="image/png" />
                        <img className={classes.infoImg} src={tokenomicsDeskPng} alt="tokenomics hypex" />
                    </picture>
                </div>
            </Container>
        </section>
    );
};

export default Tokenomics;
