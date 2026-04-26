const cartascomuns = [
    {nome: "Caro Vitae",                    descriçao: "Você ganha "+ (Math.floor(Math.random() * 8) + 1) +" de PV."},
    {nome: "Fructus Vigoris",               descriçao: "Você ganha "+ (Math.floor(Math.random() * 4) + 1) +" de PE."},
    {nome: "Capsa Robusta",                 descriçao: "Você ganha 1 de CA."},
    {nome: "Resistentia",                   descriçao: "Reduz qualquer dano em 2."},
    {nome: "Reditus ad Vitam Editionis",    descriçao: "Recupera 1d4 de PV por rodada."},
    {nome: "Reditus ad Vigoris Editionis",  descriçao: "Recupera 1 de PE por rodada."},
    {nome: "Confirmatio Specifica",         descriçao: "Você pode escolher uma perícia para ter um bônus de +1."}
]

const cartasraras = [
    {nome: "Caro Vitae",                    descriçao: "Você ganha "+ (Math.floor(Math.random() * 12) + 1) +" de PV."},
    {nome: "Fructus Vigoris",               descriçao: "Você ganha "+ (Math.floor(Math.random() * 6) + 1) +" de PE."},
    {nome: "Capsa Robusta",                 descriçao: "Você ganha 2 de CA."},
    {nome: "Resistentia",                   descriçao: "Reduz qualquer dano em 4."},
    {nome: "Reditus ad Vitam Editionis",    descriçao: "Recupera 1d6 de PV por rodada."},
    {nome: "Reditus ad Vigoris Editionis",  descriçao: "Recupera 1d2+1 de PE por rodada."},
    {nome: "Confirmatio Specifica",         descriçao: "Você pode escolher uma perícia para ter um bônus de +2."},
    {nome: "Augmentum",                     descriçao: "Aumenta o valor de um atributo em 1."},
    {nome: "Punctum Criticum",              descriçao: "Ação Bônus, você descobre um ponto crítico no alvo, ao escolher atacar ponto crítico, -2 no acerto, somando 1d12 no dano."},
    {nome: "Castra",                        descriçao: "A party se teletransporta para um acampamento, um lugar seguro e onde podem guardar suprimentos e fazer apenas descansos curtos, afinal as cabanas não são confortáveis o suficiente. Um jogador dentro deste acampamento pode escolher quando irá voltar para perto do portador fora da carta."},
    {nome: "Substitutio",                   descriçao: "Uma vez a cada duas rodadas, o jogador pode transferir 1d4 de PV para PE e vice e versa como ação bônus."},
    {nome: "Circus teleportationis",        descriçao: "Fora de combate, você pode se teleportar para aldeias já visitadas livremente com sua party."},
    {nome: "Commodum Specificum",           descriçao: "Escolha uma perícia, uma vez por cena você poderá ter vantagem em um teste com esta perícia."},
    {nome: "Marginem minue",                descriçao: "A margem crítica diminui em um valor igual ao número da dezena do seu nível FsL."}
]

const cartasepicas = [
    {nome: "Caro Vitae",                    descriçao: "Você ganha "+ (((Math.floor(Math.random() * 8) + 1))+((Math.floor(Math.random() * 8) + 1))) +" de PV."},
    {nome: "Fructus Vigoris",               descriçao: "Você ganha "+ (Math.floor(Math.random() * 10) + 1) +" de PE."},
    {nome: "Capsa Robusta",                 descriçao: "Você ganha 3 de CA."},
    {nome: "Resistentia",                   descriçao: "Reduz qualquer dano em 8."},
    {nome: "Reditus ad Vitam Editionis",    descriçao: "Recupera 1d8 de PV por rodada."},
    {nome: "Reditus ad Vigoris Editionis",  descriçao: "Recupera 1d4+1 de PE por rodada."},
    {nome: "Confirmatio Specifica",         descriçao: "Você pode escolher uma perícia para ter um bônus de +4."},
    {nome: "Augmentum",                     descriçao: "Aumenta o valor de um atributo em 2."},
    {nome: "Punctum Criticum",              descriçao: "Ação Bônus, você descobre um ponto crítico no alvo, ao escolher atacar ponto crítico, -4 no acerto, somando 1d20 no dano."},
    {nome: "Locunator",                     descriçao: "Copia uma carta à escolha do jogador, exceto Lendárias"},
    {nome: "Accipe",                        descriçao: "Devolve 1d8 de dano recebido para o atacante."},
    {nome: "Peritus",                       descriçao: "O jogador ganha mais nível FsL"},
    {nome: "Carnifex",                      descriçao: "Ao acertar um ataque em um inimigo com menos de 10% de PV, ele morre instantaneamente."},
    {nome: "Administratio Provectior",      descriçao: "Quando o jogador maneja uma arma que ele possuí maestria, a maestria é somada no acerto e no dano(dobrada)."},
    {nome: "Duplicatum",                    descriçao: "O jogador pode realizar mais um ataque na rodada."},
    {nome: "Furtum",                        descriçao: "Uma vez por cena, o jogador pode roubar uma carta de um alvo sem o TR. A carta nunca vai ser uma carta lendária."}
]

