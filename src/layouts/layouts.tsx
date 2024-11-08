import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="container max-w-[1400px] mx-auto text-white flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
				<Outlet />
			</div>
      {/* <Footer /> */}
      {location.pathname !== "/login" && location.pathname !== "/authPage" && <Footer />}
      {/* {location.pathname !== "/auth" && location.pathname !== "/AuthPage" && <Footer />} */}

    </div>
  );
};


export default MainLayout
