import { Card } from 'primereact';
import React from 'react';

export const Accordion = ({ itens }) => {
  const expressaoJSX = itens.map((item, key) => (
    <Card key={key} className='border-1 border-400'>
      <div>
        <i className='pi pi-angle-down'></i>
        <h5 className='inline ml-3'>{item.titulo}</h5>
      </div>
    </Card>
  ));
  return (
    <div>
      {itens.map((item, key) => (
        <div key={key}>
          <h4>{item.titulo}</h4>
          <p>{item.conteudo}</p>
        </div>
      ))}
    </div>
  );
};
