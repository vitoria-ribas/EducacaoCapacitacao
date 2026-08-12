// ---------- DADOS PADRÃO ----------
const oportunidadesPadrao = [
  { id:1, titulo:"Inscrições Abertas para o ENEM 2026", tipo:"Exame", categoria:"enem", formato:"online", data:"Inscrições até 15/06", local:"Site do INEP", descricao:"O ENEM é a porta de entrada para universidades federais e programas como Sisu, Prouni e Fies.", requisitos:"Estudantes do ensino médio ou concluintes", certificacao:true, link:"#", lat:null, lng:null, destaque:true },
  { id:2, titulo:"UFRA - Cursos com Nota do ENEM", tipo:"Universidade", categoria:"universidade", formato:"presencial", data:"Vestibular 2026.2", local:"Campus Parauapebas", descricao:"Agronomia, Engenharia Florestal, Zootecnia. Inscrições via Sisu.", requisitos:"Nota do ENEM", certificacao:true, link:"#", lat:-6.0675, lng:-49.9037, destaque:true },
  { id:3, titulo:"UEPA - Graduação em Enfermagem", tipo:"Universidade", categoria:"universidade", formato:"presencial", data:"Inscrições até 20/08", local:"Campus Parauapebas", descricao:"Curso de Enfermagem com estágio no hospital regional.", requisitos:"ENEM ou vestibular próprio", certificacao:true, link:"#", lat:-6.0680, lng:-49.9045, destaque:true },
  { id:4, titulo:"IFPA - Cursos Técnicos Integrados", tipo:"Instituto Federal", categoria:"cursos", formato:"presencial", data:"Processo seletivo 2026", local:"IFPA Campus Parauapebas", descricao:"Técnico em Mineração, Informática e Meio Ambiente.", requisitos:"Ensino fundamental completo", certificacao:true, link:"#", lat:-6.0650, lng:-49.9020, destaque:true },
  { id:5, titulo:"SENAI - Curso de Soldagem", tipo:"Curso Técnico", categoria:"cursos", formato:"presencial", data:"Início em 01/09", local:"SENAI Parauapebas", descricao:"Qualificação profissional em soldagem elétrica e MIG/MAG.", requisitos:"18 anos ou mais", certificacao:true, link:"#", lat:-6.0710, lng:-49.9080, destaque:false },
  { id:6, titulo:"SENAC - Assistente Administrativo", tipo:"Curso Técnico", categoria:"cursos", formato:"presencial", data:"Matrículas abertas", local:"SENAC Parauapebas", descricao:"Curso profissionalizante com foco em rotinas administrativas e atendimento.", requisitos:"16 anos ou mais", certificacao:true, link:"#", lat:-6.0700, lng:-49.9070, destaque:false },
  { id:7, titulo:"Vale - Jovem Aprendiz 2026", tipo:"Vaga", categoria:"jovemaprendiz", formato:"presencial", data:"Inscrições até 30/08", local:"Vale S.A. - Complexo S11D", descricao:"Programa de aprendizagem em operação de máquinas e administração.", requisitos:"18-22 anos, ensino médio completo", certificacao:false, link:"#", lat:-6.0600, lng:-49.8700, destaque:true },
  { id:8, titulo:"Sotreq - Aprendiz em Mecânica", tipo:"Vaga", categoria:"jovemaprendiz", formato:"presencial", data:"Inscrições até 25/08", local:"Sotreq Parauapebas", descricao:"Oportunidade para jovens em manutenção de equipamentos pesados.", requisitos:"18-24 anos, ensino médio em andamento", certificacao:false, link:"#", lat:-6.0720, lng:-49.9100, destaque:false },
  { id:9, titulo:"Universidade Estácio - Bolsas de Estudo", tipo:"Universidade", categoria:"universidade", formato:"online", data:"Inscrições contínuas", local:"Online", descricao:"Cursos de graduação e pós-graduação a distância com bolsas de até 50%.", requisitos:"Nota do ENEM", certificacao:true, link:"#", lat:null, lng:null, destaque:false }
];

