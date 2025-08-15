# Guía de Deployment para GitHub Pages - HolistiKit

## 📋 Pasos para subir tu web a GitHub Pages

### 1. Preparar el repositorio

1. **Crear repositorio en GitHub**:
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio
   - Nómbralo `holistikit.ar` o el nombre que prefieras
   - Márcalo como **público**
   - NO inicialices con README

2. **Subir el código**:
   ```bash
   # Desde tu carpeta del proyecto
   git init
   git add .
   git commit -m "Initial commit - HolistiKit website"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/holistikit.ar.git
   git push -u origin main
   ```

### 2. Configurar GitHub Pages

1. **En tu repositorio de GitHub**:
   - Ve a `Settings` → `Pages`
   - En `Source`, selecciona `GitHub Actions`
   - GitHub detectará automáticamente que es un proyecto Vite

2. **Crear archivo de deployment**:
   Crea el archivo `.github/workflows/deploy.yml` con el contenido de abajo

### 3. Configurar dominio personalizado (holistikit.ar)

1. **En GitHub Pages**:
   - En `Settings` → `Pages` → `Custom domain`
   - Ingresa: `holistikit.ar`
   - Espera que GitHub verifique el dominio

2. **En nic.ar**:
   - Configura los DNS apuntando a GitHub:
     ```
     A record: @ → 185.199.108.153
     A record: @ → 185.199.109.153
     A record: @ → 185.199.110.153
     A record: @ → 185.199.111.153
     CNAME: www → TU_USUARIO.github.io
     ```

### 4. Estructura final del proyecto

```
holistikit.ar/
├── .github/workflows/deploy.yml  (archivo de deployment)
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── ...
├── public/
│   ├── manifest.json
│   └── ...
├── index.html
├── vite.config.ts
└── package.json
```

### 5. Variables editables

Para personalizar fácilmente tu web, edita:

**Contenido y textos**: 
- `src/components/HeroSection.tsx` - Título y descripción principal
- `src/components/AboutSection.tsx` - Tu historia personal
- `src/components/ServicesSection.tsx` - Tus servicios
- `src/components/ContactSection.tsx` - Información de contacto

**Imágenes**:
- `src/assets/hero-image.jpg` - Imagen de fondo del hero
- `src/assets/profile-image.jpg` - Tu foto de perfil

**Colores y diseño**:
- `src/index.css` - Variables de colores y diseño

**Metadatos SEO**:
- `index.html` - Título, descripción, keywords

### 6. Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```

## 🚀 ¡Listo!

Una vez configurado todo, tu web estará disponible en:
- `https://TU_USUARIO.github.io/holistikit.ar` (GitHub Pages)
- `https://holistikit.ar` (tu dominio personalizado)

Los cambios se deployan automáticamente cada vez que hagas `git push` a la rama `main`.