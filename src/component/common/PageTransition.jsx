import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export default function PageTransition({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      }
    )
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      {children}
    </div>
  )
}