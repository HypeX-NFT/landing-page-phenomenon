import { useRef, useState } from 'react';
import AppContext from '@context/AppContext';
import Header from '@components/layout/Header/Header';
import Hero from '@components/layout/Hero/Hero';
import Whitemap from '@components/layout/Whitemap/Whitemap';
import Benefits from '@components/layout/Benefits/Benefits';
import Roadmap from '@components/layout/Roadmap/Roadmap';
import Hold from '@components/layout/Hold/Hold';
import Tokenomics from '@components/layout/Tokenomics/Tokenomics';
import Team from '@components/layout/Team/Team';
import Partners from '@components/layout/Partners/Partners';

const Landing = () => {
    const whitemapSectionRef = useRef(null);
    const benefitsSectionRef = useRef(null);
    const roadmapSectionRef = useRef(null);
    const teamSectionRef = useRef(null);
    const partnersSectionRef = useRef(null);
    const sectionsRefs = useRef([
        whitemapSectionRef,
        benefitsSectionRef,
        roadmapSectionRef,
        teamSectionRef,
        partnersSectionRef,
    ]);

    const [shouldShowHeader, setShouldShowHeader] = useState(true);

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setShouldShowHeader(true);
        } else {
            setShouldShowHeader(false);
        }
        prevScrollpos = currentScrollPos;
    };

    return (
        <AppContext.Provider
            value={{
                sectionsRefs,
            }}
        >
            {shouldShowHeader ? <Header /> : null}
            <Hero />
            <Whitemap ref={whitemapSectionRef} />
            <Benefits ref={benefitsSectionRef} />
            <Roadmap ref={roadmapSectionRef} />
            <Hold />
            <Tokenomics />
            <Team ref={teamSectionRef} />
            <Partners ref={partnersSectionRef} />
        </AppContext.Provider>
    );
};

export default Landing;
