import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import DisclaimerPop from "./components/DisclaimerPop";

const Index = lazy(() => import("./pages/Index"));
const PracticeAreasPage = lazy(() => import("./pages/PracticeAreas"));
const AboutPage = lazy(() => import("./pages/About"));
const TeamPage = lazy(() => import("./pages/Team"));
const TestimonialsPage = lazy(() => import("./pages/Testimonials"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Abhay = lazy(() => import("./pages/key-pillars/Abhay"));
const Ansh = lazy(() => import("./pages/key-pillars/Ansh"));
const Principles = lazy(() => import("./components/Principles"));
const Job = lazy(() => import("./components/Job"));
const Internship = lazy(() => import("./components/Internship"));
const GalleryPage = lazy(() => import("./pages/Gallery"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <DisclaimerPop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas" element={<PracticeAreasPage />} />
          <Route path="/about-ab-a" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/key-pillars/abhay" element={<Abhay />} />
          <Route path="/key-pillars/ansh" element={<Ansh />} />
          <Route path="/guiding-principles" element={<Principles />} />
          <Route path="/careers/jobs" element={<Job />} />
          <Route path="/careers/internships" element={<Internship />} />
          <Route path="/photo-gallery" element={<GalleryPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
