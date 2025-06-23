export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", marginBottom: "1rem" }}>
        Therapist Dashboard
      </h1>
      <p style={{ color: "#666", lineHeight: "1.6" }}>
        Welcome to your therapist dashboard. This application is now running
        successfully!
      </p>
      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#f0f8ff",
          border: "1px solid #0066cc",
          borderRadius: "4px",
        }}
      >
        <h2 style={{ color: "#0066cc", marginTop: 0 }}>Getting Started</h2>
        <p style={{ margin: 0, color: "#333" }}>
          The application has been successfully set up and is ready for
          development.
        </p>
      </div>
    </main>
  );
}
