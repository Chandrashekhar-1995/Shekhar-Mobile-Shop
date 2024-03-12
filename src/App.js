import { RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import { appRouter } from "./component/AppLayout";


const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}>
        <AppLayout/>
      </RouterProvider>
    </div>
    
  );
}

export default App;
