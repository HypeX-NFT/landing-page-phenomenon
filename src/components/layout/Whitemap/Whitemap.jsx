import { forwardRef } from 'react';
import Container from '@components/layout/Container/Container';
import MetaverseBanner from '@components/layout/MetaverseBanner/MetaverseBanner';
import classes from './Whitemap.module.css';
import stubImg from '@images/3dCard.gif';
import airMagImgPng from '@images/AirMAg.png';
import airMagImgWebp from '@images/AirMAg.webp';
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
                            <div className={classes.whitemapTextContent}>
                                <h3 className={classes.whitemapTitle}>
                                    NFTs for{' '}
                                    <span className="d-block">
                                        <span className="color-text-primary">real-world</span> sneakers
                                    </span>
                                </h3>
                                <div className={classes.whitemapText}>
                                    <p>
                                        Everything in the HypeX Metaverse will have a physical copy in the real world.
                                    </p>
                                    <p>
                                        Users can <span className="color-text-primary">trade/collect NFTs</span> to
                                        redeem the actual physical sneaker.
                                    </p>
                                    <p>
                                        It removes authentication and delivery processes leading to an increased
                                        liquidity of the sneaker market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.whitemapBlock}>
                            <div className={classes.whitemapMediaWrap}>
                                <div className={classes.whitemapCards}>
                                    <div className={classes.whitemapCard} >
                                        <picture>
                                            <source srcSet={yeezyImgWebp} type="image/webp" />
                                            <img src={yeezyImgPng} alt="yeezy sneakers" />
                                        </picture>
                                    </div>
                                    <div className={classes.whitemapCard} >
                                        <picture>
                                            <source srcSet={travisImgWebp} type="image/webp" />
                                            <img src={travisImgPng} alt="travis sneakers" />
                                        </picture>
                                    </div>
                                    <div className={classes.whitemapCard} >
                                        <picture>
                                            <source srcSet={airMagImgWebp} type="image/webp" />
                                            <img src={airMagImgPng} alt="airMag sneakers" />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.whitemapTextContent}>
                                <h3 className={classes.whitemapTitle}>
                                    <span className="color-text-primary">FRACTIONALIZEd</span> NFTs
                                </h3>
                                <div className={classes.whitemapText}>
                                    <p>Want to own a pair of 2011 Nike Mag?</p>
                                    <p>
                                        HypeX offers <span className="color-text-primary">fractionalized NFTs</span> of
                                        physical sneakers.
                                    </p>
                                    <p>
                                        Users can spend 1/100 of the original price to{' '}
                                        <span className="color-text-primary">own</span> and{' '}
                                        <span className="color-text-primary">wear</span> these sneakers in the HypeX
                                        metaverse.
                                    </p>
                                </div>
                            </div>
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
