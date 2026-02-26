import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, CheckCircle, Clock, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { PremiumBackground } from '@/app/components/PremiumBackground';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface Booking {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  date: string;
  message: string;
  amount: number;
  status: 'pending' | 'paid';
  createdAt: string;
  paidAt?: string;
}

export function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98da7db4/bookings`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Laden der Buchungen');
      }

      setBookings(data.bookings || []);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getDateLabel = (dateKey: string) => {
    const labels: Record<string, string> = {
      '4-april': '4. April 2026',
    };
    return labels[dateKey] || dateKey;
  };

  const stats = {
    total: bookings.length,
    paid: bookings.filter(b => b.status === 'paid').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    revenue: bookings.filter(b => b.status === 'paid').reduce((sum, b) => sum + b.amount, 0),
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <PremiumBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 text-lg">
            Übersicht aller Buchungen für den KI-Kurs
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-gray-400 text-sm font-medium">Gesamt</h3>
            </div>
            <p className="text-3xl font-bold text-white">{stats.total}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-gray-400 text-sm font-medium">Bezahlt</h3>
            </div>
            <p className="text-3xl font-bold text-white">{stats.paid}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-gray-400 text-sm font-medium">Ausstehend</h3>
            </div>
            <p className="text-3xl font-bold text-white">{stats.pending}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold">€</span>
              </div>
              <h3 className="text-gray-400 text-sm font-medium">Umsatz</h3>
            </div>
            <p className="text-3xl font-bold text-white">€{stats.revenue}</p>
          </motion.div>
        </div>

        {/* Bookings List */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <p className="text-gray-400 mt-4">Lade Buchungen...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-red-300">
            {error}
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 text-center">
            <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Noch keine Buchungen vorhanden</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      booking.status === 'paid' 
                        ? 'bg-green-500/20' 
                        : 'bg-orange-500/20'
                    }`}>
                      {booking.status === 'paid' ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <Clock className="w-6 h-6 text-orange-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {booking.firstName} {booking.lastName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatDate(booking.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'paid'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {booking.status === 'paid' ? 'Bezahlt' : 'Ausstehend'}
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">€{booking.amount}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">E-Mail</p>
                      <p className="text-white text-sm">{booking.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Telefon</p>
                      <p className="text-white text-sm">{booking.phone}</p>
                    </div>
                  </div>

                  {booking.company && (
                    <div className="flex items-center gap-3">
                      <Building className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Unternehmen</p>
                        <p className="text-white text-sm">{booking.company}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Termin</p>
                      <p className="text-white text-sm">{getDateLabel(booking.date)}</p>
                    </div>
                  </div>

                  {booking.message && (
                    <div className="flex items-start gap-3 md:col-span-2">
                      <MessageSquare className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-gray-500">Nachricht</p>
                        <p className="text-white text-sm">{booking.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}