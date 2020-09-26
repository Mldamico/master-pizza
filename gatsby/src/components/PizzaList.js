import React from 'react';
import { PizzaItem } from './PizzaItem';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;
export const PizzaList = ({ pizzas }) => {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
};
