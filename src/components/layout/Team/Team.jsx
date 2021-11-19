import { forwardRef } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './Team.module.css';
import member1Jpg from '@images/member1.png';
import member1Webp from '@images/member1.webp';
import member2Jpg from '@images/member2.png';
import member2Webp from '@images/member2.webp';
import member3Jpg from '@images/member3.png';
import member3Webp from '@images/member3.webp';
import member4Jpg from '@images/member4.png';
import member4Webp from '@images/member4.webp';
import member5Png from '@images/member5.png';
import member5Webp from '@images/member5.webp';
import member6Png from '@images/member6.png';
import member6Webp from '@images/member6.webp';

const Team = forwardRef((_, ref) => {
    const redirect = (link) => {
        window.location = link;
    };
    return (
        <section id="team" className={classes.team} ref={ref}>
            <Container>
                <div className={classes.teamInner}>
                    <h2 className={clsx(classes.teamTitle, 'text-center')}>Our Team</h2>
                    <div className={classes.teamCards}>
                        <ul className={classes.teamMainCards}>
                            <li className={classes.teamCard}>
                                <picture>
                                    <source srcSet={member1Webp} type="image/webp" />
                                    <img className={classes.teamPhotoMemberClickable} src={member1Jpg} alt="Stark" onClick={()=>{
                                        redirect('https://www.linkedin.com/in/mingchenzhang');
                                    }} />
                                </picture>
                                <div className={classes.teamMemberFullName}>Stark Zhang</div>
                                <div className={classes.teamMemberPosition}>CO-FOUNDER &#38; CEO</div>
                                <p className={classes.teamMemberExperience}>
                                    USC &#38; CMU Computer Science Serial Entrepreneur Smart Contract Engineer Sneaker
                                    Expert
                                </p>
                            </li>
                            <li className={classes.teamCard}>
                                <picture>
                                    <source srcSet={member2Webp} type="image/webp" />
                                    <img className={classes.teamPhotoMemberClickable} src={member2Jpg} alt="Ian" onClick={()=>{
                                        redirect('https://www.linkedin.com/in/yuecheng-wang');
                                    }} />
                                </picture>
                                <div className={classes.teamMemberFullName}>Ian Wang</div>
                                <div className={classes.teamMemberPosition}>CO-FOUNDER &#38; CMO</div>
                                <p className={classes.teamMemberExperience}>
                                    USC CommunIcation Sneaker Influencer 3+ years Tiktok Strategist
                                </p>
                            </li>
                            <li className={classes.teamCard}>
                                <picture>
                                    <source srcSet={member3Webp} type="image/webp" />
                                    <img className={classes.teamPhotoMemberClickable} src={member3Jpg} alt="Xin" onClick={()=>{
                                        redirect('https://www.linkedin.com/in/xinhan');
                                    }} />
                                </picture>
                                <div className={classes.teamMemberFullName}>Xin Han</div>
                                <div className={classes.teamMemberPosition}>CO-FOUNDER &#38; CTO</div>
                                <p className={classes.teamMemberExperience}>
                                    TSInghua University CS PHD UC Berkeley MBA Sr. PM at Amazon &#38; eBay Sr. Software
                                    Engineer at CIENA Founder at VIPShop Research Center &#38; Dmall.com &#38; Jian24
                                </p>
                            </li>
                            <li className={classes.teamCard}>
                                <picture>
                                    <source srcSet={member5Webp} type="image/webp" />
                                    <img className={classes.teamPhotoMember} src={member5Png} alt="Yingarena" />
                                </picture>
                                <div className={classes.teamMemberFullName}>Yingarena</div>
                                <div className={classes.teamMemberPosition}>Public Relations</div>
                            </li>
                            <li className={classes.teamCard}>
                                <picture>
                                    <source srcSet={member6Webp} type="image/webp" />
                                    <img className={classes.teamPhotoMember} src={member6Png} alt="Arpit A." />
                                </picture>
                                <div className={classes.teamMemberFullName}>Arpit A.</div>
                                <div className={classes.teamMemberPosition}>DESIGN LEAD</div>
                            </li>
                            <li className={classes.teamCard}>
                                <picture>
                                    <source srcSet={member4Webp} type="image/webp" />
                                    <img className={classes.teamPhotoMember} src={member4Jpg} alt="Turbo" />
                                </picture>
                                <div className={classes.teamMemberFullName}>Turbo</div>
                                <div className={classes.teamMemberPosition}>MASCOT</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
});

Team.displayName = 'Team';

export default Team;
