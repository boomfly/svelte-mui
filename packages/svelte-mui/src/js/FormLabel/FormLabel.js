/* generated by Svelte v3.29.4 */
import { create_ssr_component, escape, spread } from "svelte/internal";

const css = {
	code: ".root.svelte-m91mpa{color:var(--theme-palette-text-secondary);margin:0;font-family:var(--font-family, var(--theme-typography-body1-font-family));font-weight:var(--font-weight, var(--theme-typography-body1-font-weight));font-size:var(--font-size, var(--theme-typography-body1-font-size));letter-spacing:var(--letter-spacing, var(--theme-typography-body1-letter-spacing));text-transform:var(--text-transform, inherit);line-height:1;padding:0}.focused.svelte-m91mpa{color:var(--theme-palette-primary-main)}.disabled.svelte-m91mpa{color:var(--theme-palette-text-disabled)}.error.svelte-m91mpa{color:var(--theme-palette-error-main)}.color-secondary.focused.svelte-m91mpa{color:var(--theme-palette-secondary-main)}",
	map: "{\"version\":3,\"file\":null,\"sources\":[null],\"sourcesContent\":[\"<script>var classes, props, ref;\\n\\nexport var color = 'primary';\\n\\nexport var focused = false;\\n\\nexport var disabled = false;\\n\\nexport var error = false;\\n\\nexport var required = false;\\n\\n$:(classes = (function() {\\n  var result;\\n  result = '';\\n  if (color === 'secondary') {\\n    result += `color-${color} `;\\n  }\\n  //console.log 'classes', result, color\\n  return result;\\n})());\\n\\n$:(props = {\\n  ...$$props,\\n  class: `root ${classes} ${(ref = $$props.class) != null ? ref : ''}`\\n});\\n</script>\\n\\n<style>\\n  .root {\\n    color: var(--theme-palette-text-secondary);\\n    margin: 0;\\n    font-family: var(--font-family, var(--theme-typography-body1-font-family));\\n    font-weight: var(--font-weight, var(--theme-typography-body1-font-weight));\\n    font-size: var(--font-size, var(--theme-typography-body1-font-size));\\n    /* line-height: var(--line-height, var(--theme-typography-body1-line-height)); */\\n    letter-spacing: var(--letter-spacing, var(--theme-typography-body1-letter-spacing));\\n    text-transform: var(--text-transform, inherit);\\n    line-height: 1;\\n    padding: 0;\\n  }\\n  .focused {\\n    color: var(--theme-palette-primary-main);\\n  }\\n  .disabled {\\n    color: var(--theme-palette-text-disabled);\\n  }\\n  .error {\\n    color: var(--theme-palette-error-main);\\n  }\\n  .color-secondary.focused {\\n    color: var(--theme-palette-secondary-main);\\n  }\\n</style>\\n\\n<label\\n  class:focused\\n  class:disabled\\n  class:error\\n  for={$$props.for}\\n  {...props}\\n>\\n  <slot />\\n  {#if required}\\n    <span>&thinsp;*</span>\\n  {/if}\\n</label>\"],\"names\":[],\"mappings\":\"AA6BE,KAAK,cAAC,CAAC,AACL,KAAK,CAAE,IAAI,8BAA8B,CAAC,CAC1C,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,IAAI,aAAa,CAAC,0CAA0C,CAAC,CAC1E,WAAW,CAAE,IAAI,aAAa,CAAC,0CAA0C,CAAC,CAC1E,SAAS,CAAE,IAAI,WAAW,CAAC,wCAAwC,CAAC,CAEpE,cAAc,CAAE,IAAI,gBAAgB,CAAC,6CAA6C,CAAC,CACnF,cAAc,CAAE,IAAI,gBAAgB,CAAC,QAAQ,CAAC,CAC9C,WAAW,CAAE,CAAC,CACd,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,4BAA4B,CAAC,AAC1C,CAAC,AACD,SAAS,cAAC,CAAC,AACT,KAAK,CAAE,IAAI,6BAA6B,CAAC,AAC3C,CAAC,AACD,MAAM,cAAC,CAAC,AACN,KAAK,CAAE,IAAI,0BAA0B,CAAC,AACxC,CAAC,AACD,gBAAgB,QAAQ,cAAC,CAAC,AACxB,KAAK,CAAE,IAAI,8BAA8B,CAAC,AAC5C,CAAC\"}"
};

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	var classes, props, ref;
	var { color = "primary" } = $$props;
	var { focused = false } = $$props;
	var { disabled = false } = $$props;
	var { error = false } = $$props;
	var { required = false } = $$props;
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0) $$bindings.focused(focused);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
	$$result.css.add(css);

	classes = (function () {
		var result;
		result = "";

		if (color === "secondary") {
			result += `color-${color} `;
		}

		//console.log 'classes', result, color
		return result;
	})();

	props = {
		...$$props,
		class: `root ${classes} ${(ref = $$props.class) != null ? ref : ""}`
	};

	return `<label${spread([{ for: escape($$props.for) }, props], (focused ? "focused" : "") + " " + (disabled ? "disabled" : "") + " " + (error ? "error" : "") + " " + "svelte-m91mpa")}>${slots.default ? slots.default({}) : ``}
  ${required ? `<span> *</span>` : ``}</label>`;
});

export default Component;