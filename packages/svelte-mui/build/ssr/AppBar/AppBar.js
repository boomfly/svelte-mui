'use strict';

var index = require('../index-4eebdc97.js');
var styles_store = require('../styles/store.js');
var Paper_Paper = require('../Paper/Paper.js');

/* src/coffee/AppBar/AppBar.svelte generated by Svelte v3.29.4 */

const css = {
	code: ".root.svelte-1qs4kul{display:flex;flex-direction:column;width:100%;box-sizing:border-box;z-index:var(--theme-z-index-appbar);flex-shrink:0}.root.svelte-1qs4kul .position-fixed{position:fixed;top:0;left:auto;right:0}@media print{.root.svelte-1qs4kul .position-fixed{position:absolute}}.root.svelte-1qs4kul .position-absolute{position:absolute;top:0;left:auto;right:0}.root.svelte-1qs4kul .position-sticky{position:sticky;top:0;left:auto;right:0}.root.svelte-1qs4kul .position-static{position:static}.position-static.svelte-1qs4kul{position:static}.root.svelte-1qs4kul .position-relative{position:relative}.root.svelte-1qs4kul .color-primary{background-color:var(--theme-palette-primary-main);color:var(--theme-palette-primary-contrast-text)}.root.svelte-1qs4kul .color-secondary{background-color:var(--theme-palette-secondary-main);color:var(--theme-palette-secondary-contrast-text)}.root.svelte-1qs4kul .color-inherit{color:inherit}.root.svelte-1qs4kul .color-transparent{background-color:transparent;color:inherit}",
	map: "{\"version\":3,\"file\":\"AppBar.svelte\",\"sources\":[\"AppBar.svelte\"],\"sourcesContent\":[\"<script lang='coffee'>var _className, props, ref, restProps, result, style;\\n\\nimport Element from '../common/Element.svelte';\\n\\nimport Paper from '../Paper';\\n\\nimport {\\n  currentTheme\\n} from '../styles';\\n\\nexport var position = 'static';\\n\\nexport var color = 'default';\\n\\nexport var headerStyle = '';\\n\\n$:(style = (result = '', color === 'default' ? $currentTheme === 'light' ? result += 'background-color: var(--theme-colors-grey-100);' : result += 'background-color: var(--theme-colors-grey-900);' : void 0, result));\\n\\n$:(_className = `root position-${position} color-${color} ${(ref = $$props.class) != null ? ref : ''}`);\\n\\n$:(restProps = (props = {...$$props}, delete props['class'], props));\\n</script>\\n\\n<style>\\n  .root {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    box-sizing: border-box;\\n    z-index: var(--theme-z-index-appbar);\\n    flex-shrink: 0;\\n  }\\n  .root :global(.position-fixed) {\\n    position: fixed;\\n    top: 0;\\n    left: auto;\\n    right: 0;\\n  }\\n  @media print {\\n    .root :global(.position-fixed) {\\n      position: absolute;\\n    }\\n  }\\n  .root :global(.position-absolute) {\\n    position: absolute;\\n    top: 0;\\n    left: auto;\\n    right: 0;\\n  }\\n  .root :global(.position-sticky) {\\n    position: sticky;\\n    top: 0;\\n    left: auto;\\n    right: 0;\\n  }\\n  .root :global(.position-static) {\\n    position: static;\\n  }\\n\\n  .position-static {\\n    position: static;\\n  }\\n\\n  .root :global(.position-relative) {\\n    position: relative;\\n  }\\n  .root :global(.color-primary) {\\n    background-color: var(--theme-palette-primary-main);\\n    color: var(--theme-palette-primary-contrast-text);\\n  }\\n  .root :global(.color-secondary) {\\n    background-color: var(--theme-palette-secondary-main);\\n    color: var(--theme-palette-secondary-contrast-text);\\n  }\\n  .root :global(.color-inherit) {\\n    color: inherit;\\n  }\\n  .root :global(.color-transparent) {\\n    background-color: transparent;\\n    color: inherit;\\n  }\\n</style>\\n\\n<header\\n  class=\\\"root\\\"\\n  style={headerStyle}\\n  {...restProps}\\n>\\n  <Paper\\n    square\\n    elevation={1}\\n    class=\\\"position-{position} color-{color} {$$props.class || ''}\\\"\\n    {style}\\n  >\\n    <slot />\\n  </Paper>\\n</header>\\n\"],\"names\":[],\"mappings\":\"AAwBE,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,sBAAsB,CAAC,CACpC,WAAW,CAAE,CAAC,AAChB,CAAC,AACD,oBAAK,CAAC,AAAQ,eAAe,AAAE,CAAC,AAC9B,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,CAAC,AACV,CAAC,AACD,OAAO,KAAK,AAAC,CAAC,AACZ,oBAAK,CAAC,AAAQ,eAAe,AAAE,CAAC,AAC9B,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACH,CAAC,AACD,oBAAK,CAAC,AAAQ,kBAAkB,AAAE,CAAC,AACjC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,CAAC,AACV,CAAC,AACD,oBAAK,CAAC,AAAQ,gBAAgB,AAAE,CAAC,AAC/B,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,CAAC,AACV,CAAC,AACD,oBAAK,CAAC,AAAQ,gBAAgB,AAAE,CAAC,AAC/B,QAAQ,CAAE,MAAM,AAClB,CAAC,AAED,gBAAgB,eAAC,CAAC,AAChB,QAAQ,CAAE,MAAM,AAClB,CAAC,AAED,oBAAK,CAAC,AAAQ,kBAAkB,AAAE,CAAC,AACjC,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,oBAAK,CAAC,AAAQ,cAAc,AAAE,CAAC,AAC7B,gBAAgB,CAAE,IAAI,4BAA4B,CAAC,CACnD,KAAK,CAAE,IAAI,qCAAqC,CAAC,AACnD,CAAC,AACD,oBAAK,CAAC,AAAQ,gBAAgB,AAAE,CAAC,AAC/B,gBAAgB,CAAE,IAAI,8BAA8B,CAAC,CACrD,KAAK,CAAE,IAAI,uCAAuC,CAAC,AACrD,CAAC,AACD,oBAAK,CAAC,AAAQ,cAAc,AAAE,CAAC,AAC7B,KAAK,CAAE,OAAO,AAChB,CAAC,AACD,oBAAK,CAAC,AAAQ,kBAAkB,AAAE,CAAC,AACjC,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,OAAO,AAChB,CAAC\"}"
};

