
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CommercialServices from "./pages/CommercialServices";
import ResidentialServices from "./pages/ResidentialServices";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Individual Service Pages
import MetalRestoration from "./pages/services/MetalRestoration";
import FabricReinforced from "./pages/services/FabricReinforced";
import SinglePly from "./pages/services/SinglePly";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/commercial-services" element={<CommercialServices />} />
          <Route path="/residential-services" element={<ResidentialServices />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Individual Service Pages */}
          <Route path="/services/metal-restoration" element={<MetalRestoration />} />
          <Route path="/services/fabric-reinforced" element={<FabricReinforced />} />
          <Route path="/services/single-ply" element={<SinglePly />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
