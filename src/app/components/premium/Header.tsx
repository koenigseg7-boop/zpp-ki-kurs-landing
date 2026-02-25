import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

const logoImage = '/images/logo.png';

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Vorteile', href: '#benefits' },
    { label: 'Programm', href: '#curriculum' },
    { label: 'Trainer', href: '#trainers' },
    { label: 'Preise', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
      `}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.a 
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 z-50"
          >
            <img src={logoImage} alt="ZPP Logo" className="h-10 w-auto" />
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ y: -1 }}
                className="px-4 py-2 text-base font-medium transition-colors rounded-lg"
                style={{ 
                  color: 'var(--text-sub)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-sub)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <PrimaryButton 
              onClick={onBookClick} 
              size="md"
              className="!py-2.5 !px-6"
            >
              Jetzt Platz sichern
            </PrimaryButton>
          </div>

          {/* Mobile: CTA + Burger */}
          <div className="flex lg:hidden items-center gap-2">
            <PrimaryButton 
              onClick={onBookClick} 
              size="md" 
              className="!px-4 !py-2 !text-sm"
            >
              Buchen
            </PrimaryButton>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-main)' }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="py-4 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all"
                    style={{ color: 'var(--text-sub)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-main)';
                      e.currentTarget.style.backgroundColor = 'var(--surface)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-sub)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}