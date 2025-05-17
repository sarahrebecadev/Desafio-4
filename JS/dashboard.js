// Dados mockados
const dadosCompletos = {
    'Todos': {
        evasaoPorSerie: [15, 18, 23, 12],
        tendenciaAnual: [12, 15, 18, 15],
        escolasAfetadas: 12500
    },
    'SP': {
        evasaoPorSerie: [10, 12, 15, 8],
        tendenciaAnual: [8, 10, 14, 12],
        escolasAfetadas: 4500
    },
    'AM': {
        evasaoPorSerie: [25, 28, 30, 22],
        tendenciaAnual: [20, 25, 28, 27],
        escolasAfetadas: 800
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('estado');
    const escolasAfetadasElement = document.getElementById('escolas-afetadas');
    const graficosContainer = document.getElementById('graficos');
    const exportarBtn = document.getElementById('exportar-csv');
    
    let currentEstado = 'Todos';
    let currentData = dadosCompletos[currentEstado];

    // Atualiza o dashboard quando o estado muda
    estadoSelect.addEventListener('change', function() {
        currentEstado = this.value;
        currentData = dadosCompletos[currentEstado];
        updateDashboard();
    });

    // Configura o botão de exportação
    exportarBtn.addEventListener('click', exportarCSV);

    // Renderiza os gráficos inicialmente
    updateDashboard();

    function updateDashboard() {
        // Atualiza estatísticas
        escolasAfetadasElement.textContent = currentData.escolasAfetadas.toLocaleString('pt-BR');

        // Limpa gráficos anteriores
        graficosContainer.innerHTML = '';

        // Adiciona loading
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'col-span-2 flex justify-center items-center h-64';
        loadingDiv.innerHTML = '<p class="text-gray-500">Carregando dados...</p>';
        graficosContainer.appendChild(loadingDiv);

        // Simula carregamento
        setTimeout(() => {
            graficosContainer.innerHTML = '';
            renderGraficos();
        }, 500);
    }

    function renderGraficos() {
        // Gráfico de barras
        const barDiv = document.createElement('div');
        barDiv.className = 'grafico-container';
        barDiv.innerHTML = `
            <h3 class="grafico-titulo">Evasão por série (2023)</h3>
            <div class="chart-container">
                <canvas id="grafico-barras"></canvas>
            </div>
        `;
        graficosContainer.appendChild(barDiv);

        // Gráfico de linhas
        const lineDiv = document.createElement('div');
        lineDiv.className = 'grafico-container';
        lineDiv.innerHTML = `
            <h3 class="grafico-titulo">Tendência anual</h3>
            <div class="chart-container">
                <canvas id="grafico-linhas"></canvas>
            </div>
        `;
        graficosContainer.appendChild(lineDiv);

        // Configuração dos gráficos
        const barCtx = document.getElementById('grafico-barras').getContext('2d');
        const lineCtx = document.getElementById('grafico-linhas').getContext('2d');

        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['1ª série', '2ª série', '3ª série', '4ª série'],
                datasets: [{
                    label: `Evasão em ${currentEstado} (%)`,
                    data: currentData.evasaoPorSerie,
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.7)',
                        'rgba(16, 185, 129, 0.7)',
                        'rgba(245, 158, 11, 0.7)',
                        'rgba(239, 68, 68, 0.7)'
                    ],
                    borderColor: [
                        'rgba(59, 130, 246, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(239, 68, 68, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Percentual de evasão (%)'
                        }
                    }
                }
            }
        });

        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022'],
                datasets: [{
                    label: `Tendência anual em ${currentEstado} (%)`,
                    data: currentData.tendenciaAnual,
                    borderColor: 'rgba(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Percentual de evasão (%)'
                        }
                    }
                }
            }
        });
    }

    function exportarCSV() {
        let csvContent = "Série,Evasão(%)\n";
        const labels = ['1ª série', '2ª série', '3ª série', '4ª série'];
        
        labels.forEach((label, index) => {
            csvContent += `${label},${currentData.evasaoPorSerie[index]}\n`;
        });
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `evasao-${currentEstado}.csv`);
        link.click();
    }
});