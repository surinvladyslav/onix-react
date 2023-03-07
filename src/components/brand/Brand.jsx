import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Brand.css';

function Brand({
  title,
  description,
  url,
  active,
  onClick,
  onDragStart,
  onDragEnd,
  onDragLeave,
  onDragOver,
  onDrop
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={cn('brand', { active })}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
      draggable
    >
      <img className="brand-image" src={url} alt="brand" />
      <h5 className="brand-title">{title}</h5>
      <p className="brand-subtitle">{description}</p>
    </div>
  );
}

Brand.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

Brand.defaultProps = {
  title: 'test',
  description: 'test',
  url: '',
  active: false,
};

export default Brand;
