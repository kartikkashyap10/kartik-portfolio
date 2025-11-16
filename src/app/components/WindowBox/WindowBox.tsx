import styles from "./WindowBox.module.css";
import React, { useEffect, useState, useRef } from "react";
import Close from "../../assets/Close.png";
import Zoom from "../../assets/Zoom.png";
import Minimize from "../../assets/Minimise.png";
import { useIsMobile } from "../../hooks/useIsMobile";

interface WindowBoxProps {
  children: React.ReactNode;
  onClickClose: () => void;
  zIndexVal: number;
  setActive: () => void;
  offset?: number;
  displayText: string;
  activeElement: boolean;
  displayTextMobile: string;
  initialWidth?: number;
  initialHeight?: number;
}

interface Dimensions {
  height: number;
  width: number;
}

interface Position {
  x: number;
  y: number;
}

const WindowBox: React.FC<WindowBoxProps> = ({
  children,
  onClickClose,
  zIndexVal,
  setActive,
  offset = 0,
  displayText,
  activeElement,
  displayTextMobile,
  initialWidth = 60,
  initialHeight = 80,
}) => {
  const isMobile = useIsMobile(600);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    height: initialHeight,
    width: initialWidth,
  });
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setDimensions({ height: initialHeight, width: initialWidth });
        setPosition({ x: 50, y: 50 });
      } else {
        setDimensions({ height: 90, width: 100 });
        setPosition({ x: 0, y: 0 });
      }
    };
    handleResize();
  }, [isMobile, initialHeight, initialWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    setActive();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleZoom = () => {
    if (
      dimensions.height === initialHeight &&
      dimensions.width === initialWidth
    ) {
      setDimensions({ height: 90, width: 100 });
      setPosition({ x: 0, y: 0 });
    } else {
      setDimensions({ height: initialHeight, width: initialWidth });
      setPosition({ x: 50, y: 50 });
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={handleMouseDown}
      style={{
        zIndex: zIndexVal,
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        height: `${dimensions.height}%`,
        width: `${dimensions.width}%`,
        boxShadow: activeElement
          ? "0px 0px 32px 0px rgba(0, 0, 0, 0.50)"
          : "0 0 10px rgba(0, 0, 0, 0.2)",
        border: activeElement ? "1px solid #131313" : "none",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <div className={styles.statBar}>
        {isMobile ? (
          <>
            <div className={styles.mobileBackButton} onClick={onClickClose}>
              <span className={styles.backArrow}>←</span>
            </div>
            <div className={styles.mobileTitle}>{displayTextMobile}</div>
            <div className={styles.mobileSpacer}></div>
          </>
        ) : (
          <>
            <div className={styles.statBarIcons}>
              <button onClick={onClickClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <img src={Close.src} alt="Close" style={{ width: "12px", height: "12px" }} />
              </button>
              <button onClick={onClickClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <img src={Minimize.src} alt="Minimize" style={{ width: "12px", height: "12px" }} />
              </button>
              <button onClick={handleZoom} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <img src={Zoom.src} alt="Zoom" style={{ width: "12px", height: "12px" }} />
              </button>
            </div>
            <div>{displayText}</div>
            <div></div>
          </>
        )}
      </div>
      <div className={styles.ContentContainer}>{children}</div>
    </div>
  );
};

export default WindowBox;
