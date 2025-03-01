export const login = async (username: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data.token; // Return the JWT token
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};
