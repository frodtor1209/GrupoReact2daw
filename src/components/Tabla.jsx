import React from 'react';

function Tabla() {
  const data = [
    { id: 1, name: 'Juan', age: 25 },
    { id: 2, name: 'Ana', age: 30 },
    { id: 3, name: 'Carlos', age: 22 },
  ];

  return (
    <table style={{ width: '50%', margin: '20px auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f4f4f4' }}>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Edad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
