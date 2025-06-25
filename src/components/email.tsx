import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';
import type { JSX } from 'react';

export const Email:React.FC=()=> {
  return (
    <Html>
      <Head />
      <Preview>Excited to connect with you!</Preview>
      <Body style={{ backgroundColor: '#f9fafb', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '6px' }}>
          <Section>
            <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              Hello 👋
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
              I hope you're having a wonderful day!
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
              My name is <strong>Swapnith Kondapalli</strong>, and I’m excited to introduce myself.
              I’m a passionate developer experienced in full-stack technologies like React, Node.js,
              TypeScript, and SAP BTP. I love building products that make a positive impact.
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '12px' }}>
              I’d love the opportunity to connect, collaborate, or contribute wherever I can.
              Please feel free to reach out — I look forward to hearing from you!
            </Text>
            <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Best regards,<br />
              Swapnith Kondapalli
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
