import { BrowserRouter } from 'react-router-dom';
import RouterConfig from '../src/navigation/RouterConfig';
import { Authentication } from './navigation/AuthenticatedContext';

function App() {
  return (
    <Authentication>
      <div>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
    </Authentication>
  );
}

export default App;
