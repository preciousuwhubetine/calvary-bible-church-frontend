import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "../../db/store"

import ScrollToTop from '../../application/plugins/ScrollToTop/ScrollToTop.jsx'
import RoutesConfiguration from '../Routes';

import Header from "../../application/components/Header/Header.jsx";
import Footer from "../../application/components/Footer/Footer.jsx";

import { Toaster } from "sonner";

export const run = async () => {
  window.reactRootElement.render(
    <BrowserRouter>
      <Provider store={store}>
        <Toaster />
        <Header />
        <ScrollToTop />
        <main>
          <RoutesConfiguration />
        </main>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}
