import clsx from 'clsx';
import FadeInSection from '@components/layout/FadeInSection';
import Container from '@components/layout/Container/Container';
import djGif from '@images/dj.gif';
import invoiceGif from '@images/invoice.gif';
import unboxGif from '@images/unbox.gif';
import voteGif from '@images/vote.gif';
import classes from './Hold.module.css';

const Hold = () => {
    return (
        <section className={classes.hold}>
            <Container>
                <div className={classes.holdInner}>
                    <h2 className={clsx(classes.holdTitle, 'text-center')}>
                        Why hold $HYPEX ?
                    </h2>
                    <div className={classes.holdBlock}>
                        <div className={clsx(classes.holdBlockIconLeftAlign, classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={invoiceGif} alt="" />
                        </div>
                        <FadeInSection classes={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>1. Discounts</h4>
                                <p>Get discounts when you shop sneakers on HypeX.</p>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className={classes.holdBlock}>
                        <FadeInSection classes={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>2. Free Sneaker</h4>
                                <p>Eligible for getting monthly free sneaker NFTs and/or mystery boxes.</p>
                            </div>
                        </FadeInSection>
                        <div className={clsx(classes.holdBlockIconRightAlign, classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={unboxGif} alt="" />
                        </div>
                    </div>
                    <div className={classes.holdBlock}>
                        <div className={classes.holdBlockIconWrapper}>
                            <img className={classes.holdBlockIcon} src={voteGif} alt="" />
                        </div>
                        <FadeInSection classes={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>3. Dao</h4>
                                <p>
                                Participate in DAO where you can vote on HypeX’s future regarding merchandise selection,
                                event hosting, and new features.
                                </p>
                            </div>
                        </FadeInSection>
                    </div>
                    <div className={classes.holdBlock}>
                        <FadeInSection classes={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>4. Event</h4>
                                <p>
                                Participate in offline events hosted by HypeX. These events can vary from concerts to
                                parties for sneaker lovers.
                                </p>
                            </div>
                        </FadeInSection>
                        <div className={clsx(classes.holdBlockIconRightAlign, classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={djGif} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hold;
