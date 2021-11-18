import clsx from 'clsx';
import Container from '@components/layout/Container/Container';
import classes from './MetaverseBanner.module.css';

const MetaverseBanner = () => {
    return (
        <div className={classes.metaverse}>
            <Container>
                <div className={clsx(classes.metaverseInner, 'text-center')}>
                    <h2 className={classes.metaverseTitle}>A metaverse for sneaker lovers</h2>
                </div>
            </Container>
        </div>
    );
};

export default MetaverseBanner;
