'use strict';

var index = require('../index-4eebdc97.js');

/* src/coffee/Typography/Typography.svelte generated by Svelte v3.29.4 */

const css = {
	code: ".root.svelte-18vtsie{margin:0;font-family:var(--font-family, var(--theme-typography-body1-font-family));font-weight:var(--font-weight, var(--theme-typography-body1-font-weight));font-size:var(--font-size, var(--theme-typography-body1-font-size));line-height:var(--line-height, var(--theme-typography-body1-line-height));letter-spacing:var(--letter-spacing, var(--theme-typography-body1-letter-spacing));text-transform:var(--text-transform, inherit)}.align-left.svelte-18vtsie{text-align:left}.align-center.svelte-18vtsie{text-align:center}.align-right.svelte-18vtsie{text-align:right}.align-justify.svelte-18vtsie{text-align:justify}.nowrap.svelte-18vtsie{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gutter-bottom.svelte-18vtsie{margin-bottom:0.35em}.paragraph.svelte-18vtsie{margin-bottom:calc(var(--theme-spacing) * 2)}.color-inherit.svelte-18vtsie{color:inherit}.color-primary.svelte-18vtsie{color:var(--theme-palette-primary-main)}.color-secondary.svelte-18vtsie{color:var(--theme-palette-secondary-main)}.color-text-primary.svelte-18vtsie{color:var(--theme-palette-text-primary)}.color-text-secondary.svelte-18vtsie{color:var(--theme-palette-text-secondary)}.color-error.svelte-18vtsie{color:var(--theme-palette-error-main)}.display-inline.svelte-18vtsie{display:inline}.display-block.svelte-18vtsie{display:block}",
	map: "{\"version\":3,\"file\":\"Typography.svelte\",\"sources\":[\"Typography.svelte\"],\"sourcesContent\":[\"<script lang='coffee'>var classes, props, result, style;\\n\\nexport var variant = 'body1';\\n\\nexport var component = 'p';\\n\\nexport var color = 'initial';\\n\\nexport var align = 'inherit';\\n\\nexport var display = 'initial';\\n\\nexport var nowrap = false;\\n\\nexport var gutterBottom = false;\\n\\nexport var paragraph = false;\\n\\n$:(style = (result = `--font-family: var(--theme-typography-${variant}-font-family);\\n--font-weight: var(--theme-typography-${variant}-font-weight);\\n--font-size: var(--theme-typography-${variant}-font-size);\\n--line-height: var(--theme-typography-${variant}-line-height);\\n--letter-spacing: var(--theme-typography-${variant}-letter-spacing);`, variant === 'overline' ? result += `--text-transform: var(--theme-typography-${//console.log 'style', result\\nvariant}-text-transform);` : void 0, result));\\n\\n$:(classes = (result = '', color !== 'initial' ? result += `color-${color} ` : void 0, align !== 'inherit' ? result += `align-${align} ` : void 0, display !== 'initial' ? result += `display-${//console.log 'classes', result, color\\ndisplay} ` : void 0, nowrap ? result += \\\"nowrap \\\" : void 0, gutterBottom ? result += \\\"gutter-bottom \\\" : void 0, paragraph ? result += \\\"paragraph \\\" : void 0, result));\\n\\n$:(props = {\\n  class: `root ${classes} ${$$props.class}`,\\n  style: `${style} ${$$props.style}`\\n});\\n</script>\\n\\n<style>\\n  .root {\\n    margin: 0;\\n    font-family: var(--font-family, var(--theme-typography-body1-font-family));\\n    font-weight: var(--font-weight, var(--theme-typography-body1-font-weight));\\n    font-size: var(--font-size, var(--theme-typography-body1-font-size));\\n    line-height: var(--line-height, var(--theme-typography-body1-line-height));\\n    letter-spacing: var(--letter-spacing, var(--theme-typography-body1-letter-spacing));\\n    text-transform: var(--text-transform, inherit);\\n  }\\n  .align-left {\\n    text-align: left;\\n  }\\n  .align-center {\\n    text-align: center;\\n  }\\n  .align-right {\\n    text-align: right;\\n  }\\n  .align-justify {\\n    text-align: justify;\\n  }\\n  .nowrap {\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n  }\\n  .gutter-bottom {\\n    margin-bottom: 0.35em;\\n  }\\n  .paragraph {\\n    margin-bottom: calc(var(--theme-spacing) * 2);\\n  }\\n  .color-inherit {\\n    color: inherit;\\n  }\\n  .color-primary {\\n    color: var(--theme-palette-primary-main);\\n  }\\n  .color-secondary {\\n    color: var(--theme-palette-secondary-main);\\n  }\\n  .color-text-primary {\\n    color: var(--theme-palette-text-primary);\\n  }\\n  .color-text-secondary {\\n    color: var(--theme-palette-text-secondary);\\n  }\\n  .color-error {\\n    color: var(--theme-palette-error-main);\\n  }\\n  .display-inline {\\n    display: inline;\\n  }\\n  .display-block {\\n    display: block;\\n  }\\n</style>\\n\\n{#if component === 'p'}\\n  <p {...props}><slot /></p>\\n{:else if component === 'h1'}\\n  <h1 {...props}><slot /></h1>\\n{:else if component === 'h2'}\\n  <h2 {...props}><slot /></h2>\\n{:else if component === 'h3'}\\n  <h3 {...props}><slot /></h3>\\n{:else if component === 'h4'}\\n  <h4 {...props}><slot /></h4>\\n{:else}\\n  <p {...props}><slot /></p>\\n{/if}\"],\"names\":[],\"mappings\":\"AAmCE,KAAK,eAAC,CAAC,AACL,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,IAAI,aAAa,CAAC,0CAA0C,CAAC,CAC1E,WAAW,CAAE,IAAI,aAAa,CAAC,0CAA0C,CAAC,CAC1E,SAAS,CAAE,IAAI,WAAW,CAAC,wCAAwC,CAAC,CACpE,WAAW,CAAE,IAAI,aAAa,CAAC,0CAA0C,CAAC,CAC1E,cAAc,CAAE,IAAI,gBAAgB,CAAC,6CAA6C,CAAC,CACnF,cAAc,CAAE,IAAI,gBAAgB,CAAC,QAAQ,CAAC,AAChD,CAAC,AACD,WAAW,eAAC,CAAC,AACX,UAAU,CAAE,IAAI,AAClB,CAAC,AACD,aAAa,eAAC,CAAC,AACb,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,YAAY,eAAC,CAAC,AACZ,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,cAAc,eAAC,CAAC,AACd,UAAU,CAAE,OAAO,AACrB,CAAC,AACD,OAAO,eAAC,CAAC,AACP,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAAQ,CACvB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,cAAc,eAAC,CAAC,AACd,aAAa,CAAE,MAAM,AACvB,CAAC,AACD,UAAU,eAAC,CAAC,AACV,aAAa,CAAE,KAAK,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAC/C,CAAC,AACD,cAAc,eAAC,CAAC,AACd,KAAK,CAAE,OAAO,AAChB,CAAC,AACD,cAAc,eAAC,CAAC,AACd,KAAK,CAAE,IAAI,4BAA4B,CAAC,AAC1C,CAAC,AACD,gBAAgB,eAAC,CAAC,AAChB,KAAK,CAAE,IAAI,8BAA8B,CAAC,AAC5C,CAAC,AACD,mBAAmB,eAAC,CAAC,AACnB,KAAK,CAAE,IAAI,4BAA4B,CAAC,AAC1C,CAAC,AACD,qBAAqB,eAAC,CAAC,AACrB,KAAK,CAAE,IAAI,8BAA8B,CAAC,AAC5C,CAAC,AACD,YAAY,eAAC,CAAC,AACZ,KAAK,CAAE,IAAI,0BAA0B,CAAC,AACxC,CAAC,AACD,eAAe,eAAC,CAAC,AACf,OAAO,CAAE,MAAM,AACjB,CAAC,AACD,cAAc,eAAC,CAAC,AACd,OAAO,CAAE,KAAK,AAChB,CAAC\"}"
};

