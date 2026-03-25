import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

const app = express();
app.use(express.json());

// API Route for Contact Form
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  
  console.log("Received contact form submission:", { name, email, subject, message });
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  res.json({ success: true, message: "Thank you! Your message has been sent successfully." });
});

async function startServer() {
  const PORT = 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production" && process.env.VERCEL !== "1") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Note: Vercel handles the SPA routing via vercel.json, 
    // but we keep this for local production testing.
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Only listen if not running as a Vercel function
  if (process.env.VERCEL !== "1") {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

// Start the server for local dev/prod
if (process.env.VERCEL !== "1") {
  startServer();
}

export default app;
