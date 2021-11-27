import { useRef, useEffect } from 'react';
import { rAF } from '@utils';
import clsx from 'clsx';
import { useInViewport } from '@hooks';
import {
    IMG_TRANSLATE_DIVIDER_NUMBER,
    TITLE_TRANSLATE_DIVIDER_NUMBER,
    MAIN_CONTENT_CIRCLE_TRANSLATE_DIVIDER_NUMBER,
    SECTION_TRANSLATE_DIVIDER_NUMBER,
    SECTION_INNER_TRANSLATE_DIVIDER_NUMBER,
    VAR_TX_HERO_IMG,
    VAR_TY_HERO_IMG,
    VAR_TX_HERO_TITLE,
    VAR_TY_HERO_TITLE,
    VAR_TX_HERO_MAIN_CONTENT_CIRCLE,
    VAR_TY_HERO_MAIN_CONTENT_CIRCLE,
    VAR_TX_HERO_SECTION_CIRCLE,
    VAR_TY_HERO_SECTION_CIRCLE,
    VAR_TX_HERO_SECTION_INNER_CIRCLE1,
    VAR_TY_HERO_SECTION_INNER_CIRCLE1,
    VAR_TX_HERO_SECTION_INNER_CIRCLE2,
    VAR_TY_HERO_SECTION_INNER_CIRCLE2,
} from '@constants';

import Header from './Header/Header';
import Container from '@components/layout/Container/Container';
import Socials from '@components/ui/Socials/Socials';
import AnnouncementBanner from '@components/layout/AnnouncementBanner/AnnouncementBanner';
import classes from './Hero.module.css';
import mainImagePng from '@images/sneakers.png';
import mainImageWebp from '@images/sneakers.webp';

