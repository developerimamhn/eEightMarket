import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Account = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".account-page", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-white account-page" ref={containerRef}>
      Account
    </div>
  );
};

export default Account