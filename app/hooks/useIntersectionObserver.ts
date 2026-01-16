"use client";

import { useEffect } from "react";

export function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animar-ativo");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elementos = document.querySelectorAll(".animar");
    elementos.forEach((elemento) => observer.observe(elemento));

    return () => {
      elementos.forEach((elemento) => observer.unobserve(elemento));
    };
  }, []);
}
