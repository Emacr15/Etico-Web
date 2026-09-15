import { useEffect, useRef, type ReactNode } from "react";

/** Fits a CSS illustration as a whole, including its text and floating cards. */
export function PreviewFrame({ children, height }: { children: ReactNode; height: number }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const canvas = canvasRef.current;
    if (!frame || !canvas) return;

    const observer = new ResizeObserver(([entry]) => {
      const scale = Math.min(entry.contentRect.width / 540, entry.contentRect.height / height, 1);
      canvas.style.transform = `translate(-50%, -50%) scale(${scale})`;
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, [height]);

  return (
    <div className="project-preview-frame" ref={frameRef}>
      <div className="project-preview-frame__canvas" ref={canvasRef} style={{ height }}>
        {children}
      </div>
    </div>
  );
}
