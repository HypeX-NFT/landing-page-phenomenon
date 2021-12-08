import { memo } from 'react';
import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './AnnouncementBanner.module.css';


const AnnouncementBanner = () => {
    return (
        <div className={clsx(classes.banner, 'text-center')}>
            <Container>
                <div className={classes.bannerInner}>
                    <h2 className={classes.bannerTitle}>
                        $HYPEX IDO
                    </h2>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.bannerLink}>
                    </a>
                    <div className={classes.bannerEventDate}>Q1 2022</div>
                </div>
            </Container>
        </div>
    );
};

export default memo(AnnouncementBanner);
