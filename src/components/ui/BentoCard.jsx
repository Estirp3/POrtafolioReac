// components/BentoCard.jsx
import bentoStyle from '../../styles/modules/bentoCard.module.css';

const BentoCard = ({ children, className, ...props }) => (
  <div className={`${bentoStyle.bentoCard} ${className || ''}`} {...props}>
    {children}
  </div>
);

export default BentoCard;
