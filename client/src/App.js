import { RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import { appRouter } from "./component/AppLayout";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";


const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter}>
          <AppLayout/>
        </RouterProvider>
      </div>
    </Provider>
    
  );
}

export default App;
