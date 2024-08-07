import { ReactElement } from 'react';
import ChartLineIcon from '../../../assets/chart-line.svg';
import LightIcon from '../../../assets/lightbulb.svg';
import CreditCardIcon from '../../../assets/credit-card.svg';
import HandCoinsIcons from '../../../assets/hand-coins.svg';

export type FAQItem = {
  question: string;
  answer: string;
  icon: ReactElement;
};

// todo:
// 1. Definir contenido real
// 1.1. Que sea español

const faqItems: FAQItem[] = [
  {
    question: '¿Qué es Fin 5?',
    answer: 'Fin 5 es una aplicación financiera que te ayuda a organizar y controlar tus finanzas personales y familiares de manera intuitiva.',
    icon: <ChartLineIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Cómo puedo empezar a usar Fin 5?',
    answer: 'Puedes comenzar a usar Fin 5 registrándote en nuestra plataforma y disfrutando de un periodo de prueba gratuito de 14 días.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Cómo administro mis ingresos y gastos?',
    answer: 'Fin 5 te permite registrar y categorizar tus ingresos y gastos, brindándote una visión clara de tu situación financiera.',
    icon: <CreditCardIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Puedo establecer metas financieras?',
    answer: 'Sí, con Fin 5 puedes establecer metas financieras personalizadas y hacer seguimiento de tu progreso para alcanzarlas.',
    icon: <HandCoinsIcons style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Es seguro usar Fin 5?',
    answer: 'Sí, Fin 5 utiliza cifrado de nivel industrial para proteger tus datos y garantizar tu privacidad.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Puedo compartir mi cuenta con otros miembros de mi familia?',
    answer: 'Sí, Fin 5 te permite compartir el acceso a tu cuenta con miembros de tu familia para que puedan colaborar en la gestión financiera.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Cómo me contacto con soporte?',
    answer: 'Puedes contactar a nuestro equipo de soporte a través de la página de soporte o enviando un correo electrónico a soporte@fin5.com.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Cómo puedo cancelar mi suscripción?',
    answer: 'Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. La cancelación se hará efectiva al final del periodo de facturación actual.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Ofrecen descuentos?',
    answer: 'Sí, ofrecemos descuentos para estudiantes, organizaciones sin fines de lucro y compras en grandes cantidades. Contacta a nuestro equipo de ventas para más información.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: '¿Cómo puedo actualizar mis datos de contacto?',
    answer: 'Para actualizar tus datos de contacto, ve a la configuración de tu cuenta y edita la información correspondiente.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
];

export default faqItems;







