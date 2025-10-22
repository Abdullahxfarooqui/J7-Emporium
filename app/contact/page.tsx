'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-bg-primary">
      <div className="container-j7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="heading-gradient text-4xl md:text-5xl font-sora font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg font-inter text-text-body mb-12">
            Get in touch with our team for inquiries and assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-premium p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary-mid" />
              <h3 className="font-sora font-semibold text-text-primary mb-2">Email</h3>
              <a href="mailto:info@j7emporium.com" className="text-sm font-inter text-text-body hover:text-accent-gold transition-colors">
                info@j7emporium.com
              </a>
            </div>

            <div className="card-premium p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary-mid" />
              <h3 className="font-sora font-semibold text-text-primary mb-2">Phone</h3>
              <a href="tel:+923001234567" className="text-sm font-inter text-text-body hover:text-accent-gold transition-colors">
                +92 300 1234567
              </a>
            </div>

            <div className="card-premium p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary-mid" />
              <h3 className="font-sora font-semibold text-text-primary mb-2">Location</h3>
              <p className="text-sm font-inter text-text-body">
                Sector B-17, Islamabad
              </p>
            </div>
          </div>

          <p className="text-base font-inter text-text-muted">
            For detailed inquiries, please use the registration form on our homepage.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
