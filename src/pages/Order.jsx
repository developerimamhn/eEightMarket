import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Order = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".order-page", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="order-page" ref={containerRef}>
      Order
    </div>
  );
};

export default Order