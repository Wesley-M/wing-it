import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * It matches the current URL with the biggest pattern passed as param, and reports the
 * pattern index (starting at 0). If the pattern is not matched, it returns -1.
 *
 * @example
 *  ```
 *  let patterns = ['/a', '/b', '/a/b' '/c']
 *  let url: 'localhost:8080/a/b'
 *  // result === 2
 *  let result = useUrlListener(patterns)
 *  ```
 *
 * @param patterns BaseList of patterns to watch
 * @returns Index of the pattern matched
 * */
export function useUrlListener(patterns) {
  const [patternIndex, setPatternIndex] = useState(-1);

  let location = useLocation();

  // Every time the location changes, the corresponding pattern is selected.
  useEffect(() => {
    let i = 0;

    let biggestMatch = '';

    // It selects the biggest pattern that matches the current location
    for (let pattern of patterns) {
      if (location.pathname.includes(pattern)) {
        if (pattern.length > biggestMatch.length) {
          biggestMatch = pattern;
          setPatternIndex(i);
        }
      }
      i += 1;
    }

    // If no pattern was matched, return -1.
    if (biggestMatch.length === 0) {
      setPatternIndex(-1);
    }
  }, [location.pathname, patterns]);

  return patternIndex;
}