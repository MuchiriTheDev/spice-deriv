port { useEffect, useCallback } from 'react';

interface AutoSaveOptions {
  onSave?: () => Promise<void> | void;
  interval?: number;
  enabled?: boolean;
}

export const useAutoSave = ({
  onSave,
  interval = 30000, // Default to 30 seconds
  enabled = true,
}: AutoSaveOptions) => {
  const save = useCallback(async () => {
    if (enabled && onSave) {
      try {
        await onSave();
      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }
  }, [enabled, onSave]);

  useEffect(() => {
    if (!enabled) return;

    // Save on window blur (when user switches tabs/windows)
    const handleBlur = () => {
      save();
    };
    window.addEventListener('blur', handleBlur);

    // Set up interval for periodic saving
    const intervalId = setInterval(save, interval);

    // Clean up
    return () => {
      window.removeEventListener('blur', handleBlur);
      clearInterval(intervalId);
    };
  }, [enabled, interval, save]);

  return { save };
};
