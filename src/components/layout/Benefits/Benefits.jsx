import { forwardRef } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './Benefits.module.css';
import sneakerInfoPng from '@images/sneaker-info.png';
import sneakerInfoWebp from '@images/sneaker-info.webp';
import appleWatchPng from '@images/apple-watch.png';
import appleWatchWebp from '@images/apple-watch.webp';
import shoePng from '@images/shoe.png';
import shoeWebp from '@images/shoe.webp';

const Benefits = forwardRef((_, ref) => {
    return (
        <section id="benefits" className={classes.benefits} ref={ref}>
            <Container>
                <h2 className={clsx(classes.benefitsTitle, 'text-center')}>
                    <span className="color-text-primary">Benefits</span> of NFT
                </h2>
                <div className={classes.benefitsBlocks}>
                    <div className={classes.benefitsBlock}>
                        <div className={classes.benefitsBlockInner}>
                            <div className={clsx(classes.benefitsMedia, 'text-center')}>
                                <picture>
                                    <source srcSet={sneakerInfoWebp} type="image/webp" />
                                    <img src={sneakerInfoPng} alt="sneaker info" />
                                </picture>
                            </div>
                            <div className={classes.benefitsTextContent}>
                                <h3 className={classes.benefitsTextTitle}>Crypto features</h3>
                                <div className={classes.benefitsText}>
                                    <p>
                                        Users can <span className="color-text-primary">stake</span> NFTs to earn yields
                                        as well as <span className="color-text-primary">deposit</span> their NFTs for
                                        collateral loans
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.benefitsBlock}>
                        <div className={classes.benefitsBlockInner}>
                            <div className={clsx(classes.benefitsMedia, 'text-center')}>
                                <picture>
                                    <source srcSet={appleWatchWebp} type="image/webp" />
                                    <img src={appleWatchPng} alt="apple watch" />
                                </picture>
                            </div>
                            <div className={classes.benefitsTextContent}>
                                <h3 className={classes.benefitsTextTitle}>Games</h3>
                                <div className={classes.benefitsText}>
                                    <p>
                                        By playing games and completing interactive tasks, users can earn{' '}
                                        <span className="color-text-primary">daily rewards.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.benefitsMore}>
                    <picture>
                        <source srcSet={shoeWebp} type="image/webp" />
                        <img src={shoePng} alt="more sneakers" />
                    </picture>
                </div>
            </Container>
        </section>
    );
});

Benefits.displayName = 'Benefits';

export default Benefits;
