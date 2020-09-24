import React from 'react';
import { PizzaItem } from './PizzaItem';

export const PizzaList = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
