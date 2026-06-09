// Fonction utilitaire pour appeler l'API backend
// En production, utilise l'URL Vercel du backend
// En développement, utilise localhost:3001
const getApiBaseUrl = () => {
  // Si une URL est définie dans les variables d'environnement, l'utiliser
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // En production (Vercel), utiliser l'URL du backend Vercel
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
    return 'https://taxi-cagnes-sur-mer-backend.vercel.app';
  }
  
  // En développement local
  return 'http://localhost:3001';
};

const API_BASE_URL = getApiBaseUrl();

export async function createReservation(reservationData) {
  try {
    console.log('📤 Envoi de la réservation à:', `${API_BASE_URL}/users/reservation`);
    
    const response = await fetch(`${API_BASE_URL}/users/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
      // Ajouter cache: 'no-cache' pour éviter les problèmes de cache
      cache: 'no-cache',
    })

    console.log('📥 Réponse reçue:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    });

    const data = await response.json()

    if (!response.ok) {
      console.error('❌ Erreur API:', {
        status: response.status,
        data: data,
      });
      throw new Error(data.error || 'Erreur lors de la création de la réservation')
    }

    console.log('✅ Réservation créée avec succès');
    return data
  } catch (error) {
    console.error('❌ Erreur API complète:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
    throw error
  }
}

// Fonction pour logger les erreurs d'envoi d'email au backend
export async function logEmailError(reservationId, error, details) {
  try {
    await fetch(`${API_BASE_URL}/users/log-email-error`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationId: reservationId || null,
        error: error || 'Erreur inconnue',
        details: details || {},
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // Ignorer les erreurs de logging pour ne pas bloquer le flux
    });
  } catch (err) {
    // Ignorer silencieusement les erreurs de logging
    console.error('Impossible de logger l\'erreur email:', err);
  }
}

