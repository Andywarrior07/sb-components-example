import './mylabel.css';

export interface Props {
  /**
   * Mensaje a mostrar
   */
  label: string;
  /**
   * Tamaño del texto
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Captializa el texto
   */
  allCaps?: boolean;
  /**
   * Colores basicos
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color personaliado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  size,
  label,
  fontColor,
  allCaps = false,
  color = 'primary',
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
