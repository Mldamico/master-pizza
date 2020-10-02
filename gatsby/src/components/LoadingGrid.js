import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export const LoadingGrid = ({ count }) => {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles key={`loader-${i}`}>
          <p>
            <span className='mark'>Loading...</span>
          </p>
          <img
            src='data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII='
            width='500'
            height='400'
            className='loading'
            alt='Loading'
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
};
