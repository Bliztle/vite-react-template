import { QueryProvider } from './features/network/query';
import RootRouter from './routes/RootRouter';

function App() {
    return (
        <>
            <QueryProvider>
                <RootRouter />
            </QueryProvider>
        </>
    );
}

export default App;
