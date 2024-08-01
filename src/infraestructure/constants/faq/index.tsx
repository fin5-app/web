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

const faqItems: FAQItem[] = [
  {
    question: 'What is Linear?',
    answer: 'Linear is a modern issue tracking tool for software development.',
    icon: <ChartLineIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'How to integrate GitHub with Linear?',
    answer: 'You can integrate GitHub with Linear by going to Settings > Integrations > GitHub and following the setup instructions.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'What is 3D Secure 2.1?',
    answer: '3D Secure 2.1 is an improved authentication protocol for online transactions, enhancing security and user experience.',
    icon: <CreditCardIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions.',
    icon: <HandCoinsIcons style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'How do I change my email address?',
    answer: 'To change your email address, go to your account settings and update your email information.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use industry-standard encryption to protect your data and ensure your privacy.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with our service, you can request a refund within 30 days of purchase.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact our support team via the support page or by emailing support@linear.com.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'You can cancel your subscription at any time from your account settings. Cancellations take effect at the end of the current billing period.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
  {
    question: 'Are there any discounts available?',
    answer: 'Yes, we offer discounts for students, non-profits, and bulk purchases. Please contact our sales team for more information.',
    icon: <LightIcon style={{ width: 40, height: 40 }} className='text-text-primary'/>,
  },
];

export default faqItems;




