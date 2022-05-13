import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => console.log('clicked')}
      />
    </li>
  );
}

TodoItem.propTypes = { todo: PropTypes.string.isRequired };

export default TodoItem;
