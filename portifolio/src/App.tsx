
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SobreMim from "./routes/SobreMim";
import Projetos from "./routes/Projetos";
import Experiencias from "./routes/Experiencias";
import Contato from "./routes/Contato";
import NotFound from "./routes/NotFound"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos/>} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/contato" element={<Contato />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;