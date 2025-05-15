import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Dashboard() {
  const [estado, setEstado] = useState('Todos');

  // Dados mockados (substitua por API real)
  const dadosEvasao = {
    'Todos': [15, 18, 23, 12],
    'SP': [10, 12, 15, 8],
    'AM': [25, 28, 30, 22],
  };

  const dataBar = {
    labels: ['1ª série', '2ª série', '3ª série', '4ª série'],
    datasets: [{
      label: `Evasão em ${estado} (%)`,
      data: dadosEvasao[estado],
      backgroundColor: '#3b82f6',
    }]
  };

  const dataLine = {
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Impacto da Pandemia',
      data: [10, 18, 22, 20],
      borderColor: '#ef4444',
      fill: false,
    }]
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Evasão Escolar</h1>
      
      {/* Filtros */}
      <div className="mb-8 flex gap-4">
        <select 
          onChange={(e) => setEstado(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Todos">Todos os estados</option>
          <option value="SP">São Paulo</option>
          <option value="AM">Amazonas</option>
        </select>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <Bar data={dataBar} />
          <p className="text-center mt-2">Evasão por série</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <Line data={dataLine} />
          <p className="text-center mt-2">Tendência anual</p>
        </div>
      </div>

      {/* Botão de Exportação */}
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
        Exportar como CSV
      </button>
    </div>
  );
}