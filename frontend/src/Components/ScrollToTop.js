import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {/////////b7ot l function scrollToTop be ma7al ma 3amel l route.
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>;
};

export default ScrollToTop;