const API_KEY = '99a767c2-5606-4813-a586-54a4526530ed';

export async function apiFetch(endpoint, options = {}) {
  const {
    method = 'GET',
    body,
    headers = {},
    withCredentials = false, 
  } = options;

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(withCredentials && { credentials: 'include' }), 
  };

  const response = await fetch(`${endpoint}`, config);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ${response.status}: ${errorText}`);
  }

  return response.json();
}
