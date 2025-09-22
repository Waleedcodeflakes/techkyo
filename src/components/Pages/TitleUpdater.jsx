import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Techkyo | Managed Services",
  "/company": "Techkyo | Company",
  "/services": "Techkyo | Services",
  "/sectors": "Techkyo | Sectors",
  "/careers": "Techkyo | Careers",
  "/contact": "Techkyo | Contact",
  "/free-audit": "Techkyo | Free Audit",
};

export function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Techkyo";
  }, [location.pathname]);

  return null; // invisible component to chnage title of the page
}