const instituicoes = [
  { 
    nome: "UFRA - Campus Parauapebas", 
    tipo: "Universidade Pública", 
    telefone: "(94) 3346-1234", 
    endereco: "Rodovia PA-275, Km 13", 
    lat: -6.0675, lng: -49.9037,
    foto: "https://picsum.photos/400/250?random=1"
  },
  { 
    nome: "UEPA - Centro de Ciências Biológicas e da Saúde", 
    tipo: "Universidade Pública", 
    telefone: "(94) 3346-5678", 
    endereco: "Av. dos Ipês, s/n", 
    lat: -6.0680, lng: -49.9045,
    foto: "https://picsum.photos/400/250?random=2"
  },
  { 
    nome: "IFPA - Campus Parauapebas", 
    tipo: "Instituto Federal", 
    telefone: "(94) 3346-9101", 
    endereco: "Rua do Comércio, 450", 
    lat: -6.0650, lng: -49.9020,
    foto: "https://picsum.photos/400/250?random=3"
  },
  { 
    nome: "SENAI Parauapebas", 
    tipo: "Serviço Nacional de Aprendizagem Industrial", 
    telefone: "(94) 3346-1122", 
    endereco: "Av. dos Minérios, 2000", 
    lat: -6.0710, lng: -49.9080,
    foto: "https://picsum.photos/400/250?random=4"
  },
  { 
    nome: "SENAC Parauapebas", 
    tipo: "Serviço Nacional de Aprendizagem Comercial", 
    telefone: "(94) 3346-3344", 
    endereco: "Rua das Palmeiras, 789", 
    lat: -6.0700, lng: -49.9070,
    foto: "https://picsum.photos/400/250?random=5"
  },
  { 
    nome: "Faculdade Metropolitana de Parauapebas", 
    tipo: "Faculdade Privada", 
    telefone: "(94) 3346-5566", 
    endereco: "Av. Brasil, 1200", 
    lat: -6.0750, lng: -49.9150,
    foto: "https://picsum.photos/400/250?random=6"
  },
  { 
    nome: "UniCesumar - Polo Parauapebas", 
    tipo: "Educação a Distância", 
    telefone: "(94) 3346-7788", 
    endereco: "Rua das Flores, 321", 
    lat: -6.0730, lng: -49.9120,
    foto: "https://picsum.photos/400/250?random=7"
  }
];

// ---------- PERSISTÊNCIA ----------
function carregarOportunidades() {
  const salvas = localStorage.getItem('oportunidades');
  if (salvas) return JSON.parse(salvas);
  localStorage.setItem('oportunidades', JSON.stringify(oportunidadesPadrao));
  return oportunidadesPadrao;
}

function salvarOportunidades() {
  localStorage.setItem('oportunidades', JSON.stringify(oportunidades));
}

function carregarNextId() {
  const idSalvo = localStorage.getItem('nextId');
  return idSalvo ? parseInt(idSalvo) : 10;
}

function salvarNextId() {
  localStorage.setItem('nextId', nextId.toString());
}

let oportunidades = carregarOportunidades();
let nextId = carregarNextId();

