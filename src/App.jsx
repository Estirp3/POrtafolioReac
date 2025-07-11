// src/App.jsx
import './assets/css/style.css'; // Asegúrate de importar tu CSS global aquí
import { DeveloperCard, LanguageSwitcherCard, ThemeSwitcherCard, DescaCvCard, LinkedInCard, ProjectsCard } from './components';

function App() {
  return (
    <div className="container">
      {/* Sección Superior (Bento Grid existente) */}
      <div className="bento-grid">
        <div className="bento-left">
          {/* Tarjetas de Idioma y Tema */}
          <LanguageSwitcherCard />
          <ThemeSwitcherCard />
        </div>
        <div className="bento-main">
          {/* Tarjeta de Desarrollador (DeveloperCard) */}
          <DeveloperCard />
        </div>
      </div>

      {/* NUEVA SECCIÓN: Fila de Cajas del Medio */}
      <div className="bento-middle-row">
        <DescaCvCard />
        <LinkedInCard />
        <ProjectsCard />
      </div>

      {/* Sección Inferior (Aún por definir) */}
      {/* ... */}
    </div>
  );
}
export default App;
