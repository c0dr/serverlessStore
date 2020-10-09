import {loadStripe} from '@stripe/stripe-js';

import React, { useReducer, useEffect} from 'react';

const fetchCheckoutSession = async () => {
    return fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'useEffectUpdate':
        return {
          ...state,
          ...action.payload,
        };
      case 'setLoading':
        return { ...state, loading: action.payload.loading };
      case 'setError':
        return { ...state, error: action.payload.error };
      default:
        throw new Error();
    }
  }
  

const Checkout = () => {

    const handleClick = async (event) => {
        event.preventDefault();
      // Call your backend to create the Checkout session.
      const { sessionId } = await fetchCheckoutSession();
      // When the customer clicks on the button, redirect them to Checkout.
      const { error } = await state.stripe.redirectToCheckout({
        sessionId,
      });
    };


    const [state, dispatch] = useReducer(reducer, {
        stripe: null,
      });

      useEffect(() => {
        async function fetchConfig() {
          // Make sure to call `loadStripe` outside of a component’s render to avoid
          // recreating the `Stripe` object on every render.
          dispatch({
            type: 'useEffectUpdate',
            payload: { stripe: await loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh') },
          });
        }
        fetchConfig();
      }, []);

    return (
      <form>
        <button type="submit" onClick={handleClick}>
          Pay
        </button>
      </form>
    );
}

export default Checkout;
