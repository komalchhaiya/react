import React from 'react';

export default function FruitList() {
  const fruits = ['kiwi','banana','apple','peru','strawberry'];

  return (
   <div className="p-4">
    <h2 className="text-xl font-bold mb-3">List of Fruits:</h2>
    <ul className="list-disc pl-5">
      {fruits.map((fruit, index) => (
        <li key={index} className="mb-1">{fruit}</li>
      ))}
      </ul>
    </div>
  );
}
