// src/App.jsx
import './assets/css/style.css'; // Asegúrate de importar tu CSS global aquí
import DeveloperCard from './components/DeveloperCard';
import BentoCard from './components/BentoCard';
import LanguageSwitcherCard from './components/LanguageSwitcherCard'; // Asumiendo que tienes estos componentes
import ThemeSwitcherCard from './components/ThemeSwitcherCard'; // Asumiendo que tienes estos componentes

function App() {
  return (
    <div className="container">
      <div className="bento-grid">
        <div className="bento-left">
          {/* Aquí tus tarjetas cuadradas y juntas */}
          <BentoCard>
            <LanguageSwitcherCard />
          </BentoCard>
          <BentoCard>
            <ThemeSwitcherCard />
          </BentoCard>
        </div>
        <div className="bento-main">
          {/* Aquí tu DeveloperCard, que ocupa la mayor parte del espacio */}
          <DeveloperCard />
        </div>
      </div>
    </div>
  );
}

export default App;