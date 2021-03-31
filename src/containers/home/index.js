import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCompaniesApi } from '../../services/companies.service';
import './index.scss';
import Header from '../../components/Header';


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
        <Header />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
