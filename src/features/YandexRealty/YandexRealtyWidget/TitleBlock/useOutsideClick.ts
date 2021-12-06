import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOutsideClick = (refList: any[], callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      let isRefClk = false;
      for (let i = 0; i < refList.length; i++) {
        const ref = refList[i];
        if (!ref.current || ref.current.contains(e.target)) {
          isRefClk = true;
          break;
        }
      }
      if (isRefClk) {
        return;
      }

      callback();
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [refList, callback]);
};
