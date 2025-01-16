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
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingCharacter } from "@/components/FloatingCharacter";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-background/90">
            <TerminalLoader />
            <ScrollProgress />
            <DayNightBackground />
            <Bubbles />
            <Clock />
            <AudioPlayer />
            <HiddenConsole />
            
            {/* Floating Characters */}
            <FloatingCharacter className="z-50" />
            <FloatingCharacter className="z-50" />
            
            {/* Parallax Background Effect */}
            <Parallax speed={-20}>
              <div className="fixed inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none backdrop-blur-sm" />
            </Parallax>
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1 pt-16 relative">
                <div className="container mx-auto px-4">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </main>
              
              {/* Footer with proper positioning */}
              <div className="relative z-20">
                <Footer />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;