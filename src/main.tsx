import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
document.documentElement.classList.toggle("light", (savedTheme || "light") === "light");

createRoot(document.getElementById("root")!).render(<App />);
