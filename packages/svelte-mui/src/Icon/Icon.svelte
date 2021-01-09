<script>
  import Style from '../internal/Style';

  let klass = '';
  export { klass as class };
  export let size = '24px';
  export let rotate = 0;
  export let spin = false;
  export let disabled = false;
  export let path = null;
  export let label = null;
  export let style = null;
</script>

<i
  aria-hidden="true"
  class="s-icon {klass}"
  class:spin
  aria-label={label}
  class:disabled
  use:Style={{ 'icon-size': size, 'icon-rotate': `${rotate}deg` }}
  aria-disabled={disabled}
  {style}>
  {#if path}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <path d={path}>
        {#if label}
          <title>{label}</title>
        {/if}
      </path>
    </svg>
  {/if}
  <slot />
</i>

<style type='scss'>
  .s-icon {
    color: var(--theme-icons-active);
    font-size: var(--s-icon-size);
    transform: rotate(var(--s-icon-rotate));
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-flex;
    font-feature-settings: 'liga';
    justify-content: center;
    position: relative;
    align-items: center;
    text-indent: 0;
    vertical-align: middle;
    cursor: inherit;
    user-select: none;
    direction: ltr;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;

    &.disabled {
      color: var(--theme-icons-inactive);
    }

    &.spin {
      animation: infinite s-icon-spin linear 1s;
    }

    > svg {
      fill: currentColor;
    }
  }

  @keyframes s-icon-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>