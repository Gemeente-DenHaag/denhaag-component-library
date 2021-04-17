import React from "react";
import MaterialGridListTileBar from "@material-ui/core/GridListTileBar";

export interface GridListTileBarProps {
  /**
   * An IconButton element to be used as a secondary action target.
   */
  actionIcon: React.ReactNode;

  /**
   * Position of secondary action button.
   */
  actionPosition?: "left" | "right";

  /**
   * Overrides or extends the styles applied to the component.
   */
  classes?: Record<string, unknown>;

  /**
   * String or element serving as subtitle.
   */
  subtitle: React.ReactNode | string;

  /**
   * Title to be displayed on tile.
   */
  title: React.ReactNode | string;

  /**
   * Position of the title bar.
   */
  titlePosition?: "top" | "bottom";
}

/**
 * GridListTileBar provides an overlay to ImageListTile, accommodating a title, subtitle and action button.
 * @param props The properties of GridListTileBar.
 * @constructor Constructs an instance of GridListTileBar.
 */
export const GridListTileBar: React.FC<GridListTileBarProps> = (props: GridListTileBarProps) => {
  return <MaterialGridListTileBar {...props} />;
};

/**
 * Default export for GridListTileBar
 */
export default GridListTileBar;
