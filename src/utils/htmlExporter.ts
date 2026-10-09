import { SlideData } from '../types/presentation';

export function generateStandaloneEditableHTML(slides: SlideData[], sharedUrl: string): string {
  const slidesJson = JSON.stringify(slides);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terapia Intravenosa: Complicaciones y Escala de Maddox | PPT Clínico Editable</title>
  <meta name="description" content="Presentación clínica interactiva y editable sobre la Escala de Maddox, Infiltración, Extravasación, Hematoma y Flebitis.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-rose: #fdf2f4;
      --card-rose: #fef7f8;
      --border-rose: #f4a6b8;
      --highlight-start: #fbcfe8;
      --highlight-mid: #f472b6;
      --text-dark: #111827;
      --accent-rose: #be185d;
      --accent-btn: #0f172a;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: var(--bg-rose);
      color: var(--text-dark);
      line-height: 1.5;
      padding-bottom: 70px;
    }
    header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: linear-gradient(90deg, #fae8eb, #fce7f3, #fae8eb);
      border-bottom: 2px solid var(--border-rose);
      padding: 12px 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }
    .header-title {
      font-weight: 800;
      font-size: 15px;
      color: #0f172a;
    }
    .header-sub {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      background: #fbcfe8;
      padding: 2px 8px;
      border-radius: 999px;
      display: inline-block;
      margin-bottom: 3px;
    }
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }
    button, .action-link {
      background: #ffffff;
      border: 1px solid var(--border-rose);
      color: #111827;
      padding: 7px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      text-decoration: none;
    }
    button:hover, .action-link:hover {
      background: #fce7f3;
      border-color: #f472b6;
    }
    button.btn-primary {
      background: #be185d;
      color: #ffffff;
      border-color: #9d174d;
    }
    button.btn-primary:hover {
      background: #9d174d;
    }
    button.btn-dark {
      background: #0f172a;
      color: #ffffff;
      border-color: #000;
    }
    button.btn-edit-active {
      background: #e11d48 !important;
      color: white !important;
      border-color: #9f1239 !important;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    .main-container {
      max-width: 1080px;
      margin: 24px auto;
      padding: 0 16px;
    }
    .slide-card {
      background: var(--card-rose);
      border: 2px solid var(--border-rose);
      border-radius: 24px;
      box-shadow: 0 10px 25px rgba(225, 29, 72, 0.08);
      overflow: hidden;
    }
    .slide-header {
      padding: 28px 20px 20px;
      text-align: center;
      background: linear-gradient(180deg, #fce7ed, var(--card-rose));
      border-bottom: 1px solid #fed7e2;
    }
    .badge-pill {
      display: inline-block;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: #fbcfe8;
      border: 1px solid var(--border-rose);
      padding: 4px 14px;
      border-radius: 999px;
      margin-bottom: 12px;
      color: #831843;
    }
    /* Centered, Bold, Highlighted Title as strictly requested */
    .highlight-title {
      display: inline-block;
      font-size: 24px;
      font-weight: 900;
      text-align: center;
      color: #000000;
      background: linear-gradient(90deg, #fed7aa00, #fbcfe8 20%, #f472b6 50%, #fbcfe8 80%, #fed7aa00);
      background-color: #fce7f3;
      border: 2px solid #f472b6;
      border-radius: 16px;
      padding: 10px 24px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.06);
      margin: 0 auto;
      max-width: 90%;
    }
    .slide-subtitle {
      margin-top: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #374151;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
    }
    .edit-banner {
      display: none;
      background: #ffe4e6;
      color: #9f1239;
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      border-bottom: 1px solid #fecdd3;
    }
    .slide-body {
      padding: 24px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    @media (min-width: 840px) {
      .slide-body {
        grid-template-columns: 4.5fr 7.5fr;
      }
      .highlight-title {
        font-size: 28px;
      }
    }
    .image-box {
      border: 2px solid var(--border-rose);
      border-radius: 16px;
      overflow: hidden;
      background: #ffffff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.04);
    }
    .image-box img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      display: block;
    }
    .image-caption {
      padding: 10px 14px;
      font-size: 12px;
      color: #4b5563;
      font-style: italic;
      background: #fff5f7;
      text-align: center;
      border-top: 1px solid #fecdd3;
    }
    .content-box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .box-card {
      background: #ffffff;
      border: 1px solid #fbcfe8;
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
    .box-card h4 {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #be185d;
      margin-bottom: 6px;
    }
    .box-card p {
      font-size: 14px;
      color: #111827;
      font-weight: 500;
    }
    .signs-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    @media (min-width: 540px) {
      .signs-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .sign-card {
      background: #fff;
      border: 1px solid #fce7f3;
      border-radius: 12px;
      padding: 10px 12px;
    }
    .sign-card strong {
      font-size: 12px;
      color: #0f172a;
      display: block;
      margin-bottom: 2px;
    }
    .sign-card span {
      font-size: 12px;
      color: #374151;
    }
    .grades-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .grade-item {
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid #ddd;
      font-size: 12px;
    }
    .pearl-box {
      background: linear-gradient(135deg, #fce7ed, #fdf2f4);
      border: 2px solid #f472b6;
      border-radius: 16px;
      padding: 16px;
    }
    .pearl-box h4 {
      color: #831843;
      font-weight: 800;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .pearl-box p {
      font-style: italic;
      font-size: 14px;
      color: #1f2937;
      font-weight: 600;
    }
    .sources-box {
      background: #ffffff;
      border: 1px solid #fce7f3;
      border-radius: 16px;
      padding: 14px 16px;
    }
    .sources-box h4 {
      font-size: 11px;
      font-weight: 800;
      color: #6b7280;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .sources-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .sources-list li a {
      color: #be185d;
      font-weight: 700;
      font-size: 12px;
      text-decoration: none;
    }
    .sources-list li a:hover {
      text-decoration: underline;
    }
    .sources-list li span {
      color: #4b5563;
      font-size: 11px;
      display: block;
    }
    /* Fixed bottom navigation */
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 40;
      background: linear-gradient(90deg, #fae8eb, #fce7f3, #fae8eb);
      border-top: 2px solid var(--border-rose);
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 -2px 6px rgba(0,0,0,0.04);
    }
    .pill-nav {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      max-width: 65%;
      padding-bottom: 2px;
    }
    .pill-btn {
      background: #ffffff;
      border: 1px solid var(--border-rose);
      color: #111827;
      font-weight: 800;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 999px;
      cursor: pointer;
      white-space: nowrap;
    }
    .pill-btn.active {
      background: #0f172a;
      color: #ffffff;
      border-color: #0f172a;
    }
    /* Editable styling */
    [contenteditable="true"] {
      outline: 2px dashed #f43f5e !important;
      outline-offset: 4px;
      background-color: rgba(254, 226, 226, 0.4) !important;
      border-radius: 4px;
      cursor: text;
    }
    [contenteditable="true"]:focus {
      outline: 2px solid #be185d !important;
      background-color: #ffffff !important;
    }
    @media print {
      header, footer, .edit-banner, .btn-group {
        display: none !important;
      }
      body {
        background: white;
        padding-bottom: 0;
      }
      .slide-card {
        border: 1px solid #ccc;
        box-shadow: none;
        page-break-after: always;
      }
    }
  </style>
</head>
<body>

  <div class="edit-banner" id="editBanner">
    ✏️ <strong>MODO EDICIÓN ACTIVADO:</strong> Haz clic directamente sobre cualquier texto, título o perla clínica para editarlo. Tus cambios son inmediatos.
  </div>

  <header>
    <div>
      <span class="header-sub">PPT CLÍNICO OFICIAL & EDITABLE</span>
      <div class="header-title">Terapia Intravenosa: Escala Maddox, Infiltración, Extravasación, Hematoma y Flebitis</div>
    </div>

    <div class="btn-group">
      <button id="btnToggleEdit" onclick="toggleEditMode()">
        ✏️ <span id="editText">Activar Edición HTML</span>
      </button>

      <button onclick="downloadSelfHTML()">
        💾 Guardar / Descargar HTML
      </button>

      <a href="${sharedUrl}" target="_blank" class="action-link" title="Abrir enlace web">
        🔗 Abrir Applet Online
      </a>

      <button onclick="window.print()">
        🖨️ Imprimir / PDF
      </button>
    </div>
  </header>

  <main class="main-container">
    <div class="slide-card" id="slideContainer">
      <!-- Injected via JavaScript -->
    </div>
  </main>

  <footer>
    <div class="pill-nav" id="pillsContainer"></div>

    <div style="display:flex; align-items:center; gap:8px;">
      <button onclick="prevSlide()">← Anterior</button>
      <span id="slideCounter" style="font-size:12px; font-weight:800; min-width:65px; text-align:center;">1 / 10</span>
      <button class="btn-primary" onclick="nextSlide()">Siguiente →</button>
    </div>
  </footer>

  <script>
    const slidesData = ${slidesJson};
    let currentIdx = 0;
    let isEditing = false;

    function renderSlide(index) {
      currentIdx = index;
      const s = slidesData[index];
      const container = document.getElementById('slideContainer');

      let gradesHTML = '';
      if (s.grades && s.grades.length > 0) {
        gradesHTML = '<div class="grades-list" style="margin-top:12px;">' + s.grades.map(g => \`
          <div class="grade-item \${g.severityColor}">
            <strong>\${g.grade} - \${g.title}</strong>
            <div>\${g.signs}</div>
            <div style="margin-top:4px; font-weight:600; color:#831843;">Conducta: \${g.clinicalAction}</div>
          </div>
        \`).join('') + '</div>';
      }

      let signsHTML = '';
      if (s.clinicalSigns && s.clinicalSigns.length > 0) {
        signsHTML = '<div class="signs-grid">' + s.clinicalSigns.map(cs => \`
          <div class="sign-card">
            <strong \${isEditing ? 'contenteditable="true"' : ''}>\${cs.label}</strong>
            <span \${isEditing ? 'contenteditable="true"' : ''}>\${cs.description}</span>
          </div>
        \`).join('') + '</div>';
      }

      let sourcesHTML = '';
      if (s.sources && s.sources.length > 0) {
        sourcesHTML = '<ul class="sources-list">' + s.sources.map(src => \`
          <li>
            <a href="\${src.url}" target="_blank">\${src.name} ↗</a>
            <span>\${src.details}</span>
          </li>
        \`).join('') + '</ul>';
      }

      container.innerHTML = \`
        <div class="slide-header">
          <div><span class="badge-pill" \${isEditing ? 'contenteditable="true"' : ''}>\${s.badge}</span></div>
          <div>
            <h2 class="highlight-title" \${isEditing ? 'contenteditable="true"' : ''}>\${s.questionTitle}</h2>
          </div>
          <p class="slide-subtitle" \${isEditing ? 'contenteditable="true"' : ''}>\${s.subtitle}</p>
        </div>

        <div class="slide-body">
          <div>
            <div class="image-box">
              <img src="\${s.image}" alt="\${s.questionTitle}">
              <div class="image-caption" \${isEditing ? 'contenteditable="true"' : ''}>\${s.imageCaption}</div>
            </div>
          </div>

          <div class="content-box">
            <div class="box-card">
              <h4>Definición Clínica Veraz y Práctica</h4>
              <p \${isEditing ? 'contenteditable="true"' : ''}>\${s.definition}</p>
            </div>

            \${gradesHTML}

            <div class="box-card">
              <h4>Signos Clínicos y Semiología de Cabecera</h4>
              \${signsHTML}
            </div>

            <div class="pearl-box">
              <h4>💡 Perla de Cabecera (Humanización de Enfermería)</h4>
              <p \${isEditing ? 'contenteditable="true"' : ''}>"\${s.clinicalPearl}"</p>
            </div>

            <div class="sources-box">
              <h4>Fuentes Bibliográficas Consultadas</h4>
              \${sourcesHTML}
            </div>
          </div>
        </div>
      \`;

      document.getElementById('slideCounter').textContent = (index + 1) + ' / ' + slidesData.length;
      updatePills();
    }

    function updatePills() {
      const container = document.getElementById('pillsContainer');
      container.innerHTML = slidesData.map((s, idx) => \`
        <button class="pill-btn \${idx === currentIdx ? 'active' : ''}" onclick="renderSlide(\${idx})">
          \${idx + 1}. \${idx === 0 ? 'Portada' : idx <= 5 ? 'Tema ' + idx : idx === 6 ? 'Comparativa' : idx === 7 ? 'Casos' : idx === 8 ? 'Decálogo' : 'Fuentes'}
        </button>
      \`).join('');
    }

    function nextSlide() {
      if (currentIdx < slidesData.length - 1) {
        renderSlide(currentIdx + 1);
      }
    }

    function prevSlide() {
      if (currentIdx > 0) {
        renderSlide(currentIdx - 1);
      }
    }

    function toggleEditMode() {
      isEditing = !isEditing;
      const btn = document.getElementById('btnToggleEdit');
      const text = document.getElementById('editText');
      const banner = document.getElementById('editBanner');

      if (isEditing) {
        btn.classList.add('btn-edit-active');
        text.textContent = 'Desactivar Modo Edición';
        banner.style.display = 'block';
      } else {
        btn.classList.remove('btn-edit-active');
        text.textContent = 'Activar Edición HTML';
        banner.style.display = 'none';
      }
      renderSlide(currentIdx);
    }

    function downloadSelfHTML() {
      const htmlContent = document.documentElement.outerHTML;
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'presentacion_salud_terapia_intravenosa_editable.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if (isEditing && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
    });

    // Initial render
    renderSlide(0);
  </script>
</body>
</html>`;
}
