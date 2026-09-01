import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Inicializa las animaciones globales de aparición.
 *
 * Cualquier elemento que tenga `data-etico-animate` puede
 * definir su comportamiento mediante atributos `data-*`.
 */
export function useRevealAnimations() {
  useEffect(() => {
    const context = gsap.context(() => {
      const elements = document.querySelectorAll<HTMLElement>(
        "[data-etico-animate]",
      );

      elements.forEach((element) => {
        const duration = Number(element.dataset.duration ?? 0.65);
        const delay = Number(element.dataset.delay ?? 0);
        const offset = Number(element.dataset.offset ?? 55);
        const direction = element.dataset.direction ?? "up";
        const start = element.dataset.start ?? "top 90%";
        const rotation = Number(element.dataset.rotation ?? 0);

        const animation: gsap.TweenVars = {
          opacity: 0,
          filter: "blur(12px)",
          duration,
          delay,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(element, {
              clearProps: "opacity,filter,transform",
            });
          },
          scrollTrigger: {
            trigger: element,
            start,
            once: true,
          },
        };

        switch (direction) {
          case "left":
            animation.x = -offset;
            break;
          case "right":
            animation.x = offset;
            break;
          case "down":
            animation.y = offset;
            break;
          case "up":
          default:
            animation.y = -offset;
            break;
        }

        if (rotation !== 0) {
          animation.rotation = rotation;
        }

        gsap.from(element, animation);
      });
    });

    return () => {
      context.revert();
    };
  }, []);
}
