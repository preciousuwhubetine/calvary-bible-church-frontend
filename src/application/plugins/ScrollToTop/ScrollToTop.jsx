import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
 const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    handleScroll();
  }, [pathname]);

  return null
}

export default ScrollToTop