const Typography = index.create_ssr_component(($$result, $$props, $$bindings, slots) => {
	var classes, props, result, style;
	var { variant = "body1" } = $$props;
	var { component = "p" } = $$props;
	var { color = "initial" } = $$props;
	var { align = "inherit" } = $$props;
	var { display = "initial" } = $$props;
	var { nowrap = false } = $$props;
	var { gutterBottom = false } = $$props;
	var { paragraph = false } = $$props;
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
	if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
	if ($$props.display === void 0 && $$bindings.display && display !== void 0) $$bindings.display(display);
	if ($$props.nowrap === void 0 && $$bindings.nowrap && nowrap !== void 0) $$bindings.nowrap(nowrap);
	if ($$props.gutterBottom === void 0 && $$bindings.gutterBottom && gutterBottom !== void 0) $$bindings.gutterBottom(gutterBottom);
	if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0) $$bindings.paragraph(paragraph);
	$$result.css.add(css);

	style = (result = `--font-family: var(--theme-typography-${variant}-font-family);
--font-weight: var(--theme-typography-${variant}-font-weight);
--font-size: var(--theme-typography-${variant}-font-size);
--line-height: var(--theme-typography-${variant}-line-height);
--letter-spacing: var(--theme-typography-${variant}-letter-spacing);`, variant === "overline"
	? result += `--text-transform: var(--theme-typography-${//console.log 'style', result
		variant}-text-transform);`
	: void 0, result);

	classes = (result = "", color !== "initial"
	? result += `color-${color} `
	: void 0, align !== "inherit"
	? result += `align-${align} `
	: void 0, display !== "initial"
	? result += `display-${//console.log 'classes', result, color
		display} `
	: void 0, nowrap ? result += "nowrap " : void 0, gutterBottom ? result += "gutter-bottom " : void 0, paragraph ? result += "paragraph " : void 0, result);

	props = {
		class: `root ${classes} ${$$props.class}`,
		style: `${style} ${$$props.style}`
	};

	return `${component === "p"
	? `<p${index.spread([props], "svelte-18vtsie")}>${slots.default ? slots.default({}) : ``}</p>`
	: `${component === "h1"
		? `<h1${index.spread([props], "svelte-18vtsie")}>${slots.default ? slots.default({}) : ``}</h1>`
		: `${component === "h2"
			? `<h2${index.spread([props], "svelte-18vtsie")}>${slots.default ? slots.default({}) : ``}</h2>`
			: `${component === "h3"
				? `<h3${index.spread([props], "svelte-18vtsie")}>${slots.default ? slots.default({}) : ``}</h3>`
				: `${component === "h4"
					? `<h4${index.spread([props], "svelte-18vtsie")}>${slots.default ? slots.default({}) : ``}</h4>`
					: `<p${index.spread([props], "svelte-18vtsie")}>${slots.default ? slots.default({}) : ``}</p>`}`}`}`}`}`;
});

module.exports = Typography;
