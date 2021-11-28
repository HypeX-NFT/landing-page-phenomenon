import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import djGif from '@images/dj.gif';
import invoiceGif from '@images/invoice.gif';
import unboxGif from '@images/unbox.gif';
import voteGif from '@images/vote.gif';
import gameGif from '@images/game.gif';
import stakingGif from '@images/staking.gif';
import classes from './Hold.module.css';

const Hold = () => {
    return (
        <section className={classes.hold}>
            <Container>
                <div className={classes.holdInner}>
                    <h2 className={clsx(classes.holdTitle, 'text-center')}>
                        Utilities of $HYPEX
                    </h2>
                    <div className={classes.holdBlock}>
                        <div className={clsx(classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={invoiceGif} alt="" />
                        </div>
                        <div className={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>1. Discounts</h4>
                                <p>Get discounts when you shop sneakers on HypeX.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.holdBlock}>
                        <div className={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>2. Game</h4>
                                <p>Spend $HYPEX to upgrade and forge sneaker NFTs in our game.</p>
                            </div>
                        </div>
                        <div className={clsx(classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={gameGif} alt="" />
                        </div>
                    </div>
                    <div className={classes.holdBlock}>
                        <div className={clsx(classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={unboxGif} alt="" />
                        </div>
                        <div className={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>3. Free Sneaker</h4>
                                <p>Eligible for getting monthly free sneaker NFTs and/or mystery boxes.</p>
                            </div>
                        </div>

                    </div>
                    <div className={classes.holdBlock}>
                        <div className={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>4. Dao</h4>
                                <p>
                                Vote on HypeX’s future regarding merchandise selection,
                                event hosting, and new features.
                                </p>
                            </div>
                        </div>
                        <div className={classes.holdBlockIconWrapper}>
                            <img className={classes.holdBlockIcon} src={voteGif} alt="" />
                        </div>
                    </div>
                    <div className={classes.holdBlock}>
                        <div className={clsx(classes.holdBlockIconWrapper)}>
                            <img className={classes.holdBlockIcon} src={djGif} alt="" />
                        </div>
                        <div className={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>5. Event</h4>
                                <p>
                                Participate in offline events hosted by HypeX. These events can vary from concerts to
                                parties for sneaker lovers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.holdBlock}>
                        <div className={classes.holdBlockText}>
                            <div className={classes.holdItem}>
                                <h4 className={clsx(classes.holdItemTitle)}>6. Staking</h4>
                                <p>
                                Stake $HYPEX in our liquidity pool to earn yields.
                                </p>
                            </div>
                        </div>
                        <div className={classes.holdBlockIconWrapper}>
                            <img className={classes.holdBlockIcon} src={stakingGif} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hold;
