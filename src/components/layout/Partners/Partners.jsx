import { forwardRef } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './Partners.module.css';
import logo1Png from '@images/partner-logo-1.png';
import logo1Webp from '@images/partner-logo-1.webp';
import logo2Png from '@images/partner-logo-2.png';
import logo2Webp from '@images/partner-logo-2.webp';
import logo3Png from '@images/partner-logo-3.png';
import logo3Webp from '@images/partner-logo-3.webp';
import logo4Png from '@images/partner-logo-4.png';
import logo4Webp from '@images/partner-logo-4.webp';
import logo5Png from '@images/partner-logo-5.png';
import logo5Webp from '@images/partner-logo-5.webp';
import logo6Png from '@images/partner-logo-6.png';
import logo6Webp from '@images/partner-logo-6.webp';
import logo7Png from '@images/partner-logo-7.png';
import logo7Webp from '@images/partner-logo-7.webp';
import logo8Png from '@images/partner-logo-8.png';
import logo8Webp from '@images/partner-logo-8.webp';
import logo9Png from '@images/partner-logo-9.png';
import logo9Webp from '@images/partner-logo-9.webp';
import logo10Png from '@images/partner-logo-10.png';
import logo10Webp from '@images/partner-logo-10.webp';
import logo11Png from '@images/partner-logo-11.png';
import logo11Webp from '@images/partner-logo-11.webp';
import logo12Png from '@images/partner-logo-12.png';
import logo12Webp from '@images/partner-logo-12.webp';
import logo13Png from '@images/partner-logo-13.png';
import logo13Webp from '@images/partner-logo-13.webp';
import logo14Png from '@images/partner-logo-14.png';
import logo14Webp from '@images/partner-logo-14.webp';
import logo15Png from '@images/partner-logo-15.png';
import logo15Webp from '@images/partner-logo-15.webp';
import logo16Png from '@images/partner-logo-16.png';
import logo16Webp from '@images/partner-logo-16.webp';
import logo17Png from '@images/partner-logo-17.png';
import logo17Webp from '@images/partner-logo-17.webp';
import logo18Png from '@images/partner-logo-18.png';
import logo18Webp from '@images/partner-logo-18.webp';
import logo19Png from '@images/partner-logo-19.png';
import logo19Webp from '@images/partner-logo-19.webp';
import logo20Png from '@images/partner-logo-20.png';
import logo20Webp from '@images/partner-logo-20.webp';

const partners = [
    {
        srcPng: logo1Png,
        srcWebp: logo1Webp,
        alt: 'Logo',
        link: 'https://polygon.technology/',
    },
    {
        srcPng: logo2Png,
        srcWebp: logo2Webp,
        alt: 'Logo',
        link: 'https://www.skyvisioncapital.com/',
    },
    {
        srcPng: logo3Png,
        srcWebp: logo3Webp,
        alt: 'Logo',
        link: 'https://polkastarter.com/',
    },
    {
        srcPng: logo4Png,
        srcWebp: logo4Webp,
        alt: 'Logo',
        link: 'https://www.incuba.capital/',
    },
    {
        srcPng: logo5Png,
        srcWebp: logo5Webp,
        alt: 'Logo',
        link: 'https://www.zonff.partners/#/home',
    },
    {
        srcPng: logo6Png,
        srcWebp: logo6Webp,
        alt: 'Logo',
        link: 'https://au21.capital/',
    },
    {
        srcPng: logo7Png,
        srcWebp: logo7Webp,
        alt: 'Logo',
        link: 'http://www.7xvc.com/',
    },
    {
        srcPng: logo8Png,
        srcWebp: logo8Webp,
        alt: 'Logo',
        link: 'http://ldcap.com/',
    },
    {
        srcPng: logo9Png,
        srcWebp: logo9Webp,
        alt: 'Logo',
        link: 'https://www.basics.vip/',
    },
    {
        srcPng: logo10Png,
        srcWebp: logo10Webp,
        alt: 'Logo',
        link: 'https://magnusdigitalassets.com/',
    },
    {
        srcPng: logo11Png,
        srcWebp: logo11Webp,
        alt: 'Logo',
        link: 'https://www.faculty.group/',
    },
    {
        srcPng: logo12Png,
        srcWebp: logo12Webp,
        alt: 'Logo',
        link: 'https://www.newtribe.capital/',
    },
    {
        srcPng: logo13Png,
        srcWebp: logo13Webp,
        alt: 'Logo',
        link: 'https://ghafcapital.ae/',
    },
    {
        srcPng: logo14Png,
        srcWebp: logo14Webp,
        alt: 'Logo',
        link: 'https://www.dcentralcon.com/',
    },
    {
        srcPng: logo15Png,
        srcWebp: logo15Webp,
        alt: 'Logo',
        link: 'https://formation.fi/',
    },
    {
        srcPng: logo16Png,
        srcWebp: logo16Webp,
        alt: 'Logo',
        link: 'https://www.complex.com/',
    },
    {
        srcPng: logo17Png,
        srcWebp: logo17Webp,
        alt: 'Logo',
        link: 'https://sneakercon.com/',
    },
    {
        srcPng: logo18Png,
        srcWebp: logo18Webp,
        alt: 'Logo',
        link: 'https://www.nicekicks.com/',
    },
    {
        srcPng: logo19Png,
        srcWebp: logo19Webp,
        alt: 'Logo',
        link: 'https://supbrousa.com/',
    },
    {
        srcPng: logo20Png,
        srcWebp: logo20Webp,
        alt: 'Logo',
        link: 'https://www.kinjaz.com/',
    },
];

const Partners = forwardRef((_, ref) => {
    const redirect = (link) => {
        window.location = link;
    };
    return (
        <section id="partners" className={classes.partners} ref={ref}>
            <Container>
                <h2 className={clsx(classes.partnersTitle, 'text-center')}>Our partners</h2>
                <ul className={classes.partnersList}>
                    {partners.map(partner => (
                        <li key={partner.srcPng} className={classes.partnersItem}>
                            <div className={classes.partnersItemInner}>
                                <picture>
                                    <source srcSet={partner.srcWebp} type="image/webp" />
                                    <img src={partner.srcPng} alt={partner.alt} onClick={()=>{
                                        redirect(partner.link);
                                    }}/>
                                </picture>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
});

Partners.displayName = 'Partners';

export default Partners;