const Hero = () => {
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const mainContentRef = useRef(null);
    const sectionRef = useRef(null);
    const sectionInnerRef = useRef(null);
    const isSectionInViewport = useInViewport(sectionRef);

    useEffect(() => {
        const mouseMoveHandler = e => {
            const $img = imgRef.current;
            const $title = titleRef.current;
            const $mainContent = mainContentRef.current;
            const $section = sectionRef.current;
            const $sectionInner = sectionInnerRef.current;
            const imgX = e.pageX - $img.offsetLeft - $img.offsetWidth / 2;
            const imgY = e.pageY - $img.offsetTop - $img.offsetHeight / 2;
            const imgPosX = imgX / IMG_TRANSLATE_DIVIDER_NUMBER;
            const imgPosY = imgY / IMG_TRANSLATE_DIVIDER_NUMBER;
            const titleX = e.pageX - $title.offsetLeft - $title.offsetWidth / 2;
            const titleY = e.pageY - $title.offsetTop - $title.offsetHeight / 2;
            const titlePosX = titleX / TITLE_TRANSLATE_DIVIDER_NUMBER;
            const titlePosY = titleY / TITLE_TRANSLATE_DIVIDER_NUMBER;
            const mainContentCircleX = e.pageX - $mainContent.offsetLeft - $mainContent.offsetWidth / 2;
            const mainContentCircleY = e.pageY - $mainContent.offsetTop - $mainContent.offsetHeight / 2;
            const mainContentCirclePosX = mainContentCircleX / MAIN_CONTENT_CIRCLE_TRANSLATE_DIVIDER_NUMBER;
            const mainContentCirclePosY = mainContentCircleY / MAIN_CONTENT_CIRCLE_TRANSLATE_DIVIDER_NUMBER;
            const sectionX = e.pageX - $section.offsetLeft - $section.offsetWidth / 2;
            const sectionY = e.pageY - $section.offsetTop - $section.offsetHeight / 2;
            const sectionPosX = sectionX / SECTION_TRANSLATE_DIVIDER_NUMBER;
            const sectionPosY = sectionY / SECTION_TRANSLATE_DIVIDER_NUMBER;
            const sectionInnerX = e.pageX - $sectionInner.offsetLeft - $sectionInner.offsetWidth / 2;
            const sectionInnerY = e.pageY - $sectionInner.offsetTop - $sectionInner.offsetHeight / 2;
            const sectionInnerPosX = sectionInnerX / SECTION_INNER_TRANSLATE_DIVIDER_NUMBER;
            const sectionInnerPosY = sectionInnerY / SECTION_INNER_TRANSLATE_DIVIDER_NUMBER;

            $img.style.setProperty(VAR_TX_HERO_IMG, `${-imgPosX}px`);
            $img.style.setProperty(VAR_TY_HERO_IMG, `${imgPosY}px`);
            $title.style.setProperty(VAR_TX_HERO_TITLE, `${titlePosX}px`);
            $title.style.setProperty(VAR_TY_HERO_TITLE, `${-titlePosY}px`);
            $mainContent.style.setProperty(VAR_TX_HERO_MAIN_CONTENT_CIRCLE, `${mainContentCirclePosX}px`);
            $mainContent.style.setProperty(VAR_TY_HERO_MAIN_CONTENT_CIRCLE, `${mainContentCirclePosY}px`);
            $section.style.setProperty(VAR_TX_HERO_SECTION_CIRCLE, `${-sectionPosX}px`);
            $section.style.setProperty(VAR_TY_HERO_SECTION_CIRCLE, `${-sectionPosY}px`);
            $sectionInner.style.setProperty(VAR_TX_HERO_SECTION_INNER_CIRCLE1, `${sectionInnerPosX}px`);
            $sectionInner.style.setProperty(VAR_TY_HERO_SECTION_INNER_CIRCLE1, `${-sectionInnerPosY}px`);
            $sectionInner.style.setProperty(VAR_TX_HERO_SECTION_INNER_CIRCLE2, `${-sectionInnerPosX}px`);
            $sectionInner.style.setProperty(VAR_TY_HERO_SECTION_INNER_CIRCLE2, `${sectionInnerPosY}px`);
        };

        const resetMouseMove = () => {
            const $img = imgRef.current;
            const $title = titleRef.current;
            const $mainContent = mainContentRef.current;
            const $section = sectionRef.current;
            const $sectionInner = sectionInnerRef.current;

            $img.style.setProperty(VAR_TX_HERO_IMG, '0px');
            $img.style.setProperty(VAR_TY_HERO_IMG, '0px');
            $title.style.setProperty(VAR_TX_HERO_TITLE, '0px');
            $title.style.setProperty(VAR_TY_HERO_TITLE, '0px');
            $mainContent.style.setProperty(VAR_TX_HERO_MAIN_CONTENT_CIRCLE, '0px');
            $mainContent.style.setProperty(VAR_TY_HERO_MAIN_CONTENT_CIRCLE, '0px');
            $section.style.setProperty(VAR_TX_HERO_SECTION_CIRCLE, '0px');
            $section.style.setProperty(VAR_TY_HERO_SECTION_CIRCLE, '0px');
            $sectionInner.style.setProperty(VAR_TX_HERO_SECTION_INNER_CIRCLE1, '0px');
            $sectionInner.style.setProperty(VAR_TY_HERO_SECTION_INNER_CIRCLE1, '0px');
            $sectionInner.style.setProperty(VAR_TX_HERO_SECTION_INNER_CIRCLE2, '0px');
            $sectionInner.style.setProperty(VAR_TY_HERO_SECTION_INNER_CIRCLE2, '0px');
        };

        const onMouseMove = e => {
            rAF(mouseMoveHandler)(e);
        };

        if (isSectionInViewport) {
            window.addEventListener('mousemove', onMouseMove, { passive: true });
        } else {
            resetMouseMove();
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove, { passive: true });
        };
    }, [isSectionInViewport]);

    return (
        <>
            <Header />
            <section className={classes.hero} ref={sectionRef}>
                <Container>
                    <div className={classes.heroInner} ref={sectionInnerRef}>
                        <div className={classes.heroContent}>
                            <div className={classes.heroMainContent} ref={mainContentRef}>
                                <h1 className={classes.heroTitle} ref={titleRef}>
                                    HypeX
                                </h1>
                                <div className={classes.heroMainImgWrap}>
                                    <div className={clsx(classes.animated, classes.vanishIn)}>
                                        <picture>
                                            <source srcSet={mainImageWebp} type="image/webp" />
                                            <img src={mainImagePng} alt="sneaker" ref={imgRef} />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.heroSubtitle}>
                                Metaverse for
                                <p>Sneaker Lovers</p>
                            </div>
                        </div>
                    </div>
                    <Socials additionalClasses={[classes.heroSocials]} />
                </Container>
            </section>
            <AnnouncementBanner />
        </>
    );
};

export default Hero;
