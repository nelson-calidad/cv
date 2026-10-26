# Nelson Notario — Portafolio Profesional

Sitio web estático, ejecutivo y de alto rendimiento. Presenta un perfil multidisciplinario que equilibra **Ingeniería Industrial**, **Gestión de Calidad** y **Automatización de Procesos con Inteligencia Artificial**.

---

## 🧭 Estructura del Proyecto

```text
nelson-portafolio-v2/
├── index.html            # Portada ejecutiva, presentación, experiencia y proyectos
├── styles.css            # Sistema de diseño sobrio (Manrope + DM Sans, paleta corporativa)
├── app.js                # Catálogo de proyectos, filtros, previews vectoriales y modal
├── README.md             # Documentación técnica y guía de despliegue
└── demos/                # Demostraciones interactivas 100% aisladas
    ├── demo.css          # Estilos compartidos para las aplicaciones de prueba
    ├── scoring.html      # Simulación de validación digital de suscripciones (Scoring)
    ├── scoring.js
    ├── tablero.html      # Tablero gerencial de indicadores y métricas de calidad
    ├── tablero.js
    ├── legajos.html      # Audit Legajos Pro: checklist normativo PCGC / ISO
    ├── legajos.js
    ├── insumos.html      # Gestión y circuito de autorización de insumos de taller
    ├── insumos.js
    ├── avance-pvt.html   # Dashboard de productividad y servicios de posventa
    ├── avance-pvt.js
    ├── fideliza.html     # Agenda de asesores y recontactos preventivos
    └── fideliza.js
```

---

## 🛡️ Aislamiento y Seguridad en Demostraciones

Todas las demostraciones incluidas en este repositorio:
1. Operan de forma **100% independiente** en la memoria del navegador.
2. Utilizan **datos y clientes estrictamente ficticios**.
3. **No se conectan** a Google Sheets corporativos, Google Apps Script, Netlify, Render ni bases de datos privadas.
4. **No contienen credenciales, tokens ni claves de API**.
5. No reproducen registros reales ni información confidencial de clientes o de la empresa.

---

## 💻 Ejecución en Local

Podés probar el sitio en tu computadora sin necesidad de compilar ni instalar dependencias:

### Opción A: Con Live Server (VS Code)
1. Abrí la carpeta `nelson-portafolio-v2` en Visual Studio Code.
2. Hacé clic derecho sobre `index.html` y seleccioná **Open with Live Server**.

### Opción B: Con Python (Terminal)
```bash
# Desde la carpeta del proyecto:
python -m http.server 8000
```
Luego abrí en tu navegador: `http://localhost:8000`.

---

## 🚀 Publicación en Cloudflare Pages

Para publicar el sitio en **Cloudflare Pages**:

1. Subí esta carpeta a un repositorio en tu cuenta de GitHub (por ejemplo, `nelson-portafolio`).
2. Ingresá a tu panel de **Cloudflare** (`dash.cloudflare.com`) y andá a **Workers & Pages**.
3. Hacé clic en **Create application** → pestaña **Pages** → **Connect to Git**.
4. Seleccioná el repositorio `nelson-portafolio`.
5. En la configuración de Build:
   - **Framework preset:** `None`
   - **Build command:** *(dejar vacío)*
   - **Build output directory:** `/` *(raíz del repositorio)*
6. Hacé clic en **Save and Deploy**. En pocos segundos el sitio estará activo en una URL rápida y segura `https://...pages.dev` con HTTPS automático y CDN global.

---

## 🐙 Publicación en GitHub Pages

1. En tu repositorio de GitHub, andá a **Settings** → **Pages**.
2. En **Build and deployment** / **Source**, seleccioná: `Deploy from a branch`.
3. En **Branch**, seleccioná `main` (o `master`) y carpeta `/(root)`.
4. Hacé clic en **Save**. Tu portafolio estará disponible en `https://nelsoncalidad15-ops.github.io/nelson-portafolio/`.

---

## 📐 Criterio de Diseño y Paleta

- **Azul petróleo corporativo:** `#1D5060`
- **Texto principal:** `#192B33`
- **Gris secundario:** `#64767E`
- **Superficie clara:** `#F6F8F9`
- **Blanco puro predominante:** `#FFFFFF`
- **Bordes tenues:** `#E5ECEF`
- **Tipografía:** *Manrope* (títulos y métricas) y *DM Sans* (cuerpo y navegación).
