import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { StaggerGroup } from '@/app/components/StaggerGroup';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative">
        <StaggerGroup 
          staggerDelay={0.15}
          baseDelay={0}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ZPP - Zwischen Prompt und Panik
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ihre Experten für praxisnahe KI-Weiterbildung. Wir machen Selbständige und Unternehmer 
              fit für die digitale Zukunft – verständlich, praxisnah und sofort anwendbar.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#details" className="hover:text-blue-400 transition-colors">
                  Kurs-Details
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-blue-400 transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>
                  ZPP - Zwischen Prompt und Panik<br />
                  Zülpicher Str. 221<br />
                  52349 Düren
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+4915226396902" className="hover:text-blue-400 transition-colors">
                  01522 6396902
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@zwischenpromptundpanik.de" className="hover:text-blue-400 transition-colors">
                  info@zwischenpromptundpanik.de
                </a>
              </li>
            </ul>
          </div>
        </StaggerGroup>

        {/* Bottom Bar */}
        <ScrollReveal variant="fade" delay={0.6}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© 2026 ZPP - Zwischen Prompt und Panik. Alle Rechte vorbehalten.</p>
              <div className="flex gap-6">
                <Link to="/impressum" className="hover:text-blue-400 transition-colors">
                  Impressum
                </Link>
                <Link to="/datenschutz" className="hover:text-blue-400 transition-colors">
                  Datenschutz
                </Link>
                <Link to="/agb" className="hover:text-blue-400 transition-colors">
                  AGB
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}