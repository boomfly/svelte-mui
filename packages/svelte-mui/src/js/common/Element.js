/* generated by Svelte v3.29.4 */
import {
	add_attribute,
	create_ssr_component,
	missing_component,
	spread,
	validate_component
} from "svelte/internal";

import { onMount } from "svelte";

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { tag } = $$props;
	let element;
	let isNative;

	if (typeof tag === "string") {
		isNative = true;
	} else {
		isNative = false;
	}

	// $: props = $$props
	onMount(() => {
		if (!isNative) {
			return;
		}

		// let element = document.querySelectorAll('.element')[0]
		let newElement = document.createElement(tag.toString() || "div");

		newElement.innerHTML = element.innerHTML;
		element.parentNode.insertBefore(newElement, element.nextSibling);
		element.remove();
	});

	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);

	return `${isNative
	? `<div${spread([$$props])}${add_attribute("this", element, 1)}>${slots.default ? slots.default({}) : ``}</div>`
	: `${validate_component(tag || missing_component, "svelte:component").$$render($$result, Object.assign($$props), {}, {
			default: () => `${slots.default ? slots.default({}) : ``}`
		})}`}`;
});

export default Component;