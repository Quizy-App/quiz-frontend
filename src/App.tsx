import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import routes from "./routes";
import { store } from "./store";
import "./App.css";

const App = () => {
  const pageRoutes = useRoutes(routes);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{pageRoutes}</Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
