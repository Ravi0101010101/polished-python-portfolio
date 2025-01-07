import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Parallax } from 'react-scroll-parallax';
import { Bubbles } from "@/components/Bubbles";
import { DayNightBackground } from "@/components/DayNightBackground";
import { Clock } from "@/components/Clock";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AudioPlayer } from "@/components/AudioPlayer";
import { TerminalLoader } from "@/components/TerminalLoader";
import { HiddenConsole } from "@/components/HiddenConsole";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen flex flex-col">
          <TerminalLoader />
          <ScrollProgress />
          <DayNightBackground />
          <Bubbles />
          <Clock />
          <AudioPlayer />
          <HiddenConsole />
          <Parallax speed={-20}>
            <div className="fixed inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
          </Parallax>
          <Navigation />
          <main className="flex-1 pt-16 relative z-10">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <div className="relative z-20">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;