<script lang='coffee'>
  import {onMount, afterUpdate, setContext} from 'svelte'
  import {writable} from 'svelte/store'
  import Colors from './Colors.svelte'
  import {currentTheme} from './store.coffee'

  export theme = 'light'

  (`$:`) currentTheme.set(theme)
  (`$:`) (
    if document?
      document.documentElement.className = "theme-#{theme}"
  )
</script>

<Colors />

<style>
  :global(:root) {
    /* shape */
    --theme-shape-border-radius: 4px;

    /* spacing */
    --theme-spacing: 8px;

    /* palette */
    --theme-palette-primary-light: var(--theme-colors-blue-300);
    --theme-palette-primary-main: var(--theme-colors-blue-500);
    --theme-palette-primary-dark: var(--theme-colors-blue-700);
    --theme-palette-primary-contrast-text: var(--theme-colors-common-white);

    --theme-palette-secondary-light: var(--theme-colors-pink-300);
    --theme-palette-secondary-main: var(--theme-colors-pink-500);
    --theme-palette-secondary-dark: var(--theme-colors-pink-700);
    --theme-palette-secondary-contrast-text: var(--theme-colors-common-white);

    --theme-palette-error-light: var(--theme-colors-red-300);
    --theme-palette-error-main: var(--theme-colors-red-500);
    --theme-palette-error-dark: var(--theme-colors-red-700);
    --theme-palette-error-contrast-text: var(--theme-colors-common-white);

    --theme-palette-warning-light: var(--theme-colors-orange-300);
    --theme-palette-warning-main: var(--theme-colors-orange-500);
    --theme-palette-warning-dark: var(--theme-colors-orange-700);
    --theme-palette-warning-contrast-text: var(--theme-colors-common-white);

    --theme-palette-info-light: var(--theme-colors-blue-300);
    --theme-palette-info-main: var(--theme-colors-blue-500);
    --theme-palette-info-dark: var(--theme-colors-blue-700);
    --theme-palette-info-contrast-text: var(--theme-colors-common-white);

    --theme-palette-success-light: var(--theme-colors-green-300);
    --theme-palette-success-main: var(--theme-colors-green-500);
    --theme-palette-success-dark: var(--theme-colors-green-700);
    --theme-palette-success-contrast-text: var(--theme-colors-common-white);

    /* typography */
    --theme-typography-font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --theme-typography-font-size: 14;
    --theme-typography-html-font-size: 16;
    --theme-typography-font-coef: calc(var(--theme-typography-font-size) / 14);
    --theme-typography-font-weight-light: 300;
    --theme-typography-font-weight-regular: 400;
    --theme-typography-font-weight-medium: 500;
    --theme-typography-font-weight-bold: 700;

    --theme-typography-h1-font-family: var(--theme-typography-font-family);
    --theme-typography-h1-font-weight: var(--theme-typography-font-weight-light);
    --theme-typography-h1-font-size: 6rem;
    --theme-typography-h1-line-height: 1.167;
    --theme-typography-h1-letter-spacing: -0.01562em;

    --theme-typography-h2-font-family: var(--theme-typography-font-family);
    --theme-typography-h2-font-weight: var(--theme-typography-font-weight-light);
    --theme-typography-h2-font-size: 3.75rem;
    --theme-typography-h2-line-height: 1.2;
    --theme-typography-h2-letter-spacing: -0.00833em;

    --theme-typography-h3-font-family: var(--theme-typography-font-family);
    --theme-typography-h3-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-h3-font-size: 3rem;
    --theme-typography-h3-line-height: 1.167;
    --theme-typography-h3-letter-spacing: 0em;

    --theme-typography-h4-font-family: var(--theme-typography-font-family);
    --theme-typography-h4-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-h4-font-size: 2.125rem;
    --theme-typography-h4-line-height: 1.235;
    --theme-typography-h4-letter-spacing: 0.00735em;

    --theme-typography-h5-font-family: var(--theme-typography-font-family);
    --theme-typography-h5-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-h5-font-size: 1.5rem;
    --theme-typography-h5-line-height: 1.334;
    --theme-typography-h5-letter-spacing: 0em;

    --theme-typography-h6-font-family: var(--theme-typography-font-family);
    --theme-typography-h6-font-weight: var(--theme-typography-font-weight-medium);
    --theme-typography-h6-font-size: 1.25rem;
    --theme-typography-h6-line-height: 1.6;
    --theme-typography-h6-letter-spacing: 0.0075em;

    --theme-typography-subtitle1-font-family: var(--theme-typography-font-family);
    --theme-typography-subtitle1-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-subtitle1-font-size: 1rem;
    --theme-typography-subtitle1-line-height: 1.75;
    --theme-typography-subtitle1-letter-spacing: 0.00938em;

    --theme-typography-subtitle2-font-family: var(--theme-typography-font-family);
    --theme-typography-subtitle2-font-weight: var(--theme-typography-font-weight-medium);
    --theme-typography-subtitle2-font-size: 0.875rem;
    --theme-typography-subtitle2-line-height: 1.57;
    --theme-typography-subtitle2-letter-spacing: 0.00714em;

    --theme-typography-body1-font-family: var(--theme-typography-font-family);
    --theme-typography-body1-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-body1-font-size: 1rem;
    --theme-typography-body1-line-height: 1.5;
    --theme-typography-body1-letter-spacing: 0.00938em;

    --theme-typography-body2-font-family: var(--theme-typography-font-family);
    --theme-typography-body2-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-body2-font-size: 0.875rem;
    --theme-typography-body2-line-height: 1.43;
    --theme-typography-body2-letter-spacing: 0.01071em;

    --theme-typography-button-font-family: var(--theme-typography-font-family);
    --theme-typography-button-font-weight: var(--theme-typography-font-weight-medium);
    --theme-typography-button-font-size: 0.875rem;
    --theme-typography-button-line-height: 1.75;
    --theme-typography-button-letter-spacing: 0.02857em;
    --theme-typography-button-text-transform: uppercase;

    --theme-typography-caption-font-family: var(--theme-typography-font-family);
    --theme-typography-caption-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-caption-font-size: 0.75rem;
    --theme-typography-caption-line-height: 1.66;
    --theme-typography-caption-letter-spacing: 0.03333em;

    --theme-typography-overline-font-family: var(--theme-typography-font-family);
    --theme-typography-overline-font-weight: var(--theme-typography-font-weight-regular);
    --theme-typography-overline-font-size: 0.75rem;
    --theme-typography-overline-line-height: 2.66;
    --theme-typography-overline-letter-spacing: 0.08333em;
    --theme-typography-overline-text-transform: uppercase;

    /* shadows */
    --theme-shadows-key-umbra-opacity: 0.2;
    --theme-shadows-key-penumbra-opacity: 0.14;
    --theme-shadows-ambient-shadow-opacity: 0.12;
    --theme-shadows-0: none;
    --theme-shadows-1: 0px 2px 1px -1px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 1px 1px 0px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 1px 3px 0px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-2: 0px 3px 1px -2px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 2px 2px 0px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 1px 5px 0px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-3: 0px 3px 3px -2px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 3px 4px 0px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 1px 8px 0px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-4: 0px 2px 4px -1px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 4px 5px 0px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 1px 10px 0px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-5: 0px 3px 5px -1px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 5px 8px 0px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 1px 14px 0px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-6: 0px 3px 5px -1px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 6px 10px 0px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 1px 18px 0px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-7: 0px 4px 5px -2px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 7px 10px 1px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 2px 16px 1px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-8: 0px 5px 5px -3px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 8px 10px 1px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 3px 14px 2px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-9: 0px 5px 6px -3px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 9px 12px 1px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 3px 16px 2px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-10: 0px 6px 6px -3px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 10px 14px 1px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 4px 18px 3px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-11: 0px 6px 7px -4px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 11px 15px 1px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 4px 20px 3px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-12: 0px 7px 8px -4px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 12px 17px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 5px 22px 4px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-13: 0px 7px 8px -4px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 13px 19px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 5px 24px 4px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-14: 0px 7px 9px -4px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 14px 21px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 5px 26px 4px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-15: 0px 8px 9px -5px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 15px 22px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 6px 28px 5px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-16: 0px 8px 10px -5px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 16px 24px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 6px 30px 5px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-17: 0px 8px 11px -5px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 17px 26px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 6px 32px 5px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-18: 0px 9px 11px -5px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 18px 28px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 7px 34px 6px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-19: 0px 9px 12px -6px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 19px 29px 2px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 7px 36px 6px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-20: 0px 10px 13px -6px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 20px 31px 3px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 8px 38px 7px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-21: 0px 10px 13px -6px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 21px 33px 3px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 8px 40px 7px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-22: 0px 10px 14px -6px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 22px 35px 3px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 8px 42px 7px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-23: 0px 11px 14px -7px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 23px 36px 3px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 9px 44px 8px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
    --theme-shadows-24: 0px 11px 15px -7px rgba(0,0,0,var(--theme-shadows-key-umbra-opacity)),0px 24px 38px 3px rgba(0,0,0,var(--theme-shadows-key-penumbra-opacity)),0px 9px 46px 8px rgba(0,0,0,var(--theme-shadows-ambient-shadow-opacity));
  }

  :global(html.theme-light) {
    /* text */
    --theme-palette-text-primary: rgba(0, 0, 0, 0.87);
    --theme-palette-text-secondary: rgba(0, 0, 0, 0.54);
    --theme-palette-text-disabled: rgba(0, 0, 0, 0.38);
    --theme-palette-text-hint: rgba(0, 0, 0, 0.38);
    --theme-palette-text-icon: rgba(0, 0, 0, 0.12);

    /* divider */
    --theme-palette-divider: rgba(0, 0, 0, 0.12);

    /* background */
    --theme-palette-background-paper: var(--theme-colors-common-white);
    --theme-palette-background-default: var(--theme-colors-grey-50);

    /* action */
    --theme-palette-action-active: rgba(0, 0, 0, 0.54);
    --theme-palette-action-hover: rgba(0, 0, 0, 0.04);
    --theme-palette-action-hover-opacity: 0.04;
    --theme-palette-action-selected: rgba(0, 0, 0, 0.08);
    --theme-palette-action-selected-opacity: 0.8;
    --theme-palette-action-disabled: rgba(0, 0, 0, 0.26);
    --theme-palette-action-disabled-background: rgba(0, 0, 0, 0.12);
    --theme-palette-action-disabled-opacity: 0.38;
    --theme-palette-action-focus: rgba(0, 0, 0, 0.12);
    --theme-palette-action-focus-opacity: 0.12;
    --theme-palette-action-activated-opacity: 0.12;
  }

  :global(html.theme-dark) {
    /* palette */
    /* --theme-palette-primary-main: #303030;
    --theme-palette-primary-contrast-text: white; */

    /* text */
    --theme-palette-text-primary: var(--theme-colors-common-white);
    --theme-palette-text-secondary: rgba(255, 255, 255, 0.7);
    --theme-palette-text-disabled: rgba(255, 255, 255, 0.5);
    --theme-palette-text-hint: rgba(255, 255, 255, 0.5);
    --theme-palette-text-icon: rgba(255, 255, 255, 0.5);

    /* divider */
    --theme-palette-divider: rgba(255, 255, 255, 0.12);

    /* background */
    --theme-palette-background-paper: var(--theme-colors-grey-800);
    --theme-palette-background-default: #303030;

    /* action */
    --theme-palette-action-active: var(--theme-colors-common-white);
    --theme-palette-action-hover: rgba(255, 255, 255, 0.08);
    --theme-palette-action-hover-opacity: 0.08;
    --theme-palette-action-selected: rgba(255, 255, 255, 0.16);
    --theme-palette-action-selected-opacity: 0.16;
    --theme-palette-action-disabled: rgba(255, 255, 255, 0.3);
    --theme-palette-action-disabled-background: rgba(255, 255, 255, 0.12);
    --theme-palette-action-disabled-opacity: 0.38;
    --theme-palette-action-focus: rgba(255, 255, 255, 0.12);
    --theme-palette-action-focus-opacity: 0.12;
    --theme-palette-action-activated-opacity: 0.24;
  }

  :global(html) {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
  }

  :global(*, *::before, *::after) {
    box-sizing: inherit;
  }

  :global(strong, b) {
    font-weight: var(--theme-typography-font-weight-bold);
  }

  :global(body) {
    margin: 0;
    padding: 0;
    color: var(--theme-palette-text-primary);
    font-family: var(--theme-typography-body2-font-family);
    font-size: var(--theme-typography-body2-font-size);
    font-weight: var(--theme-typography-body2-font-weight);
    line-height: var(--theme-typography-body2-line-height);
    letter-spacing: var(--theme-typography-body2-letter-spacing);
    background-color: var(--theme-palette-background-default);
  }

  @media print {
    :global(body) {
      background-color: var(--theme-colors-common-white);
    }
  }
  
  /* utils */
  :global(.p1) {padding: calc(var(--theme-spacing) * 1)}
  :global(.p2) {padding: calc(var(--theme-spacing) * 2)}
  :global(.p3) {padding: calc(var(--theme-spacing) * 3)}
  :global(.p4) {padding: calc(var(--theme-spacing) * 4)}
  :global(.p5) {padding: calc(var(--theme-spacing) * 5)}
  :global(.p6) {padding: calc(var(--theme-spacing) * 6)}
  :global(.p7) {padding: calc(var(--theme-spacing) * 7)}
  :global(.p8) {padding: calc(var(--theme-spacing) * 8)}
  :global(.p9) {padding: calc(var(--theme-spacing) * 9)}
  :global(.p10) {padding: calc(var(--theme-spacing) * 10)}

  :global(.m1) {margin: calc(var(--theme-spacing) * 1)}
  :global(.m2) {margin: calc(var(--theme-spacing) * 2)}
  :global(.m3) {margin: calc(var(--theme-spacing) * 3)}
  :global(.m4) {margin: calc(var(--theme-spacing) * 4)}
  :global(.m5) {margin: calc(var(--theme-spacing) * 5)}
  :global(.m6) {margin: calc(var(--theme-spacing) * 6)}
  :global(.m7) {margin: calc(var(--theme-spacing) * 7)}
  :global(.m8) {margin: calc(var(--theme-spacing) * 8)}
  :global(.m9) {margin: calc(var(--theme-spacing) * 9)}
  :global(.m10) {margin: calc(var(--theme-spacing) * 10)}
  
  :global(.mt2) {margin-top: calc(var(--theme-spacing) * 2);}

  :global(.ml1) {margin-top: calc(var(--theme-spacing) * 1)}
  :global(.ml2) {margin-top: calc(var(--theme-spacing) * 2)}
  :global(.ml3) {margin-top: calc(var(--theme-spacing) * 3)}
  :global(.ml4) {margin-top: calc(var(--theme-spacing) * 4)}
  :global(.ml5) {margin-top: calc(var(--theme-spacing) * 5)}
  :global(.ml6) {margin-top: calc(var(--theme-spacing) * 6)}
  :global(.ml7) {margin-top: calc(var(--theme-spacing) * 7)}
  :global(.ml8) {margin-top: calc(var(--theme-spacing) * 8)}
  :global(.ml9) {margin-top: calc(var(--theme-spacing) * 9)}
  :global(.ml10) {margin-top: calc(var(--theme-spacing) * 10)}
</style>