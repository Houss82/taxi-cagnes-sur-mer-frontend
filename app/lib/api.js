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
    const response = await fetch(`${API_BASE_URL}/users/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de la création de la réservation')
    }

    return data
  } catch (error) {
    console.error('Erreur API:', error)
    throw error
  }
}

