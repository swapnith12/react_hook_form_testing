import { Resend } from 'resend';
import {Email} from '@/components/email'; 
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';

export const resend = new Resend(import.meta.env.VITE_RESEND_KEY);
// const emailContent: React.ReactNode = <Email />;

