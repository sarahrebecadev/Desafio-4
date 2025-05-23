// JS/dashboard.js

// Nao precisamos de token para a API local
// const TOKEN = 'YOUR_API_TOKEN_HERE';

async function fetchEvasionData() {
  // O estado agora será sempre 'MA' já que só temos dados do Maranhão
  const estado = 'MA'; // Forçamos o estado para Maranhão
  const ano = parseInt(document.getElementById('ano').value);
  const etapa = document.getElementById('etapa').value;

  const url = '/JS/evasion_data.json'; // Caminho para o arquivo JSON estático

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao carregar os dados: ${response.status}`);
    const allEvasionData = await response.json();

    // Filtra os dados com base nas seleções (estado já é 'MA')
    const filteredData = allEvasionData.filter(item => {
      const matchEstado = item.estado_id === estado; // Sempre MA
      const matchAno = item.ano === ano;
      const matchEtapa = item.etapa_id === etapa;
      return matchEstado && matchAno && matchEtapa;
    });

    const evasionData = filteredData[0]; // Pega o primeiro item correspondente, se houver

    // Atualiza as caixas de informações
    const escolasAfetadasElement = document.getElementById('escolas-afetadas');
    const taxaEvasaoMediaElement = document.getElementById('taxa-evasao-media');
    const alunosEvadidosElement = document.getElementById('alunos-evadidos');

    if (evasionData) {
      escolasAfetadasElement.innerText = evasionData.total_escolas_afetadas.toLocaleString('pt-BR');
      taxaEvasaoMediaElement.innerText = formatar(evasionData.taxa_evasao_media, true);
      alunosEvadidosElement.innerText = evasionData.alunos_evadidos.toLocaleString('pt-BR');
    } else {
      escolasAfetadasElement.innerText = 'Não disponível';
      taxaEvasaoMediaElement.innerText = 'Não disponível';
      alunosEvadidosElement.innerText = 'Não disponível';
    }

  } catch (error) {
    console.error('Erro ao buscar dados de evasão:', error);
    document.getElementById('escolas-afetadas').innerText = 'Erro';
    document.getElementById('taxa-evasao-media').innerText = 'Erro';
    document.getElementById('alunos-evadidos').innerText = 'Erro';
  }
}

let evasionChartInstance = null; // Variável para armazenar a instância do gráfico

async function renderEvasionCharts() {
  const estado = 'MA'; // Forçamos o estado para Maranhão
  const etapa = document.getElementById('etapa').value;

  const url = '/JS/evasion_data.json'; // Caminho para o arquivo JSON estático

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao carregar os dados: ${response.status}`);
    const allEvasionData = await response.json();

    // Filtra os dados para o gráfico (todos os anos para o Maranhão e a etapa selecionada)
    const chartData = allEvasionData.filter(item => {
      const matchEstado = item.estado_id === estado; // Sempre MA
      const matchEtapa = item.etapa_id === etapa;
      return matchEstado && matchEtapa;
    }).sort((a, b) => a.ano - b.ano); // Ordena por ano para o gráfico

    const anos = chartData.map(item => item.ano);
    const taxaEvasao = chartData.map(item => parseFloat(item.taxa_evasao_media));
    const metaEvasao = chartData.map(item => parseFloat(item.meta_evasao)); // Adicionado meta para o gráfico

    const graficosContainer = document.getElementById('graficos');
    graficosContainer.innerHTML = '<canvas id="evasionChart"></canvas>'; // Limpa o canvas anterior

    const ctx = document.getElementById('evasionChart').getContext('2d');

    // Destrói a instância anterior do gráfico se ela existir
    if (evasionChartInstance) {
      evasionChartInstance.destroy();
    }

    evasionChartInstance = new Chart(ctx, {
      type: 'bar', // Pode ser 'line' também
      data: {
        labels: anos,
        datasets: [{
          label: 'Taxa de Evasão Média (%)',
          data: taxaEvasao,
          backgroundColor: 'rgba(30,144,255,0.7)', // Cor azul como no Ideb
          borderColor: 'dodgerblue',
          borderWidth: 1
        },
        {
          label: 'Meta de Evasão (%)',
          data: metaEvasao,
          type: 'line', // Linha para a meta
          borderColor: 'green',
          backgroundColor: 'green',
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: 'white',
          pointBorderColor: 'green',
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Evolução da Taxa de Evasão (Maranhão - ${etapa})` // Título fixo para Maranhão
          },
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 20 // Ajuste o valor máximo conforme seus dados de taxa de evasão
          }
        }
      }
    });

  } catch (error) {
    console.error('Erro ao carregar gráfico de evasão:', error);
    const graficosContainer = document.getElementById('graficos');
    graficosContainer.innerHTML = '<p>Não foi possível carregar o gráfico de evasão.</p>';
  }
}

// Helper function
const formatar = (valor, isPercent = false) => {
  if (valor === null || valor === undefined || isNaN(valor)) return '--';
  const num = parseFloat(valor);
  return isPercent ? num.toFixed(1) + '%' : num.toFixed(2);
};


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Define os anos do dropdown dinamicamente
  const anoSelect = document.getElementById('ano');
  for (let ano = 2007; ano <= 2023; ano += 2) {
    const option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    if (ano === 2019) { // Define um ano padrão
      option.selected = true;
    }
    anoSelect.appendChild(option);
  }

  // **Popula o dropdown de estado APENAS com Maranhão e o seleciona**
  const estadoSelect = document.getElementById('estado');
  estadoSelect.innerHTML = ''; // Limpa as opções existentes
  const maranhaoOption = document.createElement('option');
  maranhaoOption.value = 'MA';
  maranhaoOption.textContent = 'Maranhão';
  maranhaoOption.selected = true; // Seleciona Maranhão por padrão
  estadoSelect.appendChild(maranhaoOption);
  estadoSelect.disabled = true; // Opcional: Desabilita o dropdown para que o usuário não possa mudar

  fetchEvasionData();
  renderEvasionCharts();

  // O evento de 'change' no estado não é mais necessário se ele estiver desabilitado,
  // mas vamos mantê-lo por segurança caso você decida habilitá-lo no futuro.
  document.getElementById('estado').addEventListener('change', () => {
    fetchEvasionData();
    renderEvasionCharts();
  });

  document.getElementById('ano').addEventListener('change', () => {
    fetchEvasionData();
    // O gráfico de tendência geralmente não muda por ano, mas por estado/etapa.
    // Se você quiser que o gráfico mostre apenas o ano selecionado, a lógica do gráfico precisaria ser ajustada.
    // No entanto, para um gráfico de *evolução*, ele precisa de múltiplos anos.
  });

  document.getElementById('etapa').addEventListener('change', () => {
    fetchEvasionData();
    renderEvasionCharts();
  });
});

// Export CSV Function
document.getElementById('exportar-csv').addEventListener('click', async () => {
  const estado = 'MA'; // Exporta sempre para Maranhão
  const etapa = document.getElementById('etapa').value;
  const url = '/JS/evasion_data.json';

  try {
    const response = await fetch(url);
    const allEvasionData = await response.json();

    const dataToExport = allEvasionData.filter(item => {
      const matchEstado = item.estado_id === estado; // Sempre MA
      const matchEtapa = item.etapa_id === etapa;
      return matchEstado && matchEtapa;
    }).sort((a, b) => a.ano - b.ano);

    if (dataToExport.length === 0) {
      alert('Nenhum dado para exportar para a seleção atual.');
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Estado,Ano,Etapa,Escolas Afetadas,Taxa Evasao Media,Alunos Evadidos,Meta Evasao\n";

    dataToExport.forEach(item => {
      const row = [
        item.estado_nome,
        item.ano,
        item.etapa_id,
        item.total_escolas_afetadas,
        formatar(item.taxa_evasao_media, true),
        item.alunos_evadidos,
        formatar(item.meta_evasao, true)
      ].join(',');
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `evasao_dados_Maranhao_${etapa}.csv`); // Nome do arquivo específico
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Erro ao exportar CSV:', error);
    alert('Ocorreu um erro ao exportar os dados.');
  }
});