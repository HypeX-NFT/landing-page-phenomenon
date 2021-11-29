import { forwardRef } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './Partners.module.css';
import logo1Png from '@images/logo1.png';
import logo1ColorPng from '@images/logo1-color.png';
import logo2Png from '@images/partner-logo-2.png';
import logo2ColorPng from '@images/partner-logo-2.png';
import logo3Png from '@images/logo3.png';
import logo3ColorPng from '@images/logo3-color.png';
import logo4Png from '@images/logo4.png';
import logo4ColorPng from '@images/logo4-color.png';
import logo5Png from '@images/logo5.png';
import logo5ColorPng from '@images/logo5-color.png';
import logo6Png from '@images/partner-logo-6.png';
import logo6ColorPng from '@images/partner-logo-6.png';
import logo7Png from '@images/logo-7.png';
import logo7ColorPng from '@images/logo-7-color.png';
import logo8Png from '@images/partner-logo-8.png';
import logo8ColorPng from '@images/partner-logo-8.png';
import logo9Png from '@images/partner-logo-9.png';
import logo9ColorPng from '@images/partner-logo-9.png';
import logo10Png from '@images/logo-10.png';
import logo10ColorPng from '@images/logo-10-color.png';
import logo11Png from '@images/logo-11.png';
import logo11ColorPng from '@images/logo-11-color.png';
import logo12Png from '@images/logo-12.png';
import logo12ColorPng from '@images/logo-12-color.png';
import logo13Png from '@images/partner-logo-13.png';
import logo13ColorPng from '@images/partner-logo-13.png';
import logo14Png from '@images/logo-14.png';
import logo14ColorPng from '@images/logo-14-color.png';
import logo15Png from '@images/logo-15.png';
import logo15ColorPng from '@images/logo-15-color.png';
import logo16Png from '@images/logo-16.png';
import logo16ColorPng from '@images/logo-16-color.png';
import logo17Png from '@images/logo-17.png';
import logo17ColorPng from '@images/logo-17-color.png';
import logo18Png from '@images/logo-18.png';
import logo18ColorPng from '@images/logo-18-color.png';
import logo19Png from '@images/logo-19.png';
import logo19ColorPng from '@images/logo-19-color.png';
import logo20Png from '@images/logo-20.png';
import logo20ColorPng from '@images/logo-20-color.png';

const partners = [
    {
        srcPng: logo1Png,
        srcPngColor: logo1ColorPng,
        alt: 'Logo',
        link: 'https://polygon.technology/',
    },
    {
        srcPng: logo2Png,
        srcPngColor: logo2ColorPng,
        alt: 'Logo',
        link: 'https://www.skyvisioncapital.com/',
    },
    {
        srcPng: logo3Png,
        srcPngColor: logo3ColorPng,
        alt: 'Logo',
        link: 'https://polkastarter.com/',
    },
    {
        srcPng: logo4Png,
        srcPngColor: logo4ColorPng,
        alt: 'Logo',
        link: 'https://www.incuba.capital/',
    },
    {
        srcPng: logo5Png,
        srcPngColor: logo5ColorPng,
        alt: 'Logo',
        link: 'https://www.zonff.partners/#/home',
    },
    {
        srcPng: logo6Png,
        srcPngColor: logo6ColorPng,
        alt: 'Logo',
        link: 'https://au21.capital/',
    },
    {
        srcPng: logo7Png,
        srcPngColor: logo7ColorPng,
        alt: 'Logo',
        link: 'http://www.7xvc.com/',
    },
    {
        srcPng: logo8Png,
        srcPngColor: logo8ColorPng,
        alt: 'Logo',
        link: 'http://ldcap.com/',
    },
    {
        srcPng: logo9Png,
        srcPngColor: logo9ColorPng,
        alt: 'Logo',
        link: 'https://www.basics.vip/',
    },
    {
        srcPng: logo10Png,
        srcPngColor: logo10ColorPng,
        alt: 'Logo',
        link: 'https://magnusdigitalassets.com/',
    },
    {
        srcPng: logo11Png,
        srcPngColor: logo11ColorPng,
        alt: 'Logo',
        link: 'https://www.faculty.group/',
    },
    {
        srcPng: logo12Png,
        srcPngColor: logo12ColorPng,
        alt: 'Logo',
        link: 'https://www.newtribe.capital/',
    },
    {
        srcPng: logo13Png,
        srcPngColor: logo13ColorPng,
        alt: 'Logo',
        link: 'https://ghafcapital.ae/',
    },
    {
        srcPng: logo14Png,
        srcPngColor: logo14ColorPng,
        alt: 'Logo',
        link: 'https://www.dcentralcon.com/',
    },
    {
        srcPng: logo15Png,
        srcPngColor: logo15ColorPng,
        alt: 'Logo',
        link: 'https://formation.fi/',
    },
    {
        srcPng: logo16Png,
        srcPngColor: logo16ColorPng,
        alt: 'Logo',
        link: 'https://www.complex.com/',
    },
    {
        srcPng: logo17Png,
        srcPngColor: logo17ColorPng,
        alt: 'Logo',
        link: 'https://sneakercon.com/',
    },
    {
        srcPng: logo18Png,
        srcPngColor: logo18ColorPng,
        alt: 'Logo',
        link: 'https://www.nicekicks.com/',
    },
    {
        srcPng: logo19Png,
        srcPngColor: logo19ColorPng,
        alt: 'Logo',
        link: 'https://supbrousa.com/',
    },
    {
        srcPng: logo20Png,
        srcPngColor: logo20ColorPng,
        alt: 'Logo',
        link: 'https://www.kinjaz.com/',
    },
];

const Partners = forwardRef((_, ref) => {
    const redirect = (link) => {
        window.open(link, '_blank');
    };

    return (
        <section id="partners" className={classes.partners} ref={ref}>
            <Container>
                <h2 className={clsx(classes.partnersTitle, 'text-center')}>Our partners</h2>
                <ul className={classes.partnersList}>
                    {partners.map(partner => (
                        <li key={partner.srcPng} className={classes.partnersItem}>
                            <div className={classes.partnersItemInner} onClick={()=>{
                                redirect(partner.link);
                            }}>
                                <picture className={classes.black}>
                                    <img src={partner.srcPng} alt={partner.alt} />
                                </picture>
                                <picture className={classes.color}>
                                    <img src={partner.srcPngColor} alt={partner.alt} />
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
