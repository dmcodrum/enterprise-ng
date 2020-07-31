/**
 * Soho Blockgrid.
 *
 * This file contains the Typescript mappings for the public
 * interface of the Soho jQuery BlockGrid control.
 */
type SohoBlockGridSelectable = boolean | 'single' | 'multiple' | 'mixed';

/**
 * BlockGrid Options
 */
interface SohoBlockGridOptions {
  /** Defines the data to use, must be specified for this component. */
  dataset?: Object[];

  /** Selection Mode Property */
  selectable?: SohoBlockGridSelectable;

  /** If true, enables paging in the Blockgrid */
  paging?: boolean;

  /** If paging is active, defines the number of records allowed on the current page */
  pagesize?: Number;

  /** If paging is active, defines the various record sizes the pager will allow */
  pagesizes?: Array<Number>;
}

/**
 * BlockGrid Api.
 */
interface SohoBlockGrid {
  settings: SohoBlockGridOptions;

  pagerAPI?: SohoPagerStatic;

  select(activeBlock: JQuery<Node[]|Node>, isCheckbox: boolean): void;

  /**
   * @deprecated (use `select()`)
   * Selects a block in the blockgrid
   */
  selectBlock(activeBlock: JQuery<Node[]|Node>, isCheckbox: boolean): void;

  /** Updates the blockgrid with any new settings. */
  updated(settings?: SohoBlockGridOptions): void;

  /** Destroys the control on completion. */
  destroy(): void;
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
  blockgrid(options?: SohoBlockGridOptions): JQuery;
}
