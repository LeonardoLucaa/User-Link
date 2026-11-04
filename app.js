const CHAVE = 'userlink-v1';

const TRACOS = {
    inicio: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    usuario: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    relatorios: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    pagamento: '<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    ajuda: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    sair: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    sino: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    busca: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/>',
    lua: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    menu: '<path d="M3 12h18M3 6h18M3 18h18"/>'
};

const icone = (nome) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${TRACOS[nome]}</svg>`;

const LOGO = (tamanho) => `<svg viewBox="0 0 64 64" width="${tamanho}" height="${tamanho}" aria-hidden="true"><path d="M32 32V9M32 32l22-7M32 32l-22-7M32 32l14 19M32 32L18 51" stroke="#55d6a0" stroke-width="4" fill="none"/><g fill="#55d6a0"><circle cx="32" cy="9" r="7"/><circle cx="54" cy="25" r="7"/><circle cx="10" cy="25" r="7"/><circle cx="46" cy="51" r="7"/><circle cx="18" cy="51" r="7"/><circle cx="32" cy="32" r="8"/></g></svg>`;

const MENU = [['inicio', 'Início'], ['usuario', 'Usuário'], ['relatorios', 'Relatórios'], ['pagamento', 'Pagamento'], ['ajuda', 'Ajuda']];

const PERFIL = [['Identificação', '0139031'], ['Departamento', 'TI'], ['Cargo', 'Analista de TI'], ['Data de contratação', '18/07/2017'], ['Supervisor', 'Ana Exemplo']];
const RESPONSABILIDADES = ['Manter e evoluir os sistemas internos do setor', 'Atender chamados de suporte dentro do prazo', 'Participar das reuniões de planejamento'];
const DOCS_RH = ['Documento de identidade', 'CPF', 'Certidão de nascimento ou casamento', 'Comprovante de residência', 'Histórico escolar'];

const NOTIFICACOES = [
    { titulo: 'Manutenção na caixa d\'água', texto: 'Alguns setores ficarão sem água hoje durante a limpeza dos reservatórios.', data: 'Hoje, 07:49' },
    { titulo: 'Nova máquina de café', texto: 'A copa agora tem uma máquina profissional para atender todo o time.', data: '28/07, 14:07' },
    { titulo: 'Atendimento durante as férias', texto: 'O suporte segue funcionando normalmente no período de férias acadêmicas.', data: '19/07, 17:06' },
    { titulo: 'Convenção anual', texto: 'Reserve o dia 5 de agosto. A programação começa às 8h.', data: '14/07, 17:02' }
];

const DESEMPENHO = {
    semanal: { projetos: 13, concluidos: 12, obtido: 90, esperado: 95, areas: [['Tempo de conclusão de projetos', 80], ['Atendimento aos chamados', 97], ['Participação em reuniões', 100]] },
    mensal: { projetos: 52, concluidos: 47, obtido: 91, esperado: 95, areas: [['Tempo de conclusão de projetos', 78], ['Atendimento aos chamados', 97], ['Participação em reuniões', 91]] },
    anual: { projetos: 610, concluidos: 561, obtido: 92, esperado: 95, areas: [['Tempo de conclusão de projetos', 82], ['Atendimento aos chamados', 96], ['Participação em reuniões', 90]] }
};

const LISTAS = {
    beneficios: ['Plano de saúde', 'Vale-alimentação', 'Auxílio-educação', 'Day off de aniversário'],
    treinamento: ['Segurança da informação: concluído', 'Boas práticas de atendimento: concluído', 'Gestão de projetos: em andamento']
};

const FAQ = [
    ['Como altero meus dados?', 'Acesse "Usuário", edite os campos e clique em "Salvar alterações".'],
    ['Onde vejo meu holerite?', 'Em "Pagamento", escolha o ano e use "Baixar PDF".'],
    ['Quanto tempo leva uma resposta?', 'Em média, 2 dias úteis, por e-mail.']
];

const BUSCA = [
    ['Usuário', 'Painel de registro', 'usuario'],
    ['Recursos Humanos', 'Visualizar cargo', 'inicio'],
    ['Recursos Humanos', 'Visualizar data de contratação', 'inicio'],
    ['Recursos Humanos', 'Visualizar salário', 'pagamento'],
    ['Recursos Humanos', 'Histórico de remuneração', 'pagamento'],
    ['Recursos Humanos', 'Análise de desempenho', 'relatorios'],
    ['Recursos Humanos', 'Histórico de treinamento', 'relatorios'],
    ['Funcionário', 'Conheça os seus benefícios', 'relatorios']
];

const PADRAO = {
    logado: false, tema: 'escuro', menuAberto: true, view: 'inicio', lidas: [],
    usuario: { nome: 'Pedro Exemplo', email: 'pedro@exemplo.com', telefone: '(35) 99999-0000', genero: 'Masculino' }
};

const $ = (seletor) => document.querySelector(seletor);
const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const brl = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

let estado = (() => {
    try { return { ...PADRAO, ...JSON.parse(localStorage.getItem(CHAVE)) }; } catch { return structuredClone(PADRAO); }
})();
let modo = 'entrar';
let pendente = null;

function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch { /* vale só nesta sessão */ }
    render();
}

function avisar(texto) {
    const aviso = $('#aviso');
    aviso.textContent = texto;
    clearTimeout(avisar.t);
    avisar.t = setTimeout(() => { aviso.textContent = ''; }, 3500);
}

const campo = (nome, rotulo, tipo = 'text', extra = '') =>
    `<label>${rotulo}<input name="${nome}" type="${tipo}" required ${extra}></label>`;

function forca(senha) {
    if (senha.length >= 10 && /\d/.test(senha) && /[a-zA-Z]/.test(senha) && /\W/.test(senha)) return 'Forte';
    if (senha.length >= 8 && /\d/.test(senha) && /[a-zA-Z]/.test(senha)) return 'Média';
    return 'Fraca';
}

function auth() {
    const telas = {
        entrar: `<h2>Bem-vindo de volta!</h2><p>Insira os seus dados</p>
            <form id="f-entrar">${campo('email', 'E-mail', 'email', 'autocomplete="email"')}${campo('senha', 'Senha', 'password', 'minlength="4" autocomplete="current-password"')}<button class="btn">Entrar</button></form>
            <button class="link" data-modo="recuperar">Esqueceu a senha?</button><p>Ainda não tem uma conta?</p><button class="btn btn--leve" data-modo="cadastro">Registrar</button>`,
        cadastro: `<h2>Vamos começar</h2><p>Inicie a sua jornada agora mesmo!</p>
            <form id="f-cadastro">${campo('nome', 'Nome completo', 'text', 'autocomplete="name"')}${campo('email', 'E-mail', 'email')}
            <label>Senha <span class="forca" id="forca" aria-live="polite">Fraca</span><input id="senha-cad" name="senha" type="password" minlength="8" required autocomplete="new-password"></label>
            <button class="btn">Registrar</button></form><p>Já tem uma conta?</p><button class="btn btn--leve" data-modo="entrar">Entrar</button>`,
        codigo: `<h2>Complete o seu cadastro</h2><p>Insira o código de 6 números que enviamos para o seu e-mail.</p>
            <form id="f-codigo">${campo('codigo', 'Código', 'text', 'inputmode="numeric" maxlength="6" autocomplete="one-time-code"')}<p id="erro" role="alert"></p><button class="btn">Enviar</button></form>
            <p>Protótipo: aceita qualquer código de 6 números.</p>`,
        recuperar: `<h2>Recuperação de senha</h2><p>Insira o e-mail cadastrado para receber o código de verificação.</p>
            <form id="f-recuperar">${campo('email', 'E-mail', 'email')}<button class="btn">Enviar código</button></form><p id="msg" role="status"></p>
            <button class="link" data-modo="entrar">Voltar para o login</button>`
    };
    return `<div class="auth"><section class="auth__marca">${LOGO(120)}<h1>UserLink</h1><p>Registre-se e aproveite todos os benefícios do portal do colaborador.</p></section><section class="auth__form">${telas[modo]}</section></div>`;
}

const VIEWS = {
    inicio: () => `<div class="grade">
        <section class="card card--larga"><h2>Veja as suas responsabilidades e habilidades</h2><p>Isso ajuda você a planejar a sua carreira na empresa.</p>
            <ul id="resp" hidden>${RESPONSABILIDADES.map((r) => `<li>${r}</li>`).join('')}</ul><button class="btn" data-acao="resp">Ver mais</button></section>
        <section class="card"><h2>Seção de RH</h2><h3>Documentos para entrega presencial</h3><ul>${DOCS_RH.map((d) => `<li>${d}</li>`).join('')}</ul></section>
        <section class="card"><h2>Deixe o seu feedback</h2><p>Sua avaliação nos ajuda a melhorar a experiência no portal.</p><button class="btn" data-acao="feedback">Avaliar</button></section>
        <aside class="card"><h2>${esc(estado.usuario.nome)}</h2><dl>${PERFIL.map(([r, v]) => `<dt>${r}</dt><dd>${v}</dd>`).join('')}</dl></aside></div>`,

    usuario: () => {
        const u = estado.usuario;
        return `<section class="painel"><h2>Dados do usuário</h2><form id="f-perfil">
            <label>Nome completo<input name="nome" value="${esc(u.nome)}" required></label>
            <label>E-mail<input name="email" type="email" value="${esc(u.email)}" required></label>
            <label>Telefone<input name="telefone" type="tel" value="${esc(u.telefone)}" required></label>
            <label>Gênero<select name="genero">${['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'].map((g) => `<option${g === u.genero ? ' selected' : ''}>${g}</option>`).join('')}</select></label>
            <button class="btn">Salvar alterações</button></form></section>`;
    },

    relatorios: () => `<div class="grade">${[
        ['desempenho', 'Relatório de desempenho', 'Acompanhe a sua tendência e as áreas de melhoria.'],
        ['beneficios', 'Relatório de benefícios', 'Veja as suas vantagens de acordo com os seus resultados.'],
        ['treinamento', 'Relatório de treinamento', 'Tenha uma visão geral das atividades realizadas.']
    ].map(([id, t, d]) => `<section class="card"><h2>${t}</h2><p>${d}</p><button class="btn" data-rel="${id}">Gerar relatório</button></section>`).join('')}</div>`,

    pagamento: () => `<section class="painel"><div class="acoes"><label>Ano<select id="ano"><option>2026</option><option>2025</option></select></label><button class="btn" data-acao="imprimir">Baixar PDF</button></div>
        <div class="tabela" id="tabela">${tabela(2026)}</div><p class="dica">Valores fictícios.</p></section>`,

    ajuda: () => `<section class="painel"><h2>Em que podemos ajudar hoje?</h2><form id="f-ajuda">
        <label>Escreva a sua dúvida<textarea name="duvida" rows="6" required></textarea></label>
        <label>Anexar arquivo (opcional)<input name="anexo" type="file"></label><button class="btn">Enviar</button></form>
        <h3 style="margin-top:1.5rem">Perguntas frequentes</h3>${FAQ.map(([p, r]) => `<details><summary>${p}</summary><p>${r}</p></details>`).join('')}</section>`
};

function tabela(ano) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const ate = ano === 2026 ? 10 : 12;
    const bruto = 3660.30;
    const descontos = 180.70;
    const linhas = meses.slice(0, ate).reverse().map((m) => `<tr><th scope="row">${m}</th><td>${brl(bruto)}</td><td>${brl(descontos)}</td><td>${brl(bruto - descontos)}</td></tr>`).join('');
    return `<table><caption class="sr-only">Pagamentos de ${ano}</caption><thead><tr><th>Competência</th><th>Salário bruto</th><th>Descontos (INSS e IRRF)</th><th>Líquido a receber</th></tr></thead><tbody>${linhas}</tbody></table>`;
}

function shell() {
    const naoLidas = NOTIFICACOES.length - estado.lidas.length;
    const iniciais = estado.usuario.nome.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
    const menu = MENU.map(([id, rotulo]) => `<button class="nav${estado.view === id ? ' nav--ativo' : ''}" data-view="${id}" title="${rotulo}"${estado.view === id ? ' aria-current="page"' : ''}>${icone(id)}<span>${rotulo}</span></button>`).join('');

    return `<div class="shell${estado.menuAberto ? '' : ' shell--fechado'}">
        <aside class="lateral"><div class="lateral__topo">${LOGO(34)}<button class="icone" data-acao="menu" aria-label="Recolher menu" aria-expanded="${estado.menuAberto}">${icone('menu')}</button></div>
            <nav aria-label="Menu principal">${menu}</nav><button class="nav" data-acao="sair" title="Sair">${icone('sair')}<span>Sair</span></button></aside>
        <div class="conteudo"><header class="barra">
            <div class="busca">${icone('busca')}<label class="sr-only" for="busca">Buscar no portal</label><input id="busca" type="search" placeholder="Buscar" autocomplete="off"><ul id="resultados" hidden></ul></div>
            <button class="icone" data-acao="tema" aria-label="Alternar entre tema claro e escuro">${icone('lua')}</button>
            <button class="icone" data-acao="notificacoes" aria-label="Notificações, ${naoLidas} não lidas">${icone('sino')}${naoLidas ? `<b class="contador">${naoLidas}</b>` : ''}</button>
            <span class="avatar" aria-hidden="true">${esc(iniciais)}</span></header>
            <main>${VIEWS[estado.view]()}</main><footer>UserLink · protótipo de portfólio com dados fictícios</footer></div></div>`;
}

function render() {
    document.documentElement.dataset.tema = estado.tema;
    $('#app').innerHTML = estado.logado ? shell() : auth();
}

function abrirModal(html) {
    const modal = $('#modal');
    modal.innerHTML = html;
    if (!modal.open) modal.showModal();
}

const cab = (titulo) => `<header><h2>${titulo}</h2><button type="button" class="icone" data-acao="fechar" aria-label="Fechar">✕</button></header>`;

function modalNotificacoes() {
    const itens = NOTIFICACOES.map((n, i) => `<li class="${estado.lidas.includes(i) ? 'lida' : ''}"><strong>${n.titulo}</strong><p>${n.texto}</p><time>${n.data}</time></li>`).join('');
    abrirModal(`<div>${cab('Notificações')}<ul class="notas">${itens}</ul><button class="btn" data-acao="lerTudo">Marcar tudo como lido</button></div>`);
}

function modalRelatorio(id, periodo = 'semanal') {
    if (id !== 'desempenho') {
        const titulo = id === 'beneficios' ? 'Relatório de benefícios' : 'Relatório de treinamento';
        return abrirModal(`<div>${cab(titulo)}<ul>${LISTAS[id].map((i) => `<li>${i}</li>`).join('')}</ul><button class="btn" data-acao="imprimir">Salvar em PDF</button></div>`);
    }
    const d = DESEMPENHO[periodo];
    const abas = ['semanal', 'mensal', 'anual'].map((p) => `<button data-periodo="${p}" aria-pressed="${p === periodo}">${p[0].toUpperCase() + p.slice(1)}</button>`).join('');
    const barras = d.areas.map(([nome, valor]) => `<label>${nome}: ${valor}%<progress max="100" value="${valor}"></progress></label>`).join('');
    abrirModal(`<div>${cab(`Relatório de desempenho de ${esc(estado.usuario.nome)}`)}<div class="abas" role="group" aria-label="Período">${abas}</div>
        <div class="metricas"><div><strong>${d.concluidos} de ${d.projetos}</strong>projetos concluídos</div><div><strong>${d.obtido}%</strong>meta obtida (esperado: ${d.esperado}%)</div></div>
        <h3>Áreas de melhoria</h3>${barras}<button class="btn" data-acao="imprimir">Salvar em PDF</button></div>`);
}

function modalFeedback() {
    const estrelas = [5, 4, 3, 2, 1].map((n) => `<input type="radio" id="e${n}" name="nota" value="${n}" required><label for="e${n}" title="${n} de 5">★<span class="sr-only"> ${n} de 5</span></label>`).join('');
    abrirModal(`<form id="f-feedback">${cab('Deixe o seu feedback')}<label>Sugestão ou crítica<textarea name="texto" rows="5" required></textarea></label>
        <fieldset class="estrelas"><legend class="sr-only">Avalie o portal</legend>${estrelas}</fieldset><button class="btn">Enviar feedback</button></form>`);
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.busca') && $('#resultados')) $('#resultados').hidden = true;
    const alvo = e.target.closest('[data-view],[data-acao],[data-modo],[data-rel],[data-periodo]');
    if (!alvo) return;
    const { view, acao, modo: novoModo, rel, periodo } = alvo.dataset;

    if (view) { estado.view = view; if ($('#modal').open) $('#modal').close(); salvar(); }
    if (novoModo) { modo = novoModo; render(); }
    if (rel) modalRelatorio(rel);
    if (periodo) modalRelatorio('desempenho', periodo);

    switch (acao) {
        case 'menu': estado.menuAberto = !estado.menuAberto; salvar(); break;
        case 'tema': estado.tema = estado.tema === 'escuro' ? 'claro' : 'escuro'; salvar(); break;
        case 'sair': estado.logado = false; modo = 'entrar'; salvar(); break;
        case 'notificacoes': modalNotificacoes(); break;
        case 'lerTudo': estado.lidas = NOTIFICACOES.map((_, i) => i); salvar(); modalNotificacoes(); break;
        case 'feedback': modalFeedback(); break;
        case 'fechar': $('#modal').close(); break;
        case 'imprimir': window.print(); break;
        case 'resp': { const lista = $('#resp'); lista.hidden = !lista.hidden; alvo.textContent = lista.hidden ? 'Ver mais' : 'Ver menos'; break; }
    }
});

document.addEventListener('input', (e) => {
    if (e.target.id === 'senha-cad') $('#forca').textContent = forca(e.target.value);
    if (e.target.id !== 'busca') return;
    const termo = e.target.value.trim().toLowerCase();
    const lista = $('#resultados');
    const achados = BUSCA.filter(([, rotulo]) => rotulo.toLowerCase().includes(termo));
    const grupos = [...new Set(achados.map(([g]) => g))];
    lista.hidden = !termo;
    lista.innerHTML = achados.length
        ? grupos.map((g) => `<li><h3>${g}</h3>${achados.filter(([x]) => x === g).map(([, r, v]) => `<button data-view="${v}">${r}</button>`).join('')}</li>`).join('')
        : '<li><p>Nada encontrado.</p></li>';
});

document.addEventListener('change', (e) => {
    if (e.target.id === 'ano') $('#tabela').innerHTML = tabela(Number(e.target.value));
});

document.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    const dados = Object.fromEntries(new FormData(f));

    if (f.id === 'f-entrar') { estado.usuario.email = dados.email; estado.logado = true; estado.view = 'inicio'; salvar(); }
    if (f.id === 'f-cadastro') { pendente = dados; modo = 'codigo'; render(); }
    if (f.id === 'f-codigo') {
        if (!/^\d{6}$/.test(dados.codigo)) { $('#erro').textContent = 'Digite os 6 números enviados para o seu e-mail.'; return; }
        estado.usuario = { ...estado.usuario, nome: pendente?.nome ?? estado.usuario.nome, email: pendente?.email ?? estado.usuario.email };
        estado.logado = true; estado.view = 'inicio'; salvar();
    }
    if (f.id === 'f-recuperar') $('#msg').textContent = 'Se o e-mail estiver cadastrado, você receberá um código de verificação.';
    if (f.id === 'f-perfil') { estado.usuario = dados; salvar(); avisar('Dados atualizados.'); }
    if (f.id === 'f-ajuda') { f.reset(); avisar('Mensagem enviada. Responderemos por e-mail.'); }
    if (f.id === 'f-feedback') { $('#modal').close(); avisar('Obrigado pelo seu feedback!'); }
});

render();
