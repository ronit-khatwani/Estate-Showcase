import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Properties from "@/pages/Properties";
import PropertyDetail from "@/pages/PropertyDetail";
import MapView from "@/pages/MapView";
import Agents from "@/pages/Agents";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
    },
  },
});

function NoNavFooter({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function WithNavFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <Switch>
        <Route path="/">
          <WithNavFooter><Home /></WithNavFooter>
        </Route>
        <Route path="/properties">
          <WithNavFooter><Properties /></WithNavFooter>
        </Route>
        <Route path="/residential">
          <WithNavFooter><Properties forcedType="residential" /></WithNavFooter>
        </Route>
        <Route path="/commercial">
          <WithNavFooter><Properties forcedType="commercial" /></WithNavFooter>
        </Route>
        <Route path="/plots">
          <WithNavFooter><Properties forcedType="plot" /></WithNavFooter>
        </Route>
        <Route path="/industrial">
          <WithNavFooter><Properties forcedType="industrial" /></WithNavFooter>
        </Route>
        <Route path="/property/:id">
          <WithNavFooter><PropertyDetail /></WithNavFooter>
        </Route>
        <Route path="/map">
          <NoNavFooter>
            <div className="flex flex-col h-screen">
              <Navbar />
              <MapView />
            </div>
          </NoNavFooter>
        </Route>
        <Route path="/agents">
          <WithNavFooter><Agents /></WithNavFooter>
        </Route>
        <Route path="/about">
          <WithNavFooter><About /></WithNavFooter>
        </Route>
        <Route path="/contact">
          <WithNavFooter><Contact /></WithNavFooter>
        </Route>
        <Route>
          <WithNavFooter><NotFound /></WithNavFooter>
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
