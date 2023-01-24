import './App.css';

// useSelector is a hook provided by the react-redux library
import { useSelector } from 'react-redux';

function App () {
    // useSelector accepts a function that tells it what part of the store you want.
    // here we return the whole store
    const reduxStore = useSelector(store => store)
    const count = useSelector(store => store.count)


    return (
      <div>
        {/* Render the entire reduxStore to our DOM, as a JS object (JSON) */}
        <pre>{JSON.stringify(reduxStore)}</pre>
        <p>Count is: {count}</p>

      </div>
    );

}

export default App;
