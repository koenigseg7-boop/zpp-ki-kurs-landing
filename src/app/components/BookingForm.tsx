import { X, User, Mail, Building, Phone, Calendar, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    date: '7-march',
    message: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');
    
    try {
      // Send booking data to backend and create Stripe checkout
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98da7db4/create-checkout-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const data = await response.json();
      console.log('Response data:', data);
      console.log('Full error details:', JSON.stringify(data, null, 2));

      if (!response.ok) {
        const errorMessage = data.details 
          ? `${data.error}: ${data.details}` 
          : data.error || 'Fehler beim Erstellen der Buchung';
        console.error('Server error:', errorMessage);
        throw new Error(errorMessage);
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        console.log('Redirecting to Stripe:', data.url);
        window.location.href = data.url;
      } else {
        console.error('No URL in response:', data);
        throw new Error('Keine Checkout-URL erhalten');
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
      setIsProcessing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B0F19] rounded-[32px] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 relative"
          >
            {/* Header Background Gradient */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none rounded-t-[32px]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="p-8 relative z-10">
              {/* Header Text */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-1">Platz sichern!</h2>
                <p className="text-blue-200">Nur noch wenige Plätze verfügbar</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Price Badge */}
                <div className="bg-[#1A1500]/40 border border-yellow-500/30 rounded-2xl p-6 flex items-center justify-between relative overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="text-xs text-yellow-500/80 uppercase tracking-wider font-medium mb-1">Frühbucher-Preis</div>
                    <div className="text-4xl font-bold text-white">€299</div>
                  </div>
                  <div className="text-right relative z-10">
                    <div className="text-sm text-gray-500 line-through mb-1">€499</div>
                    <div className="text-green-400 font-bold text-lg">€200 sparen!</div>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2 text-gray-500" />
                      Vorname *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all outline-none"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2 text-gray-500" />
                      Nachname *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all outline-none"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2 text-gray-500" />
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all outline-none"
                    placeholder="max@beispiel.de"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2 text-gray-500" />
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all outline-none"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Building className="w-4 h-4 inline mr-2 text-gray-500" />
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all outline-none"
                    placeholder="Ihre Firma GmbH"
                  />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2 text-gray-500" />
                    Gewünschter Termin *
                  </label>
                  <div className="relative">
                    <select
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all outline-none appearance-none"
                    >
                      <option value="7-march">7. März 2026 (Frühbucher)</option>
                      <option value="11-12-april">11. - 12. April 2026</option>
                      <option value="16-17-may">16. - 17. Mai 2026</option>
                      <option value="13-14-june">13. - 14. Juni 2026</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3.5 bg-[#131722] border border-white/5 rounded-2xl text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none transition-all outline-none"
                    placeholder="Haben Sie besondere Fragen oder Wünsche?"
                  />
                </div>

                {/* Payment Info Box (Blue) */}
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-5 flex gap-4">
                  <CreditCard className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-100 mb-1">Sichere Zahlung</h4>
                    <p className="text-sm text-blue-200/70 leading-relaxed">
                      Sie werden zu Stripe weitergeleitet für eine sichere Zahlung per Kreditkarte oder PayPal.
                    </p>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Wird verarbeitet...' : 'Weiter zur Zahlung'}
                </button>

                <p className="text-center text-xs text-gray-600">
                  🔒 Ihre Daten werden SSL-verschlüsselt übertragen | Es gelten unsere AGB
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}