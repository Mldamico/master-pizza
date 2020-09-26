import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;

    .count {
      background: white;
      padding: 2px 5px;
    }

    .active {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      const existingToppings = acc[topping.id];
      if (existingToppings) {
        existingToppings.count += 1;
      } else {
        acc[topping.id] = { id: topping.id, name: topping.name, count: 1 };
      }
      return acc;
    }, {});

  return Object.values(counts).sort((a, b) => b.count - a.count);
}

export const ToppingsFilter = () => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  return (
    <ToppingsStyles>
      {toppingsWithCounts.map((topping) => (
        <Link key={topping.id} to={`/topping/${topping.name}`}>
          <span className='name'>{topping.name}</span>
          <span className='count'>{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
};
