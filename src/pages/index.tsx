import type { NextPage } from 'next'

import { FormEvent, useEffect, useState } from 'react'
import { SerchResults } from '../components/SearchResults';
import api from '../services/api';



const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(envent: FormEvent) {
    envent.preventDefault();

    if (!search.trim()) {
      return;
    }


    async function loadProducts(): Promise<void> {
      api
        .get(`produtos/${search}`)
        .then(response => {
          const data = response.data;
          setResults(data);
        });
    }

    loadProducts();


  }



  return (
    <div>
      <h1>search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type='submit'>Buscar</button>

      </form>

      <SerchResults results={results} />
    </div>
  )
}

export default Home
