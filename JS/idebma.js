const TOKEN = 'fVzQoVqWguKUyg6e88XqeJmex1LwRWJtRFTJiXSX';

    async function buscarDados() {
      const municipio_id = 21; // Maranhão
      const ano = document.getElementById('ano').value;
      const etapa = document.getElementById('etapa').value;
      const ciclo_id = etapa;

      const url = `https://api.qedu.org.br/v1/ideb?id=${municipio_id}&ano=${ano}&ciclo_id=${ciclo_id}`;

      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Accept': 'application/json'
          }
        });

        if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
        const resultado = await response.json();
        const item = resultado.data?.[0];

        const formatar = (valor, isPercent = false) => {
          if (valor === null || valor === undefined || isNaN(valor)) return '';
          const num = parseFloat(valor);
          return isPercent ? (num * 100).toFixed(1) + '%' : num.toFixed(2);
        };

        document.getElementById('valor-aprendizado').innerText = formatar(item?.aprendizado);
        document.getElementById('valor-fluxo').innerText = formatar(item?.fluxo, true);
        document.getElementById('valor-ideb').innerText = formatar(item?.ideb);
        document.getElementById('meta-ideb').innerText = 'Meta ' + formatar(item?.ideb_projetado);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        document.querySelectorAll('#valor-aprendizado, #valor-fluxo, #valor-ideb, #meta-ideb')
                .forEach(el => el.innerText = 'Não encontrado');
      }
    }

    async function carregarGrafico() {
      const municipio_id = 21;
      const etapa = document.getElementById('etapa').value;
      const ciclo_id = etapa;

      const anos = [];
      const idebReal = [];
      const idebMeta = [];

      for (let ano = 2007; ano <= 2023; ano += 2) {
        const url = `https://api.qedu.org.br/v1/ideb?id=${municipio_id}&ano=${ano}&ciclo_id=${ciclo_id}`;
        try {
          const response = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${TOKEN}`,
              'Accept': 'application/json'
            }
          });

          const resultado = await response.json();
          const total = resultado.data.find(item => item.dependencia_id === 0);
          if (total) {
            anos.push(ano);
            idebReal.push(parseFloat(total.ideb));
            idebMeta.push(parseFloat(total.ideb_projetado));
          }
        } catch (error) {
          console.warn(`Erro ao buscar dados do ano ${ano}:`, error);
        }
      }

      const ctx = document.getElementById('graficoIdeb').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: anos,
          datasets: [
            {
              label: 'Maranhão',
              data: idebReal,
              backgroundColor: 'rgba(30,144,255,0.7)',
              borderColor: 'dodgerblue',
              borderWidth: 1
            },
            {
              label: 'Projetado',
              data: idebMeta,
              type: 'line',
              borderColor: 'green',
              backgroundColor: 'green',
              borderWidth: 2,
              tension: 0.3,
              fill: false,
              pointStyle: 'circle',
              pointBackgroundColor: 'white',
              pointBorderColor: 'green'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Evolução do Ideb (Total)'
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
              max: 10
            }
          }
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      buscarDados();
      carregarGrafico();
    });