const cartaslendarias = [
    {nome: "Caro Vitae",                    descriçao: "Você ganha "+ (((Math.floor(Math.random() * 12) + 1))+((Math.floor(Math.random() * 12) + 1))) +" de PV."},
    {nome: "Fructus Vigoris",               descriçao: "Você ganha "+ (((Math.floor(Math.random() * 10) + 1))+((Math.floor(Math.random() * 10) + 1))) +" de PE."},
    {nome: "Capsa Robusta",                 descriçao: "Você ganha 5 de CA."},
    {nome: "Resistentia",                   descriçao: "Reduz qualquer dano em 12."},
    {nome: "Reditus ad Vitam Editionis",    descriçao: "Recupera 1d12 de PV por rodada."},
    {nome: "Reditus ad Vigoris Editionis",  descriçao: "Recupera 1d6+2 de PE por rodada."},
    {nome: "Confirmatio Specifica",         descriçao: "Você pode escolher uma perícia para ter um bônus de +6."},
    {nome: "Augmentum",                     descriçao: "Aumenta o valor de um atributo em 4."},
    {nome: "Accipe",                        descriçao: "Devolve 1d20 de dano recebido para o atacante."},
    {nome: "Impenetrabilis",                descriçao: "O jogador toma menos dano quanto menos vida tiver. <br><70%: 1d12 <br><50%: 2d12 <br><20%: 4d12"},
    {nome: "Accumulatio Potestatis",        descriçao: "Cada golpe acertado o jogador ganha mais um dado do tipo do dano e +2 no acerto, assim acumulando até o jogador errar. Com o máximo sendo dez dados e +20 de acerto."},
    {nome: "Ille Auxilium",                 descriçao: "Toda cura conjurada pelo jogador tem seu efeito aumentado em 25%. Exclusivo para Suporte"},
    {nome: "Ille Peritus Pugnae",           descriçao: "Aumenta em dois o nível da arma. Exclusivo para Especialista em Combate"},
    {nome: "Ille Peritus in Technica",      descriçao: "O custo de todas as técnicas é diminuído em 1 PE. Exclusivo para Especialista em Técnica"},
    {nome: "Ille Restrictum",               descriçao: "Diminui a margem crítica geral em 3. Exclusivo para Restringido"}
]

const conteinergeral = document.getElementById('conteiner-geral')

function carregar_inicio(){
    conteinergeral.innerHTML = `
        <div class="centro-inicio">
            <div class="centro titulo">
                <p style="font-family: 'Times New Roman', Times, serif; font-size: 500%;">FRACTUM'S LAYER</p>
                <p style="font-family: 'Times New Roman', Times, serif; font-size: 300%;">CARD'S ROLL</p>
            </div>
            <button class="botao-padrao" id="btn-cartas" onclick="carregar_cartas()">Roletar</button>
        </div>
    `;
}

function carregar_cartas(){
    conteinergeral.innerHTML = `
        <div class="centro">
            <div id="chances-display">
                <div id="chance0" class="chance-conteiner">✸</div>
                <div id="chance1" class="chance-conteiner">✸</div>
                <div id="chance2" class="chance-conteiner">✸</div>
                <div id="chance3" class="chance-conteiner">✸</div>
                <div id="chance4" class="chance-conteiner">✸</div>
            <div>
            <div id="conteiner-cartas">
                <div id="carta" class="carta-virada comum" data-chances="5" data-raridade="0">

                </div>
            </div>
            <div id="rodape-cartas">
                <button id="btn-rodar-novamente" class="botao-padrao" onclick="carregar_cartas()">Rolar Novamente</button>
                <button id="btn-multiplas-cartas" class="botao-desativado" disabled>Multiplas Cartas</button>
                <button id="btn-voltar" class="botao-padrao" onclick="carregar_inicio()">Voltar</button>
            </div>
        </div>
    `;
}

function debug_carta(R, P){
        console.log(R)
        console.log(P)
}

document.addEventListener('click', (e) => {
    const carta = e.target.closest('.carta-virada');
    if (!carta) return;

    let chances = parseInt(carta.dataset.chances)
    let raridade = parseInt(carta.dataset.raridade)

    if (chances <= 0 || raridade >= 3){
        const arrayraridades = [cartascomuns, cartasraras, cartasepicas, cartaslendarias]
        const cartasorteada = arrayraridades[raridade][Math.floor(Math.random() * arrayraridades[raridade].length)]
        nome = cartasorteada.nome
        descriçao = cartasorteada.descriçao
        carta.innerHTML = `
            <div class="carta_titulo"> <h1>${nome}</h1></div>
            <div class="divisoria"></div>
            <div class="carta_descrição"><h3>${descriçao}</h3></div>
        `;

        carta.classList.remove('carta-virada')
        carta.classList.add('carta')
    };

    let porcentagem = Math.floor(Math.random() * 100) + 1
    const chances_upgrades= [60, 75, 95];
    const upgrades = ['comum','rara', 'epica', 'lendaria'];

    if (porcentagem >= chances_upgrades[raridade]){
        raridade++
        carta.dataset.raridade = raridade;
        carta.classList.add(upgrades[raridade])
    }

    carta.dataset.chances = chances - 1;
    debug_carta(raridade, porcentagem)
});