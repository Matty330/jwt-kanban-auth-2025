export const AuthService = {
  login: async (username: string, password: string) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Check credentials.');
      }

      const data = await response.json();
      const token = data.token;

      if (token) {
        localStorage.setItem('token', token); // ✅ Save JWT in localStorage
      }

      return token;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem('token'); // ✅ Remove JWT on logout
  },

  getToken: (): string | null => {
    return localStorage.getItem('token'); // ✅ Retrieve JWT token
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token'); // ✅ Check if token exists
  },
};

export default AuthService; // ✅ Ensure AuthService is correctly exported
