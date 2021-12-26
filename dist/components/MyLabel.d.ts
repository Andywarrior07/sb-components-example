/// <reference types="react" />
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
export declare const MyLabel: ({ size, label, fontColor, allCaps, color, }: Props) => JSX.Element;
