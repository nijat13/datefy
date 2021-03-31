import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCompaniesApi } from '../../services/companies.service';
import './index.scss';


const fetchCompanies = async () => {
  const companies = await getCompaniesApi();
  console.log('companies: ', companies);
}

function App() {
  
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
