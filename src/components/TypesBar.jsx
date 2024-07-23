import { useEffect, useState } from 'react';
import { getTypeIconSrc } from '../utils/pokemon-helper';

const TypesBar = ({ toggleType }) => {
  const [types, setTypes] = useState([]);

  const fetchTypes = async () => {
    /*  모든 포켓몬 타입들을 불러오는 API   */
    const API_END_POINT = `https://pokeapi.co/api/v2/type/`;

    /**
     * @필터
     *
     * 반환된 타입 데이터를 보면 몇가지 필요하지 않은 타입들이 있습니다.
     * 아래 필터 조건을 적용하여 필요한 타입만 남기세요.
     *
     * name !== 'unknown' && name !== 'shadow' && name !== 'stellar'
     *
     * hint: filter 함수를 사용하세요.
     */
  };

  return (
    <nav className='types-bar'>
      {types.map(({ name }) => {
        const typeImg = getTypeIconSrc(name);

        return (
          <a key={name} className={name} onClick={() => toggleType(name)}>
            <img src={typeImg} alt={name} />
          </a>
        );
      })}
    </nav>
  );
};

export default TypesBar;
