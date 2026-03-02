import { useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

export default function EmailTest() {
  const [email, setEmail] = useState('info@zwischenpromptundpanik.de');
  const [type, setType] = useState('both');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendTestEmail = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-98da7db4/test-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email, type }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.error || 'Fehler beim Senden der Test-E-Mail');
      }
    } catch (err) {
      console.error('Test email error:', err);
      setError('Netzwerkfehler beim Senden der Test-E-Mail');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            📧 E-Mail Test
          </h1>
          <p className="text-gray-400 mb-6">
            Testen Sie die E-Mail-Templates im Apple Dark Style
          </p>

          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-Mail-Adresse
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="ihre@email.de"
              />
            </div>

            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                E-Mail-Typ
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="both"
                    checked={type === 'both'}
                    onChange={(e) => setType(e.target.value)}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-200">Beide E-Mails (Kunde + Admin)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="customer"
                    checked={type === 'customer'}
                    onChange={(e) => setType(e.target.value)}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-200">Nur Kunden-Bestätigung</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="admin"
                    checked={type === 'admin'}
                    onChange={(e) => setType(e.target.value)}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-200">Nur Admin-Benachrichtigung</span>
                </label>
              </div>
            </div>

            {/* Send Button */}
            <button
              onClick={sendTestEmail}
              disabled={loading || !email}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                loading || !email
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sende E-Mail...</span>
                </span>
              ) : (
                '✉️ Test-E-Mail senden'
              )}
            </button>

            {/* Success Message */}
            {message && (
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                <p className="text-green-400 text-sm">✅ {message}</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                <p className="text-red-400 text-sm">❌ {error}</p>
              </div>
            )}

            {/* Info Box */}
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mt-6">
              <h3 className="text-blue-400 font-semibold mb-2">ℹ️ Hinweis:</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Die Test-E-Mails verwenden Beispieldaten</li>
                <li>• Name: Max Mustermann</li>
                <li>• Termin: 18. April 2026, 09:00 Uhr</li>
                <li>• Betrag: 299,00 €</li>
              </ul>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2"
            >
              <span>←</span>
              <span>Zurück zur Landing Page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}