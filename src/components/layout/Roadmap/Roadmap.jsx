import { forwardRef } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './Roadmap.module.css';
import roadmapDeskPng from '@images/roadmap.png';
import roadmapDeskWebp from '@images/roadmap.webp';
import roadmapMobPng from '@images/roadmap-mob.png';
import roadmapmobWebp from '@images/roadmap-mob.webp';
import arrow from '@images/arrow.svg';

const Roadmap = forwardRef((_, ref) => {
    return (
        <section id="roadmap" className={classes.roadmap} ref={ref}>
            <Container>
                <h2 className={clsx(classes.roadmapTitle, 'text-center')}>Roadmap</h2>
            </Container>
            <div className={classes.roadmapInner}>
                <div className={classes.roadmapBox}>
                    <picture>
                        <source srcSet={roadmapDeskWebp} media="(min-width: 480px)" type="image/webp" />
                        <source srcSet={roadmapmobWebp} media="(max-width: 479px)" type="image/webp" />
                        <source srcSet={roadmapMobPng} media="(max-width: 479px)" type="image/png" />
                        <img className={classes.roadmapBoxImg} src={roadmapDeskPng} alt="roadmap hypex" />
                    </picture>
                    <div className={classes.roadmapList}>
                        <div className={classes.roadmapItem}>
                            <h4 className={clsx(classes.roadmapItemTitle, 'text-center')}>Prototype</h4>
                            <div className={classes.roadmapItemDescription}>
                                <ul>
                                    <li>
                                        · HypeX Web App <span className="color-text-primary">MVP</span>
                                    </li>
                                    <li>
                                        · HypeX Web App <span className="color-text-primary">MMP</span>
                                    </li>
                                    <li>
                                        · HypeX Web App <span className="color-text-primary">Alpha/Beta</span> Release:
                                        <ul>
                                            <li>- Frication NFTs</li>
                                            <li>- Mystery Box</li>
                                            <li>- Payment (Cards/PayPal)</li>
                                            <li>- Marketplace</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <img className={classes.roadmapItemArrow} src={arrow} alt="arrow" />
                        </div>
                        <div className={classes.roadmapItem}>
                            <h4 className={clsx(classes.roadmapItemTitle, 'text-center')}>Development</h4>
                            <div className={classes.roadmapItemDescription}>
                                <ul>
                                    <li>
                                        · HypeX Web App <span className="color-text-primary">Alpha/Beta</span> Release:
                                        <ul>
                                            <li>- NFT Forge (Redeem)</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        · HypeX Web Card Game <span className="color-text-primary">Alpha/Beta</span>{' '}
                                        Release:
                                        <ul>
                                            <li>- Fragment Refiner</li>
                                            <li>- NFT Morph</li>
                                        </ul>
                                    </li>
                                    <li>- $HYPEX token contract</li>
                                    <ul>
                                        <li>· Contract Audits</li>
                                        <li>· HYPEX <span className="color-text-primary">IDO/ICO</span> </li>
                                    </ul>
                                </ul>
                            </div>
                            <img className={classes.roadmapItemArrow} src={arrow} alt="arrow" />
                        </div>
                        <div className={classes.roadmapItem}>
                            <h4 className={clsx(classes.roadmapItemTitle, 'text-center')}>Polishing</h4>
                            <div className={classes.roadmapItemDescription}>
                                <ul>
                                    <li>
                                        · HypeX NFT <span className="color-text-primary">staking/loan</span>
                                    </li>
                                    <li>
                                        · HypeX <span className="color-text-primary">DAO</span>
                                    </li>
                                    <li>
                                        · HypeX <span className="color-text-primary">Games</span>
                                    </li>
                                    <li>
                                        · HypeX <span className="color-text-primary">PAY</span>
                                    </li>
                                </ul>
                            </div>
                            <img className={classes.roadmapItemArrow} src={arrow} alt="arrow" />
                        </div>
                        <div className={classes.roadmapItem}>
                            <h4 className={clsx(classes.roadmapItemTitle, 'text-center')}>New Features</h4>
                            <div className={classes.roadmapItemDescription}>
                                <ul>
                                    <li>
                                        · <span className="color-text-primary">Mobile app </span> development
                                        <ul>
                                            <li>- IOS</li>
                                            <li>- Android</li>
                                        </ul>
                                    </li>
                                    <li>
                                        · <span className="color-text-primary">Public launch</span> for web app
                                    </li>
                                    <li>· Metaverse Game</li>
                                </ul>
                            </div>
                            <img className={classes.roadmapItemArrow} src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Roadmap.displayName = 'Roadmap';

export default Roadmap;
