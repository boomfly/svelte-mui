'use strict';

var index = require('../index-4eebdc97.js');

/* src/coffee/Badge/Badge.svelte generated by Svelte v3.29.4 */

const css = {
	code: ":root{--badge-radius-standard:10;--badge-radius-dot:4}.root.svelte-reuneu{position:relative;display:inline-flex;vertical-align:middle;flex-shrink:0}.badge.svelte-reuneu{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:center;align-items:center;position:absolute;box-sizing:border-box;font-family:var(--theme-typography-font-family);font-weight:var(--theme-typography-font-weight-medium);font-size:var(--theme-typography-font-size);min-width:calc(var(--badge-radius-standard) * 2);line-height:1;padding:0 6px;height:calc(var(--badge-radius-standard) * 2);border-radius:var(--badge-radius-standard);z-index:1}.primary.svelte-reuneu{background-color:var(--theme-palette-primary-main);color:var(--theme-palette-primary-contrast-text)}",
	map: "{\"version\":3,\"file\":\"Badge.svelte\",\"sources\":[\"Badge.svelte\"],\"sourcesContent\":[\"<script lang='coffee'>var className;\\n\\nclassName = '';\\n\\nexport var variant = 'standard';\\n\\nexport var badgeContent = '';\\n\\nexport {className as class};\\n</script>\\n\\n<style>\\n  :root {\\n    --badge-radius-standard: 10;\\n    --badge-radius-dot: 4;\\n  }\\n\\n  .root {\\n    position: relative;\\n    display: inline-flex;\\n    /* For correct alignment with the text. */\\n    vertical-align: middle;\\n    flex-shrink: 0;\\n  }\\n  /* Styles applied to the badge `span` element. */\\n  .badge {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-content: center;\\n    align-items: center;\\n    position: absolute;\\n    box-sizing: border-box;\\n    font-family: var(--theme-typography-font-family);\\n    font-weight: var(--theme-typography-font-weight-medium);\\n    font-size: var(--theme-typography-font-size);\\n    min-width: calc(var(--badge-radius-standard) * 2);\\n    line-height: 1;\\n    padding: 0 6px;\\n    height: calc(var(--badge-radius-standard) * 2);\\n    border-radius: var(--badge-radius-standard);\\n    z-index: 1; /*Render the badge on top of potential ripples.*/\\n  }\\n\\n  .standard {}\\n\\n  /* Styles applied to the root element if `color=\\\"primary\\\"`. */\\n  .primary {\\n    background-color: var(--theme-palette-primary-main);\\n    color: var(--theme-palette-primary-contrast-text);\\n  }\\n</style>\\n\\n<span class='root {$$props.class || ''}'>\\n  <slot />\\n  <span class='badge {variant}'>{badgeContent}</span>\\n</span>\\n\"],\"names\":[],\"mappings\":\"AAYE,KAAK,AAAC,CAAC,AACL,uBAAuB,CAAE,EAAE,CAC3B,kBAAkB,CAAE,CAAC,AACvB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,WAAW,CAEpB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,CAAC,AAChB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,IAAI,8BAA8B,CAAC,CAChD,WAAW,CAAE,IAAI,qCAAqC,CAAC,CACvD,SAAS,CAAE,IAAI,4BAA4B,CAAC,CAC5C,SAAS,CAAE,KAAK,IAAI,uBAAuB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjD,WAAW,CAAE,CAAC,CACd,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,MAAM,CAAE,KAAK,IAAI,uBAAuB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC9C,aAAa,CAAE,IAAI,uBAAuB,CAAC,CAC3C,OAAO,CAAE,CAAC,AACZ,CAAC,AAKD,QAAQ,cAAC,CAAC,AACR,gBAAgB,CAAE,IAAI,4BAA4B,CAAC,CACnD,KAAK,CAAE,IAAI,qCAAqC,CAAC,AACnD,CAAC\"}"
};

const Badge = index.create_ssr_component(($$result, $$props, $$bindings, slots) => {
	var { class: className } = $$props;
	className = "";
	var { variant = "standard" } = $$props;
	var { badgeContent = "" } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
	if ($$props.badgeContent === void 0 && $$bindings.badgeContent && badgeContent !== void 0) $$bindings.badgeContent(badgeContent);
	$$result.css.add(css);

	return `<span class="${"root " + index.escape($$props.class || "") + " svelte-reuneu"}">${slots.default ? slots.default({}) : ``}
  <span class="${"badge " + index.escape(variant) + " svelte-reuneu"}">${index.escape(badgeContent)}</span></span>`;
});

module.exports = Badge;
