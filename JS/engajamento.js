
    // Mapa centralizado no Maranhão
    const mapa = L.map('mapa').setView([-5.0, -45.0], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);

    // Dados das cidades do Maranhão (com problemas educacionais reais)
    const escolasMaranhao = [
        { 
            nome: "São Luís", 
            lat: -2.5307, 
            lng: -44.3068, 
            problema: "35% das escolas sem biblioteca",
            evasao: "18%"
        },
        { 
            nome: "Imperatriz", 
            lat: -5.5185, 
            lng: -47.4777, 
            problema: "Falta de professores qualificados",
            evasao: "22%"
        },
        { 
            nome: "Caxias", 
            lat: -4.8585, 
            lng: -43.3565, 
            problema: "Infraestrutura precária",
            evasao: "25%"
        },
        { 
            nome: "Codó", 
            lat: -4.4552, 
            lng: -43.8854, 
            problema: "Alto índice de reprovação",
            evasao: "28%"
        },
        { 
            nome: "Santa Inês", 
            lat: -3.6667, 
            lng: -45.3800, 
            problema: "Transporte escolar insuficiente",
            evasao: "20%"
        },
        { 
            nome: "Bacabal", 
            lat: -4.2250, 
            lng: -44.7800, 
            problema: "Escolas sem laboratório de ciências",
            evasao: "23%"
        },
        { 
            nome: "Balsas", 
            lat: -7.5328, 
            lng: -46.0358, 
            problema: "Distância entre comunidades rurais e escolas",
            evasao: "30%"
        }
    ];


    escolasMaranhao.forEach(escola => {
        // Definir cor baseada na taxa de evasão
        const evasaoNum = parseInt(escola.evasao);
        let cor;
        
        if (evasaoNum < 20) cor = 'green';
        else if (evasaoNum < 25) cor = 'orange';
        else cor = 'red';

        const icone = L.divIcon({
            className: 'custom-icon',
            html: `<div style="background:${cor}; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold;">${escola.evasao}</div>`
        });

        L.marker([escola.lat, escola.lng], { icon: icone })
            .addTo(mapa)
            .bindPopup(`
                <b>${escola.nome}</b><br>
                <b>Problema:</b> ${escola.problema}<br>
                <b>Taxa de evasão:</b> ${escola.evasao}
            `);
    });

    // Adicionando um polígono aproximado do Maranhão para destacar
    const maranhaoCoords = [
        [-1.0, -44.0],
        [-1.0, -48.0],
        [-9.0, -48.0],
        [-9.0, -42.0],
        [-1.0, -44.0]
    ];
    
    L.polygon(maranhaoCoords, {
        color: 'blue',
        fillColor: 'transparent',
        weight: 2,
        dashArray: '5,5'
    }).addTo(mapa).bindPopup("<b>Estado do Maranhão</b>");

    // Legenda do mapa
    const legenda = L.control({ position: 'bottomright' });
    legenda.onAdd = function() {
        const div = L.DomUtil.create('div', 'info legend');
        div.style.backgroundColor = 'white';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.innerHTML = `
            <h4 style="margin:0 0 5px 0;">Taxa de Evasão</h4>
            <div><span style="background:green; display:inline-block; width:15px; height:15px; border-radius:50%;"></span> <20%</div>
            <div><span style="background:orange; display:inline-block; width:15px; height:15px; border-radius:50%;"></span> 20-24%</div>
            <div><span style="background:red; display:inline-block; width:15px; height:15px; border-radius:50%;"></span> 25%+</div>
        `;
        return div;
    };
    legenda.addTo(mapa);
