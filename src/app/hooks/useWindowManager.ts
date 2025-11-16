import { useState, useEffect, useCallback, useRef } from "react";
import {
  windowComponentsConfig,
  appConfig,
  isValidWindowId,
} from "../config/windowComponents";

interface WindowState {
  isVisible: boolean;
  zIndex: number;
}

export const useWindowManager = () => {
  const isInitialMount = useRef(true);
  const windowHistory = useRef<string[]>([]);

  const [windowStates, setWindowStates] = useState<Record<string, WindowState>>(
    () => {
      const initialStates: Record<string, WindowState> = {};
      windowComponentsConfig.forEach(config => {
        initialStates[config.id] = {
          isVisible: false,
          zIndex: config.defaultZIndex,
        };
      });
      return initialStates;
    }
  );

  const [activeElement, setActiveElement] = useState<string>("");
  const [zIndexCounter, setZIndexCounter] = useState<number>(
    appConfig.zIndex.initial
  );
  const [brightness, setBrightness] = useState<number>(
    appConfig.brightness.default
  );
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [showCommandCentre, setShowCommandCentre] = useState<boolean>(false);

  const updateWindowHistory = useCallback((windowId: string) => {
    windowHistory.current = [
      windowId,
      ...windowHistory.current.filter(id => id !== windowId),
    ].slice(0, 10);
  }, []);

  const getNextActiveWindow = useCallback(
    (closingWindowId: string, currentStates: Record<string, WindowState>) => {
      const filteredHistory = windowHistory.current.filter(
        id => id !== closingWindowId
      );

      for (const windowId of filteredHistory) {
        if (currentStates[windowId]?.isVisible) {
          return windowId;
        }
      }

      const visibleWindows = Object.keys(currentStates).filter(
        id => currentStates[id]?.isVisible && id !== closingWindowId
      );

      return visibleWindows.length > 0 ? visibleWindows[0] : null;
    },
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, appConfig.preloader.duration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showCommandCentre) {
        setShowCommandCentre(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showCommandCentre]);

  const activateWindow = useCallback(
    (windowId: string) => {
      setWindowStates(prev => ({
        ...prev,
        [windowId]: {
          ...prev[windowId],
          isVisible: true,
          zIndex: zIndexCounter + appConfig.zIndex.increment,
        },
      }));
      setZIndexCounter(prev => prev + appConfig.zIndex.increment);
      setActiveElement(windowId);
      updateWindowHistory(windowId);
    },
    [zIndexCounter, updateWindowHistory]
  );

  const closeWindow = useCallback(
    (windowId: string) => {
      setWindowStates(prev => {
        const newStates = {
          ...prev,
          [windowId]: {
            ...prev[windowId],
            isVisible: false,
          },
        };

        const nextActiveWindow = getNextActiveWindow(windowId, newStates);

        if (nextActiveWindow) {
          setActiveElement(nextActiveWindow);
        } else {
          setActiveElement("");
        }

        return newStates;
      });
    },
    [getNextActiveWindow]
  );

  const openWindow = useCallback(
    (windowId: string) => {
      setWindowStates(prev => ({
        ...prev,
        [windowId]: {
          ...prev[windowId],
          isVisible: true,
          zIndex: zIndexCounter + appConfig.zIndex.increment,
        },
      }));
      setZIndexCounter(prev => prev + appConfig.zIndex.increment);
      updateWindowHistory(windowId);
    },
    [zIndexCounter, updateWindowHistory]
  );

  const focusWindow = useCallback(
    (windowId: string) => {
      if (windowStates[windowId]?.isVisible) {
        setWindowStates(prev => ({
          ...prev,
          [windowId]: {
            ...prev[windowId],
            zIndex: zIndexCounter + appConfig.zIndex.increment,
          },
        }));
        setZIndexCounter(prev => prev + appConfig.zIndex.increment);
        setActiveElement(windowId);
        updateWindowHistory(windowId);
      }
    },
    [windowStates, zIndexCounter, updateWindowHistory]
  );

  const toggleCommandCentre = useCallback(() => {
    setShowCommandCentre(prev => !prev);
  }, []);

  const closeCommandCentre = useCallback(() => {
    setShowCommandCentre(false);
  }, []);

  const updateSlug = useCallback((_newSlug: string | null) => {
    // No-op for Next.js version
  }, []);

  return {
    windowStates,
    activeElement,
    brightness,
    showPreloader,
    showCommandCentre,
    slug: null,
    searchParams: new URLSearchParams(),

    setActiveElement,
    setBrightness,
    activateWindow,
    openWindow,
    focusWindow,
    closeWindow,
    toggleCommandCentre,
    closeCommandCentre,
    updateSlug,

    appConfig,
    windowComponentsConfig,
  };
};

export default useWindowManager;
