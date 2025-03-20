import { useEffect, useRef } from "react";

export function useDidUpdate(callback = () => {}, dependencies: any[] = []) {
  const isDidMounted = useRef(false);
  useEffect(() => {
    if (isDidMounted?.current) {
      callback();
    } else {
      isDidMounted.current = true;
    }
  }, dependencies);
}
