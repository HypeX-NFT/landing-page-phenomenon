import smoothscroll from 'smoothscroll-polyfill';
import Landing from '@pages/Landing';
import SvgSprite from '@components/SvgSprite/SvgSprite';

smoothscroll.polyfill();

const App = () => {
    return (
        <>
            <SvgSprite />
            <Landing />
        </>
    );
};

export default App;
