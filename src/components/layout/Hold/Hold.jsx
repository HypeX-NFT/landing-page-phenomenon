import clsx from 'clsx';
import FadeInSection from '@components/layout/FadeInSection';
import Container from '@components/layout/Container/Container';
import classes from './Hold.module.css';
import videoMov from '@videos/box-full.mov';

const Hold = () => {
    return (
        <section className={classes.hold}>
            <Container>
                <div className={classes.holdInner}>
                    <h2 className={clsx(classes.holdTitle, 'text-center')}>
                        Why hold $HYPEX ?
                    </h2>
                    <div className={classes.holdBlock}>
                        <div className={classes.holdBlockLeft}>
                            <div className={clsx(classes.holdVideoWrap, 'text-center')}>
                                <video autoPlay muted loop playsInline>
                                    <source src={videoMov} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <FadeInSection classes={classes.holdBlockRight}>
                            <ul className={classes.holdList}>
                                <li className={classes.holdItem}>
                                    <h4 className={clsx(classes.holdItemTitle, 'color-text-primary')}>1. Discounts</h4>
                                    <p>Get discounts when you shop sneakers on HypeX.</p>
                                </li>
                                <li className={classes.holdItem}>
                                    <h4 className={clsx(classes.holdItemTitle, 'color-text-primary')}>2. Free Sneaker</h4>
                                    <p>Eligible for getting monthly free sneaker NFTs and/or mystery boxes.</p>
                                </li>
                                <li className={classes.holdItem}>
                                    <h4 className={clsx(classes.holdItemTitle, 'color-text-primary')}>3. Dao</h4>
                                    <p>
                                Participate in DAO where you can vote on HypeX’s future regarding merchandise selection,
                                event hosting, and new features.
                                    </p>
                                </li>
                                <li className={classes.holdItem}>
                                    <h4 className={clsx(classes.holdItemTitle, 'color-text-primary')}>4. Event</h4>
                                    <p>
                                Participate in offline events hosted by HypeX. These events can vary from concerts to
                                parties for sneaker lovers.
                                    </p>
                                </li>
                            </ul>
                        </FadeInSection>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hold;
