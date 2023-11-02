import { useEffect} from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useFullScreenHandle } from "react-full-screen";
import Default from './layouts';
import { publicRoutes } from './routes';


function App() {
  const handle = useFullScreenHandle();
  useEffect(() => {
    handle.enter()
  }, [])
  return (
    <>
      <Router>
        <>
          <Routes>
            {publicRoutes.map((route: any, idx: number) => {
              // Check Page
              const Page = route.component;
              // Check layout
              let Layout: any = Default;
              if (route.layout) Layout = route.layout;
              // Logic here
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
