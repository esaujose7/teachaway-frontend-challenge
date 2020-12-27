import { useState, useLayoutEffect } from 'react';
import debounce from 'lodash.debounce';

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  function handleResize() {
    setInnerWidth(window.innerWidth);
  }

  const debouncedHandleResize = debounce(handleResize, 250);

  useLayoutEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  }, [debouncedHandleResize]);

  return innerWidth;
}

export default useInnerWidth;
