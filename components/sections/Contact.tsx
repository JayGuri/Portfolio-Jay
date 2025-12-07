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
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-0 left-0">
          <MorphingBlob color="#DA020E" size={500} />
        </div>
        <div className="absolute bottom-0 right-0">
          <MorphingBlob color="#FFD700" size={450} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-[10]">
        <ScrollReveal>
          <motion.h2
            className="text-7xl md:text-9xl font-black text-white mb-8"
            style={{
              textShadow: '0 0 80px rgba(218, 2, 14, 0.5)',
            }}
          >
            CONTACT
          </motion.h2>
          <p className="text-2xl text-white/80 mb-12">
            Let's connect and discuss opportunities
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[#DA020E] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl font-black text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register('name')}
                        className={errors.name ? 'border-[#DA020E]' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-[#DA020E] mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register('email')}
                        className={errors.email ? 'border-[#DA020E]' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-[#DA020E] mt-1">{errors.email.message}</p>
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
                        className={errors.message ? 'border-[#DA020E]' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-[#DA020E] mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-[#FFD700]/20 border-2 border-[#FFD700] text-[#FFD700]"
                      >
                        Message sent! I'll get back to you soon.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-[#DA020E]/20 border-2 border-[#DA020E] text-[#DA020E]"
                      >
                        Failed to send message. Please try again or contact me directly.
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-[#DA020E] hover:bg-[#A0000A] text-white border-2 border-[#DA020E] shadow-[0_0_40px_rgba(218,2,14,0.5)]"
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
                <Card className="bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[#FFD700] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 bg-[#DA020E]/20 rounded-lg">
                          <Mail className="h-6 w-6 text-[#DA020E]" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Email</div>
                          <a
                            href={`mailto:${socialLinks.email}`}
                            className="text-white hover:text-[#DA020E] transition-colors font-semibold"
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
                        <div className="p-3 bg-[#FFD700]/20 rounded-lg">
                          <Phone className="h-6 w-6 text-[#FFD700]" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Phone</div>
                          <a
                            href={`tel:${socialLinks.phone}`}
                            className="text-white hover:text-[#FFD700] transition-colors font-semibold"
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
                        <div className="p-3 bg-[#DA020E]/20 rounded-lg">
                          <MapPin className="h-6 w-6 text-[#DA020E]" />
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
                <Card className="bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[#DA020E] transition-all duration-300">
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
                          className="bg-transparent border-2 border-white/20 text-white hover:border-[#DA020E] hover:text-[#DA020E]"
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
                          className="bg-transparent border-2 border-white/20 text-white hover:border-[#FFD700] hover:text-[#FFD700]"
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
                          className="bg-transparent border-2 border-white/20 text-white hover:border-[#FFD700] hover:text-[#FFD700]"
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
