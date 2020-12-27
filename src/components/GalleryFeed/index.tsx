import { FC, useMemo } from 'react';
import useInnerWidth from '../../hooks/useInnerWidth';
import { GalleryResponse } from '../../types';

import GalleryCard from '../GalleryCard';

interface IGalleryFeedProps {
  items: GalleryResponse;
}

const numberOfColumnsByBreakpoint = {
  728: 1,
  1024: 2,
  1366: 3,
  1600: 4
};

const getNumberOfColumns = (breakpointsToColumnsMap: typeof numberOfColumnsByBreakpoint, width: number) => {
  const entriesBreakpointsToColumnsMap = Object.entries(breakpointsToColumnsMap);
  for (const [breakpoint, numberOfColumns] of entriesBreakpointsToColumnsMap) {
    if (width <= Number(breakpoint)) {
      return numberOfColumns;
    }
  }
  return entriesBreakpointsToColumnsMap[entriesBreakpointsToColumnsMap.length - 1][1] + 1; // just one greater than the breakpoints provided
}

const generateColumns = (items: GalleryResponse, numberOfcolumns: number): GalleryResponse[]  => {
  const columns: GalleryResponse[] = Array(numberOfcolumns).fill([]);
  
  for (const [i, galleryItem] of items.entries()) {
    columns[i % numberOfcolumns] = columns[i % numberOfcolumns].concat(galleryItem);
  }

  return columns;
};

const GalleryFeed: FC<IGalleryFeedProps> = ({ items }) => {
  const innerWidth = useInnerWidth();
  const numberOfColumns = getNumberOfColumns(numberOfColumnsByBreakpoint, innerWidth);

  const columns = useMemo(() => generateColumns(items, numberOfColumns), [items, numberOfColumns]);

  return (
    <main className="grid-container">
      {columns.map(column => (
        <div className="grid-column" style={{ width: '300px' }}>
          {column.map(galleryItem => (<GalleryCard galleryItem={galleryItem} />))}
        </div>
      ))}
    </main>
  );
};

export default GalleryFeed;
