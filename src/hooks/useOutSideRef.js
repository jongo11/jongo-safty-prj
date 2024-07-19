import { useEffect } from 'react';

const useOutSideRef = (getRef, handle, setHandle) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (getRef.current[handle] && !getRef.current[handle].contains(event.target)) {
        setHandle(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [getRef, handle, setHandle]);
};

export default useOutSideRef;