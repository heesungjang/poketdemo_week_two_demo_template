import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { formatPokemonData } from '../utils/pokemon-helper';
import Loader from './Loader';

const PokemonsContainer = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    /*  선택된 포켓몬 타입으로 해당 타입을 가진 포켓몬 데이터를 불러오는 API   */
    const API_END_POINT = `https://pokeapi.co/api/v2/type/${type}`;

    /**포켓몬 데이터 포멧(정규화 작업)을 위해서는
     * @formatPokemonData 함수를 사용하세요.
     * ../utils/pokemon-helper.js 에서 확인하세요.
     */
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='pokemons-container'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsContainer;
