import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

export function HomePage() {
  const { logout, token } = useAuth();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserEmail(data.email);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Welcome, {userEmail}!</h1>
        <Button 
          onClick={logout}
          className="w-full"
          variant="destructive"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
