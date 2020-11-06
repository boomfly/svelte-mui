<script lang='coffee'>
  import SpacingGrid from './SpacingGrid.svelte'
  import CenteredGrid from './CenteredGrid.svelte'
</script>
<style>
  a {
    color: var(--theme-palette-primary-main);
  }
</style>

# Grid

### The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.

> ⚠️ The `Grid` component shouldn't be confused with a data grid; it is closer to a layout grid. For a data grid head to [the `DataGrid` component](/components/data-grid/).

## How it works

The grid system is implemented with the `Grid` component:

- It uses [CSS’s Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.
- There are two types of layout: *containers* and *items*.
- Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
- Items have padding to create the spacing between individual items.
- There are five grid breakpoints: xs, sm, md, lg, and xl.

If you are **new to or unfamiliar with flexbox**, we encourage you to read this [CSS-Tricks flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) guide.

## Spacing

The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.

This output transformation function can be customized using the theme.

<SpacingGrid />

## Fluid grids

Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.

### Basic grid

The column widths apply at all breakpoints (i.e. `xs` and up).

<CenteredGrid />