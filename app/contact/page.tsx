import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | Jay Guri',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <PageLayout
      title="CONTACT"
      subtitle="Get in touch with me"
    >
      <Contact />
    </PageLayout>
  );
}

