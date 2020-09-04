import { IGridsterOptions, IGridsterDraggableOptions } from 'angular2gridster';

export const itemOptions = {
  maxWidth: 3,
  minHeight: 1,
};

export const gridsterOptions: IGridsterOptions = {
  // core configuration is default one - for smallest view. It has hidden minWidth: 0.
  lanes: 2, // amount of lanes (cells) in the grid
  direction: 'vertical', // floating top - vertical, left - horizontal
  floating: true,
  dragAndDrop: true, // enable/disable drag and drop for all items in grid
  resizable: true, // enable/disable resizing by drag and drop for all items in grid
  resizeHandles: {
    s: true,
    e: true,
    se: true,
  },
  widthHeightRatio: 1.4, // proportion between item width and height
  lines: {
    visible: true,
    color: '#afafaf',
    width: 2,
  },
  shrink: true,
  useCSSTransforms: true,
  responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
  responsiveDebounce: 500, // window resize debounce time
  responsiveSizes: true,
  // List of different gridster configurations for different breakpoints.
  // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
  // available to use with default minWidth assign to each.
  // - sm: 576 - Small devices
  // - md: 768 - Medium devices
  // - lg: 992 - Large devices
  // - xl: 1200 - Extra large
  // MinWidth for each breakpoint can be overwritten like it's visible below.
  // ResponsiveOptions can overwrite default configuration with any option available.
  responsiveOptions: [
    {
      breakpoint: 'sm',
      // minWidth: 480,
      lanes: 1,
    },
    {
      breakpoint: 'md',
      minWidth: 768,
      lanes: 2,
    },
    {
      breakpoint: 'lg',
      minWidth: 1250,
      lanes: 3,
    },
    {
      breakpoint: 'xl',
      minWidth: 1800,
      lanes: 4,
    },
  ],
};
export const gridsterDraggableOptions: IGridsterDraggableOptions = {
  handlerClass: 'panel-heading',
};
