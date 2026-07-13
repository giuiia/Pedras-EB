/* pedras-lp-inject.js — Early Booking 2026 — Pousada das Pedras
 * Hospedar no GitHub Pages (repo Pedras-EB). Carregado pelo editor JS da LP no RD Station.
 * Versão: 2026-07-13
 */
(function () {
  'use strict';

  // ── 1. Google Fonts ──────────────────────────────────────────────
  var gp1 = document.createElement('link');
  gp1.rel = 'preconnect'; gp1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(gp1);
  var gp2 = document.createElement('link');
  gp2.rel = 'preconnect'; gp2.href = 'https://fonts.gstatic.com'; gp2.crossOrigin = 'anonymous';
  document.head.appendChild(gp2);
  var gf = document.createElement('link');
  gf.rel = 'stylesheet';
  gf.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Montserrat:wght@400;500;600;700&display=swap';
  document.head.appendChild(gf);

  // ── 2. Inject CSS ────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `:root{
    --verde:#356869;
    --verde-escuro:#2b3d3c;
    --bege:#ecc8a5;
    --off-white:#f7f5f1;
    --cinza-texto:#3c4443;
    --branco:#ffffff;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{font-family:'Montserrat',sans-serif;color:var(--cinza-texto);background:var(--branco);line-height:1.6}
  h1,h2,h3.serif{font-family:'Playfair Display',serif}
  img{max-width:100%;display:block}
  a{text-decoration:none}
  .container{max-width:1100px;margin:0 auto;padding:0 24px}
  .eyebrow{font-family:'Montserrat',sans-serif;text-transform:uppercase;letter-spacing:.32em;font-size:12px;font-weight:600}
  .btn{display:inline-block;font-family:'Montserrat',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:14px;padding:16px 34px;border-radius:6px;transition:all .25s ease;cursor:pointer;border:none;text-align:center}
  .btn-verde{background:var(--verde);color:var(--branco)}
  .btn-verde:hover{background:#2a5354;transform:translateY(-2px)}
  .btn-bege{background:var(--bege);color:var(--verde-escuro)}
  .btn-bege:hover{background:#e2b98f;transform:translateY(-2px)}
  section{padding:80px 0}
  .section-title{font-size:clamp(28px,4vw,40px);color:var(--verde);text-align:center;font-weight:600;margin-bottom:12px}
  .section-sub{text-align:center;max-width:620px;margin:0 auto 48px;font-size:16px}

  /* ===== PLACEHOLDER DE IMAGEM (trocar por fotos reais) ===== */
  .img-ph{background:#dfe6e4;border:2px dashed #9db3af;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#5f7572;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;text-align:center;padding:12px}

  /* ===== HERO ===== */
  .hero{position:relative;background:var(--verde-escuro);color:var(--branco);padding:0;overflow:hidden}
  .hero-bg{position:absolute;inset:0;background:url('https://raw.githubusercontent.com/giuiia/Pedras-EB/main/pedrasbanner.png') center/cover no-repeat}
  .hero-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(43,61,60,.55) 0%,rgba(43,61,60,.85) 100%)}
  .hero-logo{position:relative;z-index:2;display:block;margin:0 auto;padding-top:36px;width:190px}
  .hero-content{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center;padding:60px 0 90px}
  .hero-badge{display:inline-block;background:var(--bege);color:var(--verde-escuro);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.18em;padding:8px 18px;border-radius:100px;margin-bottom:28px}
  .hero-kv{width:min(420px,90%);margin-bottom:18px}
  .hero-15off{width:min(210px,55%);margin-bottom:26px}
  .hero-sub{font-size:17px;color:#d8e0de;max-width:480px;margin-bottom:32px}

  /* Countdown */
  .countdown{display:flex;gap:14px;margin-bottom:8px}
  .countdown .unit{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:12px 0;width:76px;text-align:center}
  .countdown .num{font-size:28px;font-weight:700;line-height:1}
  .countdown .lbl{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:#c3cfcc;margin-top:6px}
  .countdown-caption{font-size:12px;color:#c3cfcc;text-transform:uppercase;letter-spacing:.14em;margin-bottom:0}

  /* Card do formulário */
  .form-card{background:var(--branco);color:var(--cinza-texto);border-radius:16px;padding:36px 32px;box-shadow:0 20px 60px rgba(0,0,0,.35)}
  .form-card h2{font-family:'Playfair Display',serif;color:var(--verde);font-size:24px;text-align:center;margin-bottom:6px}
  .form-card .form-sub{text-align:center;font-size:14px;margin-bottom:24px}
  .form-card input{width:100%;background:var(--branco);border:1px solid #cfd9d6;border-radius:8px;padding:13px 16px;font-size:14px;color:var(--cinza-texto);margin-bottom:12px;font-family:'Montserrat',sans-serif;outline:none;transition:border-color .2s}
  .form-card input:focus{border-color:var(--verde)}
  .form-card input::placeholder{color:#8a9895}
  .form-card .btn{width:100%;margin-top:4px}
  .form-msg{font-size:13px;text-align:center;margin-top:12px;display:none}
  .form-msg.erro{display:block;color:#b3452f}
  .form-msg.ok{display:block;color:var(--verde)}

  @media (max-width:880px){
    .hero-content{grid-template-columns:1fr;padding:90px 0 70px;gap:40px}
    .countdown .unit{width:64px}
    section{padding:60px 0}
  }
/* ===== SEÇÃO 2 · BENEFÍCIOS ===== */
  .beneficios{background:var(--off-white)}
  .beneficios-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
  .beneficio{background:var(--branco);border-radius:14px;padding:36px 28px;text-align:center;box-shadow:0 6px 24px rgba(53,104,105,.08)}
  .beneficio .icone{width:64px;height:64px;border-radius:50%;background:rgba(53,104,105,.1);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;font-size:28px}
  .beneficio h3{font-size:17px;color:var(--verde);text-transform:uppercase;letter-spacing:.1em;font-weight:700;margin-bottom:10px}
  .beneficio p{font-size:14.5px}

  /* ===== SEÇÃO 3 · SOCIAL PROOF ===== */
  .notas-badge{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-bottom:40px}
  .nota{background:var(--verde);color:var(--branco);border-radius:10px;padding:14px 26px;font-weight:700;font-size:15px;letter-spacing:.02em}
  .nota span{color:var(--bege)}
  .depo-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;max-width:860px;margin:0 auto}
  .depo{background:var(--off-white);border-radius:14px;padding:32px 28px;position:relative}
  .depo p{font-size:14.5px;font-style:italic;margin-bottom:18px;position:relative}
  .depo .estrelas{color:#e8a83c;font-size:16px;letter-spacing:.15em;margin-bottom:12px;position:relative}
  .depo .autor{font-size:13px;font-weight:700;color:var(--verde);text-transform:uppercase;letter-spacing:.1em}
  .depo .origem{font-size:12px;color:#7a8683}

  /* ===== SEÇÃO 4 · ACOMODAÇÕES ===== */
  .alas-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;margin-bottom:52px}
  .ala-card{background:var(--branco);border-radius:14px;overflow:hidden;box-shadow:0 8px 28px rgba(53,104,105,.12);display:flex;flex-direction:column}
  .ala-card img{height:260px;width:100%;object-fit:cover}
  .ala-body{padding:24px 22px 26px;display:flex;flex-direction:column;flex:1}
  .ala-body h3{font-size:15px;color:var(--verde);text-transform:uppercase;letter-spacing:.14em;font-weight:700;margin-bottom:10px}
  .ala-body .tag-nova{display:inline-block;background:var(--bege);color:var(--verde-escuro);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;padding:3px 10px;border-radius:100px;margin-bottom:10px;align-self:flex-start}
  .ala-body p{font-size:13.5px;flex:1;margin-bottom:18px}
  .cta-meio{text-align:center}

  /* ===== SEÇÃO 5 · MONTE VERDE ===== */
  .monte-verde{background:var(--off-white)}
  .mv-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
  .mv-grid .img-ph{height:340px}
  .mv-texto p{font-size:15.5px;margin-bottom:24px}
  .mv-tags{display:flex;flex-wrap:wrap;gap:10px}
  .mv-tag{background:var(--branco);border:1.5px solid var(--verde);color:var(--verde);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;padding:8px 16px;border-radius:100px}

  @media (max-width:880px){
    .beneficios-grid,.depo-grid{grid-template-columns:1fr}
    .mv-grid{grid-template-columns:1fr}
  }
  @media (max-width:560px){.alas-grid{grid-template-columns:1fr}}
/* ===== SEÇÃO 6 · CTA FINAL ===== */
  .cta-final{background:var(--verde-escuro);color:var(--branco);text-align:center}
  .cta-final h2{font-family:'Playfair Display',serif;font-size:clamp(26px,4vw,38px);font-weight:600;max-width:720px;margin:0 auto 18px}
  .cta-final .sub{max-width:560px;margin:0 auto 34px;color:#d8e0de;font-size:16px}
  .cta-final .nota{font-size:11px;color:#8fa09d;margin-top:14px;font-weight:400}

  /* ===== SEÇÃO 7 · FAQ ===== */
  .faq h2{margin-bottom:40px}
  .faq-list{max-width:760px;margin:0 auto}
  .faq-item{border-bottom:1px solid #e2e8e6}
  .faq-item summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:22px 4px;font-weight:600;font-size:15.5px;color:var(--verde-escuro)}
  .faq-item summary::-webkit-details-marker{display:none}
  .faq-item summary::after{content:'+';font-size:24px;color:var(--verde);font-weight:400;transition:transform .2s}
  .faq-item[open] summary::after{transform:rotate(45deg)}
  .faq-item .resposta{padding:0 4px 22px;font-size:14.5px}

  footer{background:#000;color:#9aa5a3;text-align:center;padding:36px 24px;font-size:12.5px}
  footer .logo-txt{font-family:'Playfair Display',serif;color:var(--branco);font-size:20px;margin-bottom:6px}
  footer .oficial{color:var(--bege);font-weight:600}`;
  document.head.appendChild(style);

  // ── 3. Replace body ──────────────────────────────────────────────
  document.body.innerHTML = `<!-- ===================== SEÇÃO 1 · HERO ===================== -->
<header class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <img class="hero-logo" src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/pedraslogo.png" alt="Pousada das Pedras — Monte Verde, MG">
  <div class="container hero-content">
    <div>
      <img class="hero-kv" src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/PedrasKV.png" alt="Early Booking — Pousada das Pedras">
      <img class="hero-15off" src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/Pedras15OFF.png" alt="15% OFF para reservas de agosto a novembro">
      <p class="countdown-caption">A oferta termina em:</p>
      <div class="countdown" id="countdown">
        <div class="unit"><div class="num" id="cd-dias">--</div><div class="lbl">dias</div></div>
        <div class="unit"><div class="num" id="cd-horas">--</div><div class="lbl">horas</div></div>
        <div class="unit"><div class="num" id="cd-min">--</div><div class="lbl">min</div></div>
        <div class="unit"><div class="num" id="cd-seg">--</div><div class="lbl">seg</div></div>
      </div>
    </div>
    <div class="form-card">
      <h2>Cadastre-se e ganhe seu cupom</h2>
      <p class="form-sub">Receba seu cupom exclusivo e garanta as melhores datas para viver a serra de agosto a novembro de 2026.</p>
      <!-- Formulário RD Station — captura via cta-redirect (padrão Jardim) -->
      <form id="conversion-form" novalidate
            action="https://cta-redirect.rdstation.com/v2/conversions"
            data-typed-fields="1" data-lang="pt-BR">
        <input type="hidden" name="token_rdstation" value="9ecc8882a5e21af8389feec9bcc3e82e">
        <input type="hidden" name="conversion_identifier" value="lp-early-booking-pedras-2026">
        <input type="hidden" name="internal_source" value="2">
        <input type="hidden" name="tags" value="early-booking">
        <input type="hidden" name="c_utmz" value="">
        <input type="hidden" name="traffic_source" value="">
        <input type="text" name="name" id="eb-nome" placeholder="Nome" required autocomplete="name">
        <input type="email" name="email" id="eb-email" placeholder="E-mail" required autocomplete="email">
        <input type="tel" name="personal_phone" id="eb-whatsapp" placeholder="WhatsApp" required autocomplete="tel" inputmode="tel">
        <button class="btn btn-verde" type="submit" id="eb-btn">Quero meu desconto de 15%</button>
        <p class="form-msg" id="eb-msg"></p>
      </form>
    </div>
  </div>
</header>



<!-- ===================== SEÇÃO 2 · POR QUE RESERVAR AGORA? ===================== -->
<section class="beneficios">
  <div class="container">
    <p class="eyebrow" style="text-align:center;color:var(--verde);margin-bottom:10px">Por que reservar agora?</p>
    <h2 class="section-title">Três boas razões para não deixar para depois</h2>
    <div class="beneficios-grid" style="margin-top:48px">
      <div class="beneficio">
        <div class="icone">📅</div>
        <h3>Garanta as melhores datas</h3>
        <p>Quem reserva cedo, escolhe melhor.</p>
      </div>
      <div class="beneficio">
        <div class="icone">🏷️</div>
        <h3>15% de desconto exclusivo</h3>
        <p>O Early Booking é a única forma de garantir esse desconto. Não estará disponível na reserva em OTAs.</p>
      </div>
      <div class="beneficio">
        <div class="icone">💳</div>
        <h3>Parcele em até 3x</h3>
        <p><!-- SUGESTÃO (briefing sem descrição p/ este item): -->Garanta agora e pague com tranquilidade, em até 3 vezes.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===================== SEÇÃO 3 · AVALIAÇÕES DOS HÓSPEDES ===================== -->
<section class="social-proof">
  <div class="container">
    <h2 class="section-title">O que nossos hóspedes dizem</h2>
    <!-- TODO: confirmar notas reais e atualizadas -->
    <div class="notas-badge" style="margin-top:36px">
      <div class="nota"><span>⭐</span> 9,4 no Booking.com</div>
      <div class="nota"><span>⭐</span> 4,8 no Google</div>
    </div>
    <div class="depo-grid">
      <div class="depo">
        <div class="estrelas">★★★★★</div>
        <p>Eu amei! Lugar muito gostoso e tivemos uma ótima experiência. O café é maravilhoso e o pessoal muito atencioso.</p>
        <div class="autor">Camila Tomaz</div>
        <div class="origem">Avaliação no Google · Férias em casal</div>
      </div>
      <div class="depo">
        <div class="estrelas">★★★★★</div>
        <p>Ótima experiência, quarto super aconchegante, um ótimo atendimento e o café da manhã que é excelente.</p>
        <div class="autor">Erik Alexandre</div>
        <div class="origem">Avaliação no Google</div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== SEÇÃO 4 · ACOMODAÇÕES ===================== -->
<section class="alas" style="background:var(--branco);padding-top:40px">
  <div class="container">
    <h2 class="section-title">Encontre o chalé perfeito para vocês</h2>
    <p class="section-sub">Todos os chalés incluem café da manhã e lareira.</p>
    <div class="alas-grid">
      <!-- Linha 1: Prata Premium + Ouro · Linha 2: Diamante + Esmeralda -->
      <div class="ala-card">
        <img src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/Pedrasprata-premium.png" alt="Chalé da Ala Prata Premium">
        <div class="ala-body">
          <h3>Ala Prata Premium</h3>
          <p>Chalé para viver Monte Verde com conforto e ótimo custo-benefício.</p>
        </div>
      </div>
      <div class="ala-card">
        <img src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/Pedrasouro.png" alt="Chalé da Ala Ouro">
        <div class="ala-body">
          <h3>Ala Ouro</h3>
          <p>Chalé com hidromassagem e lareira para uma estadia completa.</p>
        </div>
      </div>
      <div class="ala-card">
        <img src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/Pedrasdiamante.png" alt="Chalé da Ala Diamante">
        <div class="ala-body">
          <h3>Ala Diamante</h3>
          <p>Vista panorâmica da serra, lareira e hidromassagem para datas que merecem o melhor.</p>
        </div>
      </div>
      <div class="ala-card">
        <img src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/Pedrasesmeralda.png" alt="Chalé da Ala Esmeralda">
        <div class="ala-body">
          <h3>Ala Esmeralda</h3>
          <p>A experiência mais completa da pousada. Vista, lareira e hidromassagem.</p>
        </div>
      </div>
    </div>
    <div class="cta-meio">
      <a class="btn btn-verde" href="#topo" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Resgatar meu desconto de 15%</a>
    </div>
  </div>
</section>

<!-- ===================== SEÇÃO 5 · MONTE VERDE ===================== -->
<section class="monte-verde">
  <div class="container">
    <h2 class="section-title">Monte Verde o ano todo é especial</h2>
    <div class="mv-grid" style="margin-top:48px">
      <img src="https://raw.githubusercontent.com/giuiia/Pedras-EB/main/Pedrasmonte-verde.png" alt="Monte Verde — Serra da Mantiqueira" style="height:340px;width:100%;object-fit:cover;border-radius:12px">
      <div class="mv-texto">
        <p>Na Serra da Mantiqueira, setembro marca o fim do inverno e o início das temperaturas perfeitas para explorar trilhas, saborear a gastronomia local e curtir o silêncio de uma cidade que sabe receber. A Pousada das Pedras fica a apenas 4 minutos do centro — distante do movimento, perto de tudo.</p>
        <div class="mv-tags">
          <span class="mv-tag">Clima ameno de ago a nov</span>
          <span class="mv-tag">Natureza, trilhas e fauna nativa</span>
          <span class="mv-tag">Café da manhã incluso</span>
          <span class="mv-tag">A 4 min do centro</span>
          <span class="mv-tag">Acesso 100% asfaltado</span>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- ===================== SEÇÃO 6 · CTA FINAL ===================== -->
<section class="cta-final">
  <div class="container">
    <h2>Não deixe para a última hora. As melhores datas vão primeiro.</h2>
    <p class="sub">Cadastre-se agora e receba seu cupom de <strong>15% OFF</strong> para reservas com check-in de agosto a novembro de 2026.</p>
    <a class="btn btn-bege" href="#topo" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Garantir minha escapada com 15% OFF</a>
  </div>
</section>

<!-- ===================== SEÇÃO 7 · FAQ ===================== -->
<section class="faq">
  <div class="container">
    <h2 class="section-title">Perguntas frequentes</h2>
    <div class="faq-list">
      <details class="faq-item" open>
        <summary>Qual é o desconto e como funciona?</summary>
        <p class="resposta">Você recebe um cupom de 15% OFF válido para reservas com check-in de agosto a novembro de 2026. Basta se cadastrar, receber o cupom por e-mail e aplicá-lo ao fazer sua reserva.</p>
      </details>
      <details class="faq-item">
        <summary>Até quando posso usar o cupom?</summary>
        <p class="resposta">O cupom tem validade até 30/09. Após esse prazo, o desconto não estará mais disponível.</p>
      </details>
      <details class="faq-item">
        <summary>O que está incluso na diária?</summary>
        <p class="resposta">Café da manhã colonial artesanal, acesso à piscina com água natural, sauna seca, ofurô panorâmico, estacionamento e Wi-Fi gratuitos.</p>
      </details>
      <details class="faq-item">
        <summary>Posso cancelar se precisar?</summary>
        <p class="resposta">Sim. Cancelamento sem custo até 10 dias antes do check-in (Melhor Tarifa Disponível). Após esse prazo, o valor depositado fica retido.</p>
      </details>
      <details class="faq-item">
        <summary>Quais são as formas de pagamento?</summary>
        <p class="resposta">50% na reserva e o restante no check-in. Parcelamento em até 6 vezes. Aceitamos Visa, Master, Elo, American Express e PIX.</p>
      </details>
      <details class="faq-item">
        <summary>Qual é o horário de check-in e check-out?</summary>
        <p class="resposta">Check-in a partir das 16h e check-out até as 13h.</p>
      </details>
      <details class="faq-item">
        <summary>A pousada fica longe do centro de Monte Verde?</summary>
        <p class="resposta">Não. Estamos a apenas 4 minutos de carro da avenida principal, com acesso 100% asfaltado — perto de tudo, longe do barulho.</p>
      </details>
    </div>
  </div>
</section>

<footer>
  <p class="logo-txt">Pousada das Pedras</p>
  <p>Monte Verde, MG · Serra da Mantiqueira</p>
  <p style="margin-top:10px">Este é o <span class="oficial">canal oficial</span> da Pousada das Pedras. Reservas somente pelo site e central oficiais.</p>
</footer>`;

  // ── 4. Scripts (form RD via iframe + countdown) ──────────────────
// ===== RD Station — envio via iframe oculto (sem CORS, padrão Jardim) =====
  (function(){
    var URL_OBRIGADO = 'https://giuiia.github.io/Pedras-EB/lp-early-booking-2026-obrigado.html';
    var form = document.getElementById('conversion-form');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var nome = document.getElementById('eb-nome').value.trim();
      var email = document.getElementById('eb-email').value.trim();
      var whats = document.getElementById('eb-whatsapp').value.trim();
      var msg = document.getElementById('eb-msg');
      var btn = document.getElementById('eb-btn');
      msg.className = 'form-msg';

      if(!nome || !email || !whats || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        msg.textContent = 'Preencha nome, e-mail válido e WhatsApp.';
        msg.classList.add('erro');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Enviando...';

      var iframe = document.createElement('iframe');
      iframe.name = 'pedras-rd-frame';
      iframe.style.cssText = 'display:none;width:0;height:0;border:0;';
      document.body.appendChild(iframe);

      form.target = 'pedras-rd-frame';
      form.method = 'post';
      form.action = 'https://cta-redirect.rdstation.com/v2/conversions';
      form.submit();

      setTimeout(function(){
        window.location.href = URL_OBRIGADO;
      }, 1500);
    });
  })();

  // ===== Countdown até 30/09/2026 23:59 (horário de Brasília) =====
  (function(){
    var fim = new Date('2026-09-30T23:59:59-03:00').getTime();
    function tick(){
      var d = fim - Date.now();
      if(d < 0){ d = 0; }
      var dias = Math.floor(d/86400000),
          horas = Math.floor(d%86400000/3600000),
          min = Math.floor(d%3600000/60000),
          seg = Math.floor(d%60000/1000);
      document.getElementById('cd-dias').textContent = String(dias).padStart(2,'0');
      document.getElementById('cd-horas').textContent = String(horas).padStart(2,'0');
      document.getElementById('cd-min').textContent = String(min).padStart(2,'0');
      document.getElementById('cd-seg').textContent = String(seg).padStart(2,'0');
    }
    tick();
    setInterval(tick, 1000);
  })();

})();
