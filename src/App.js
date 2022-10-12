import './App.css';
import ForwardedRefExample from './components/forward-ref';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ForwardedRefExample />
      </ErrorBoundary>
    </div>
  );
}

export default App;
