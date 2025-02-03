import { LoaderPage } from '@/shared/ui/LoaderPage';
import './styles/index.scss';
import { AppRouter } from '@/app/providers/router';

const App = () => {
    return (
        <>
            <AppRouter />
        </>
    );
};

export default App;
