'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/constants';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

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
      // Using EmailJS - you'll need to set up your service
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
    <section id="contact" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Let's connect and discuss opportunities
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register('name')}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
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
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400">
                      Message sent! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400">
                      Failed to send message. Please try again or contact me directly.
                    </div>
                  )}

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.3}>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-accent-primary" />
                      <div>
                        <div className="text-sm text-text-secondary">Email</div>
                        <a
                          href={`mailto:${socialLinks.email}`}
                          className="text-text-primary hover:text-accent-primary transition-colors"
                        >
                          {socialLinks.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-accent-primary" />
                      <div>
                        <div className="text-sm text-text-secondary">Phone</div>
                        <a
                          href={`tel:${socialLinks.phone}`}
                          className="text-text-primary hover:text-accent-primary transition-colors"
                        >
                          {socialLinks.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-accent-primary" />
                      <div>
                        <div className="text-sm text-text-secondary">Location</div>
                        <div className="text-text-primary">{socialLinks.location}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(socialLinks.linkedin, '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(socialLinks.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(socialLinks.instagram, '_blank')}
                    >
                      <Instagram className="mr-2 h-4 w-4" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

