import { useEffect, useState } from 'react';
import { getCompaniesApi } from '../../services/companies.service';
import BoardTile from '../../components/BoardTile';
import './index.scss';


function Board() {
  const [companies, setCompanies] = useState([]);

  // Fetch companies
  const fetchCompanies = async () => {
    const companiesList = await getCompaniesApi();
    setCompanies(companiesList);
  }
  
  /**
   * OnComponentDidMount
   * Fetch the Companies list
   * Set it to the child card component
  */
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="Board">
      {companies.map((company, index) => (
        <BoardTile
          key={index}
          company={company}
        />
      ))}
    </div>
  );
}

export default Board;
