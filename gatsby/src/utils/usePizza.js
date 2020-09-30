import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';
import { attachNamesAndPrices } from './attachNamesAndPrices';
import { calculateOrderTotal } from './calculateOrderTotal';
import formatMoney from './formatMoney';

export const usePizza = ({ pizzas, values }) => {
  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const addToOrder = (orderedPizza) => {
    setOrder([...order, orderedPizza]);
  };

  const removeFromOrder = (index) => {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeholder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Success! Come on down for your pizza!');
    }
  };

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
};
