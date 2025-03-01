import AuthService from '../utils/auth'; // ✅ Corrected import

const retrieveUsers = async () => {
  try {
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}` // ✅ Fixed `Auth` to `AuthService`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data;
  } catch (err) { 
    console.error('Error retrieving users:', err);
    return [];
  }
};

export { retrieveUsers };