const AppBar = index.create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $currentTheme = index.get_store_value(styles_store.currentTheme);
	var _className, props, ref, restProps, result, style;
	var { position = "static" } = $$props;
	var { color = "default" } = $$props;
	var { headerStyle = "" } = $$props;
	if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.headerStyle === void 0 && $$bindings.headerStyle && headerStyle !== void 0) $$bindings.headerStyle(headerStyle);
	$$result.css.add(css);

	style = (result = "", color === "default"
	? $currentTheme === "light"
		? result += "background-color: var(--theme-colors-grey-100);"
		: result += "background-color: var(--theme-colors-grey-900);"
	: void 0, result);

	_className = `root position-${position} color-${color} ${(ref = $$props.class) != null ? ref : ""}`;
	restProps = (props = { ...$$props }, delete props["class"], props);

	return `<header${index.spread([{ class: "root" }, { style: index.escape(headerStyle) }, restProps], "svelte-1qs4kul")}>${index.validate_component(Paper_Paper, "Paper").$$render(
		$$result,
		{
			square: true,
			elevation: 1,
			class: "position-" + position + " color-" + color + " " + ($$props.class || ""),
			style
		},
		{},
		{
			default: () => `${slots.default ? slots.default({}) : ``}`
		}
	)}</header>`;
});

module.exports = AppBar;