// ---------- RENDERIZAÇÃO ----------
function createCard(opp) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <span class="tag">${opp.tipo}</span>
    <h3>${opp.titulo}</h3>
    <div class="meta">
      <span><i data-feather="calendar"></i> ${opp.data}</span>
      <span><i data-feather="map-pin"></i> ${opp.local}</span>
      ${opp.formato === 'online' ? '<span><i data-feather="wifi"></i> Online</span>' : ''}
    </div>
  `;
  div.addEventListener('click', () => openDetail(opp.id));
  return div;
}

function renderHighlights() {
  const container = document.getElementById('highlightsContainer');
  container.innerHTML = '';
  oportunidades.filter(o => o.destaque).forEach(o => container.appendChild(createCard(o)));
}

function renderFeed(filter = 'all') {
  const container = document.getElementById('feedContainer');
  container.innerHTML = '';
  let filtered = oportunidades;
  if (filter === 'presencial') filtered = oportunidades.filter(o => o.formato === 'presencial');
  else if (filter === 'online') filtered = oportunidades.filter(o => o.formato === 'online');
  else if (filter === 'gratuito') filtered = oportunidades.filter(o => o.certificacao);
  filtered.forEach(o => container.appendChild(createCard(o)));
  renderExploreList(filter);
}

function renderExploreList(filter = 'all') {
  const container = document.getElementById('listViewContainer');
  if (!container) return;
  container.innerHTML = '';
  let filtered = oportunidades;
  const searchTerm = document.getElementById('exploreSearch')?.value.toLowerCase();
  if (searchTerm) filtered = filtered.filter(o => o.titulo.toLowerCase().includes(searchTerm) || o.categoria.includes(searchTerm));
  if (filter === 'presencial') filtered = filtered.filter(o => o.formato === 'presencial');
  else if (filter === 'online') filtered = filtered.filter(o => o.formato === 'online');
  else if (filter === 'gratuito') filtered = filtered.filter(o => o.certificacao);
  filtered.forEach(o => container.appendChild(createCard(o)));
}

let map;
function initMap() {
  if (map) { map.invalidateSize(); return; }
  map = L.map('mapContainer').setView([-6.0675, -49.9037], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
  oportunidades.filter(o => o.lat).forEach(o => {
    L.marker([o.lat, o.lng]).addTo(map).bindPopup(`<b>${o.titulo}</b><br>${o.local}`);
  });
}

function showMapView(show) {
  document.getElementById('listViewContainer').style.display = show ? 'none' : 'flex';
  document.getElementById('mapViewContainer').style.display = show ? 'block' : 'none';
  document.getElementById('listViewBtn').classList.toggle('active', !show);
  document.getElementById('mapViewBtn').classList.toggle('active', show);
  if (show) { setTimeout(() => { if (!map) initMap(); else map.invalidateSize(); }, 100); }
}

function openDetail(id) {
  const opp = oportunidades.find(o => o.id === id);
  if (!opp) return;
  const detailDiv = document.getElementById('detailContent');
  detailDiv.innerHTML = `
    <div class="detail-hero">
      <h2>${opp.titulo}</h2>
      <p>${opp.tipo} • ${opp.categoria}</p>
    </div>
    <div class="info-section">
      <p><strong>Descrição:</strong> ${opp.descricao}</p>
      <p><strong>Requisitos:</strong> ${opp.requisitos}</p>
      <p><strong>Quando:</strong> ${opp.data}</p>
      <p><strong>Onde:</strong> ${opp.local}</p>
      <p><strong>Certificação:</strong> ${opp.certificacao ? 'Sim' : 'Não'}</p>
      <button class="cta-button mt-8" onclick="alert('Redirecionando para inscrição...')">Inscreva-se</button>
    </div>
    <h4 class="mt-16">Oportunidades Relacionadas</h4>
    <div class="horizontal-scroll">
      ${oportunidades.filter(o => o.categoria === opp.categoria && o.id !== opp.id).slice(0,3).map(o => createCard(o).outerHTML).join('')}
    </div>
  `;
  switchScreen('detail');
  feather.replace();
}

function renderInstituicoes() {
  const container = document.getElementById('listaInstituicoes');
  container.innerHTML = '';
  instituicoes.forEach(inst => {
    const card = document.createElement('div');
    card.className = 'instituicao-card';
    card.innerHTML = `
      <img src="${inst.foto}" alt="${inst.nome}" class="instituicao-foto">
      <h4>${inst.nome}</h4>
      <p class="contato"><i data-feather="phone"></i> ${inst.telefone}</p>
      <p class="contato"><i data-feather="map-pin"></i> ${inst.endereco}</p>
      <button class="cta-button btn-small" onclick="window.open('https://www.google.com/maps?q=${inst.lat},${inst.lng}', '_blank')">Ver no mapa</button>
    `;
    container.appendChild(card);
  });
  feather.replace();
}

// ---------- CADASTRO DE OPORTUNIDADE ----------
const formAdd = document.getElementById('formAddOportunidade');
formAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  const titulo = document.getElementById('addTitulo').value;
  const tipo = document.getElementById('addTipo').value;
  const categoria = document.getElementById('addCategoria').value;
  const formato = document.getElementById('addFormato').value;
  const data = document.getElementById('addData').value;
  const local = document.getElementById('addLocal').value;
  const descricao = document.getElementById('addDescricao').value;
  const requisitos = document.getElementById('addRequisitos').value;
  const certificacao = document.getElementById('addCertificacao').checked;
  const lat = parseFloat(document.getElementById('addLat').value) || null;
  const lng = parseFloat(document.getElementById('addLng').value) || null;
  const destaque = document.getElementById('addDestaque').checked;

  const novaOportunidade = {
    id: nextId++,
    titulo, tipo, categoria, formato, data, local, descricao,
    requisitos, certificacao, link: "#", lat, lng, destaque
  };

  oportunidades.push(novaOportunidade);
  salvarOportunidades();
  salvarNextId();
  formAdd.reset();
  // Volta para home após cadastro
  switchScreen('home');
  renderHighlights();
  renderFeed();
  renderExploreList();
  if (map) {
    map.eachLayer(layer => { if (layer instanceof L.Marker) map.removeLayer(layer); });
    oportunidades.filter(o => o.lat).forEach(o => {
      L.marker([o.lat, o.lng]).addTo(map).bindPopup(`<b>${o.titulo}</b><br>${o.local}`);
    });
  }
  feather.replace();
});

// ---------- NAVEGAÇÃO ----------
function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId + '-screen').classList.add('active');
  document.querySelectorAll('.bottom-nav button, .desktop-nav-links a').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.screen === screenId) el.classList.add('active');
  });
  if (screenId === 'explore') renderExploreList();
  if (screenId === 'instituicoes') renderInstituicoes();
  if (screenId === 'home') { renderFeed(); renderHighlights(); }
  if (screenId === 'cadastro') { /* nada extra */ }
  if (screenId !== 'explore') showMapView(false);
  feather.replace();
}

// Eventos de navegação
document.querySelectorAll('.bottom-nav button').forEach(btn => {
  btn.addEventListener('click', () => switchScreen(btn.dataset.screen));
});
document.querySelectorAll('.desktop-nav-links a').forEach(link => {
  link.addEventListener('click', () => switchScreen(link.dataset.screen));
});

document.getElementById('btnAddOportunidade').addEventListener('click', () => {
  switchScreen('cadastro');
});

document.getElementById('backFromCadastro').addEventListener('click', () => {
  switchScreen('home');
});

document.getElementById('backFromDetail').addEventListener('click', () => switchScreen('home'));

document.getElementById('mainSearch').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const feed = document.getElementById('feedContainer');
  feed.innerHTML = '';
  const filtered = oportunidades.filter(o => o.titulo.toLowerCase().includes(term) || o.descricao.toLowerCase().includes(term));
  filtered.forEach(o => feed.appendChild(createCard(o)));
  feather.replace();
});

document.getElementById('exploreSearch').addEventListener('input', () => renderExploreList());
document.getElementById('listViewBtn').addEventListener('click', () => showMapView(false));
document.getElementById('mapViewBtn').addEventListener('click', () => showMapView(true));
document.getElementById('filterIcon').addEventListener('click', () => document.getElementById('mainSearch').focus());

document.getElementById('homeChips').addEventListener('click', (e) => {
  if (e.target.classList.contains('chip')) {
    document.querySelectorAll('#homeChips .chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    renderFeed(e.target.dataset.filter);
  }
});

document.getElementById('categoryGrid').addEventListener('click', (e) => {
  const catItem = e.target.closest('.category-item');
  if (catItem) {
    const cat = catItem.dataset.cat;
    switchScreen('explore');
    document.getElementById('exploreSearch').value = cat;
    const listContainer = document.getElementById('listViewContainer');
    listContainer.innerHTML = '';
    oportunidades.filter(o => o.categoria === cat).forEach(o => listContainer.appendChild(createCard(o)));
    feather.replace();
  }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderHighlights();
  renderFeed();
  renderInstituicoes();
  feather.replace();
});