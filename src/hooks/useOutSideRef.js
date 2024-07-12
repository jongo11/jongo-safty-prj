import { useEffect, useRef, useState } from 'react';

const useOutSideRef = (p, handle) => {
  const ref = useRef(p);

  const [isShowOptions, setShowOptions] = useState(handle);

  const ShowOption = () => {
    setShowOptions(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (isShowOptions === true && ref.current && !ref.current.contains(event.target)) {
        ShowOption();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return { ref: ref, isShowOptions: isShowOptions, ShowOption: ShowOption };
};

export default useOutSideRef;