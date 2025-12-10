'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/constants';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject || 'Portfolio Contact',
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-black">
      {/* DarkVeil Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <DarkVeil 
          hueShift={15}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.3}
          resolutionScale={1}
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-[1] opacity-20">
        <div className="absolute top-0 left-0">
          <MorphingBlob color="#3B82F6" size={500} />
        </div>
        <div className="absolute bottom-0 right-0">
          <MorphingBlob color="#60A5FA" size={450} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-[10]">

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[accent-primary] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register('name')}
                        className={errors.name ? 'border-accent-primary' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-accent-primary mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register('email')}
                        className={errors.email ? 'border-accent-primary' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-accent-primary mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        placeholder="Subject (Optional)"
                        {...register('subject')}
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={6}
                        {...register('message')}
                        className={errors.message ? 'border-accent-primary' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-accent-primary mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-accent-secondary/20 border border-accent-secondary/40 text-accent-secondary"
                      >
                        Message sent! I'll get back to you soon.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-accent-primary/20 border border-accent-primary/40 text-accent-primary"
                      >
                        Failed to send message. Please try again or contact me directly.
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border border-white/8 hover:border-accent-secondary/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 bg-accent-primary/20 rounded-lg">
                          <Mail className="h-6 w-6 text-accent-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Email</div>
                          <a
                            href={`mailto:${socialLinks.email}`}
                            className="text-white hover:text-accent-primary transition-colors font-semibold"
                          >
                            {socialLinks.email}
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 bg-accent-secondary/20 rounded-lg">
                          <Phone className="h-6 w-6 text-accent-secondary" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Phone</div>
                          <a
                            href={`tel:${socialLinks.phone}`}
                            className="text-white hover:text-accent-secondary transition-colors font-semibold"
                          >
                            {socialLinks.phone}
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 bg-accent-primary/20 rounded-lg">
                          <MapPin className="h-6 w-6 text-accent-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Location</div>
                          <div className="text-white font-semibold">{socialLinks.location}</div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border border-white/8 hover:border-accent-primary/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-white">Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(socialLinks.linkedin, '_blank')}
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(socialLinks.github, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(socialLinks.instagram, '_blank')}
                        >
                          <Instagram className="mr-2 h-4 w-4" />
                          Instagram
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
