/* eslint-disable @next/next/no-img-element */
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
  const [position, setPosition] = useState<Position>({
    x: offset,
    y: offset,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setDimensions({ height: initialHeight, width: initialWidth });
        setPosition({ x: 50 + offset, y: 50 + offset });
      } else {
        setDimensions({ height: 90, width: 100 });
        setPosition({ x: 0, y: 0 });
      }
    };
    handleResize();
  }, [isMobile, initialHeight, initialWidth, offset]);

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
      setPosition({ x: 50 + offset, y: 50 + offset });
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={handleMouseDown}
      style={{
        zIndex: zIndexVal,
        top: `${position.y}px`,
        left: `${position.x}px`,
        height: `${dimensions.height}%`,
        width: `${dimensions.width}%`,
        boxShadow: activeElement
          ? "0px 0px 32px 0px rgba(0, 0, 0, 0.50)"
          : "0 0 10px rgba(0, 0, 0, 0.2)",
        border: activeElement ? "1px solid #131313" : "none",
        position: "absolute",
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
              <img src={Close.src} alt="Close" onClick={onClickClose} />
              <img src={Minimize.src} alt="Minimize" onClick={onClickClose} />
              <img src={Zoom.src} alt="Zoom" onClick={handleZoom} />
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
