import { forwardRef } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import FadeInSection from '@components/layout/FadeInSection';
import MetaverseBanner from '@components/layout/MetaverseBanner/MetaverseBanner';
import classes from './Whitemap.module.css';
import stubImg from '@images/card.gif';
import jordanImgPng from '@images/jordan1retro.png';
import jordanImgWebp from '@images/jordan1retro.webp';
import travisImgPng from '@images/Travis.png';
import travisImgWebp from '@images/Travis.webp';
import yeezyImgPng from '@images/Yeezy.png';
import yeezyImgWebp from '@images/Yeezy.webp';

const Whitemap = forwardRef((_, ref) => {
    return (
        <>
            <section id="whitemap" className={classes.whitemap} ref={ref}>
                <Container>
                    <div className={classes.whitemapInner}>
                        <div className={classes.whitemapBlock}>
                            <div className={classes.whitemapMediaWrap}>
                                <img className={classes.whitemapVideo} src={stubImg} alt="" />
                            </div>
                            <FadeInSection classes={classes.whitemapTextContent}>
                                <h3 className={classes.whitemapTitle}>
                                        NFTs for{' '}
                                    <span className="d-block">
                                        real-world sneakers
                                    </span>
                                </h3>
                                <div className={classes.whitemapText}>
                                    <p>
                                        Everything in the HypeX Metaverse will have a physical copy in the real world.
                                    </p>
                                    <p>
                                        Users can trade/collect NFTs to
                                        redeem the actual physical sneaker.
                                    </p>
                                    <p>
                                        It removes authentication and delivery processes leading to an increased
                                        liquidity of the sneaker market.
                                    </p>
                                </div>
                            </FadeInSection>

                        </div>
                        <div className={classes.whitemapBlock}>
                            <div className={classes.whitemapMediaWrap}>
                                <div className={classes.whitemapCards}>
                                    <div
                                        className={clsx(classes.whitemapCard, classes.forward)}
                                    >
                                        <picture className={classes.forward}>
                                            <source srcSet={yeezyImgWebp} type="image/webp" />
                                            <img src={yeezyImgPng} alt="yeezy sneakers" />
                                        </picture>
                                    </div>
                                    <div className={clsx(classes.whitemapCard)} >
                                        <picture>
                                            <source srcSet={travisImgWebp} type="image/webp" />
                                            <img src={travisImgPng} alt="travis sneakers" />
                                        </picture>
                                    </div>
                                    <div
                                        className={clsx(classes.whitemapCard, classes.backward)}
                                    >
                                        <picture className={classes.backward}>
                                            <source srcSet={jordanImgWebp} type="image/webp" />
                                            <img src={jordanImgPng} alt="airMag sneakers" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <FadeInSection
                                classes={clsx(classes.whitemapTextContentLeft, classes.whitemapTextContent)}>
                                <h3 className={classes.whitemapTitle}>
                                    FRACTIONALIZEd NFTs
                                </h3>
                                <div className={classes.whitemapText}>
                                    <p>Want to own a pair of 2011 Nike Mag?</p>
                                    <p>
                                        HypeX offers fractionalized NFTs of
                                        physical sneakers.
                                    </p>
                                    <p>
                                        Users can spend 1/100 of the original price to own and{' '}
                                        wear these sneakers in the HypeX
                                        metaverse.
                                    </p>
                                </div>
                            </FadeInSection>

                        </div>
                    </div>
                </Container>
            </section>
            <MetaverseBanner />
        </>
    );
});

Whitemap.displayName = 'Whitemap';

export default Whitemap;
