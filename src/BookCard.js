import React from 'react';

export default function BookCard({
    name,
    author,
    title
  }) {
    return (
      <div>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
    );
  }