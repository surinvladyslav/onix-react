import React, { useContext, useState } from 'react';
import cn from 'classnames';

import { BrandContext } from '../../contexts/brandContext';
import { actions } from '../../reducers/brandReducer';

import './Input.css';

function Input() {
  const {
    input,
    dispatch
  } = useContext(BrandContext);

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (message.trim()) {
        dispatch({
          type: actions.CHANGE_BRAND,
          payload: {
            brandId: input.brandId,
            title: message.trim(),
          }
        });
      }
      dispatch({ type: actions.INPUT, payload: false });
      setMessage('');
    }
  };

  const handleClose = () => {
    dispatch({
      type:
      actions.INPUT,
      payload: {
        active: false,
        brandId: null
      }
    });
    setMessage('');
  };

  return (
    <div className={cn('brands-input', { active: input.active })}>
      <button
        onClick={handleClose}
        type="button"
      >
        close
      </button>
      <input
        type="text"
        placeholder="enter text..."
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Input;
