"use client";

import Dashboard from "../components/Dashboard";

export default function Home() {
  // In a real application, you would get the userId from authentication
  const userId = "user-123";

  return <Dashboard userId={userId} />;
}
