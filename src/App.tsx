import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PracticeAreasPage from "./pages/PracticeAreas";
import AboutPage from "./pages/About";
import TeamPage from "./pages/Team";
import TestimonialsPage from "./pages/Testimonials";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Abhay from "./pages/key-pillars/Abhay";
import Ansh from "./pages/key-pillars/Ansh";
import Principles from "./components/Principles";
import Job from "./components/Job";
import Internship from "./components/Internship";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/about-ab-a" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/key-pillars/abhay" element={<Abhay/>} />
        <Route path="/key-pillars/ansh" element={<Ansh/>} />
        <Route path="/guiding-principles" element={<Principles/>} />
        <Route path="/careers/jobs" element={<Job/>} />
        <Route path="/careers/internships" element={<Internship/>} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
