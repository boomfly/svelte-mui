'use strict';

var index = require('../index-aad81066.js');

/* src/coffee/Grid/Grid.svelte generated by Svelte v3.29.4 */

function add_css() {
	var style = index.element("style");
	style.id = "svelte-vy4b7z-style";
	style.textContent = ".container.svelte-vy4b7z{--margin:calc(var(--theme-spacing, 0) * var(--spacing, 0));box-sizing:border-box;display:inline-flex;flex-wrap:wrap;width:calc(100% + var(--margin));margin:calc(-1 * var(--margin)) 0 0 calc(-1 * var(--margin))}.item.svelte-vy4b7z{--size:0;--grow:1;--max:none;--width:calc(var(--size) / 12 * 100%);flex-basis:calc(var(--width) - calc(var(--margin)));flex-grow:var(--grow);max-width:var(--max);margin:var(--margin) 0 0 var(--margin);box-sizing:border-box;flex-shrink:1}.zeroMinWidth.svelte-vy4b7z{min-width:0}@media(max-width: 600px){.root.item.svelte-vy4b7z{--size:var(--size-xs, 0);--grow:var(--grow-xs, 0);--max:var(--max-xs, none)}}@media(min-width: 600px){.root.item.svelte-vy4b7z{--size:var(--size-sm, 0);--grow:var(--grow-sm, 0);--max:var(--max-sm, none)}}@media(min-width: 960px) and (max-width: 1280px){.root.item.svelte-vy4b7z{--size:var(--size-md, 0);--grow:var(--grow-md, 0);--max:var(--max-md, none)}}@media(min-width: 1280px) and (max-width: 1920px){.root.item.svelte-vy4b7z{--size:var(--size-lg, 0);--grow:var(--grow-lg, 0);--max:var(--max-lg, none)}}@media(min-width: 1920px){.root.item.svelte-vy4b7z{--size:var(--size-xl, 0);--grow:var(--grow-xl, 0);--max:var(--max-xl, none)}}";
	index.append(document.head, style);
}

function create_fragment(ctx) {
	let div;
	let div_class_value;
	let div_style_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = index.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	return {
		c() {
			div = index.element("div");
			if (default_slot) default_slot.c();
			index.attr(div, "class", div_class_value = "root " + (/*$$props*/ ctx[4].class || "") + " svelte-vy4b7z");
			index.attr(div, "style", div_style_value = "" + (/*style*/ ctx[3] + " " + (/*$$props*/ ctx[4].style || "")));
			index.toggle_class(div, "container", /*container*/ ctx[0]);
			index.toggle_class(div, "item", /*item*/ ctx[1]);
			index.toggle_class(div, "zeroMinWidth", /*zeroMinWidth*/ ctx[2]);
		},
		m(target, anchor) {
			index.insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2048) {
					index.update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}

			if (!current || dirty & /*$$props*/ 16 && div_class_value !== (div_class_value = "root " + (/*$$props*/ ctx[4].class || "") + " svelte-vy4b7z")) {
				index.attr(div, "class", div_class_value);
			}

			if (!current || dirty & /*style, $$props*/ 24 && div_style_value !== (div_style_value = "" + (/*style*/ ctx[3] + " " + (/*$$props*/ ctx[4].style || "")))) {
				index.attr(div, "style", div_style_value);
			}

			if (dirty & /*$$props, container*/ 17) {
				index.toggle_class(div, "container", /*container*/ ctx[0]);
			}

			if (dirty & /*$$props, item*/ 18) {
				index.toggle_class(div, "item", /*item*/ ctx[1]);
			}

			if (dirty & /*$$props, zeroMinWidth*/ 20) {
				index.toggle_class(div, "zeroMinWidth", /*zeroMinWidth*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;
			index.transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			index.transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) index.detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	var key, lastValue, result, sizes, style, value;
	var { container = false } = $$props;
	var { item = false } = $$props;
	var { zeroMinWidth = false } = $$props;
	var { xs = false } = $$props;
	var { sm = false } = $$props;
	var { md = false } = $$props;
	var { lg = false } = $$props;
	var { xl = false } = $$props;
	var { spacing = 0 } = $$props;
	sizes = { xs, sm, md, lg, xl };

	$$self.$$set = $$new_props => {
		$$invalidate(4, $$props = index.assign(index.assign({}, $$props), index.exclude_internal_props($$new_props)));
		if ("container" in $$new_props) $$invalidate(0, container = $$new_props.container);
		if ("item" in $$new_props) $$invalidate(1, item = $$new_props.item);
		if ("zeroMinWidth" in $$new_props) $$invalidate(2, zeroMinWidth = $$new_props.zeroMinWidth);
		if ("xs" in $$new_props) $$invalidate(5, xs = $$new_props.xs);
		if ("sm" in $$new_props) $$invalidate(6, sm = $$new_props.sm);
		if ("md" in $$new_props) $$invalidate(7, md = $$new_props.md);
		if ("lg" in $$new_props) $$invalidate(8, lg = $$new_props.lg);
		if ("xl" in $$new_props) $$invalidate(9, xl = $$new_props.xl);
		if ("spacing" in $$new_props) $$invalidate(10, spacing = $$new_props.spacing);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*item, sizes, value, lastValue, result, container, spacing*/ 123907) {
			 $$invalidate(3, style = (function () {
				// return '' unless elementStyle
				$$invalidate(14, result = "");

				if (item) {
					$$invalidate(13, lastValue = null);

					for (key in sizes) {
						$$invalidate(16, value = sizes[key]);

						if (!value) {
							// continue
							if (!lastValue) {
								continue;
							}

							$$invalidate(16, value = lastValue);
						}

						if (value === true) {
							$$invalidate(14, result += `--size-${key}: 0; --grow-${key}: 1; --max-${key}: 100%;`);
						} else if (value === "auto") {
							$$invalidate(14, result += `--size-${key}: auto; --max-${key}: auto;`);
						} else {
							$$invalidate(14, result += `--size-${key}: ${value}; --max-${key}: none;`);
						}

						$$invalidate(13, lastValue = value);
					}
				}

				if (container) {
					$$invalidate(14, result += `--spacing: ${spacing};`);
				}

				//console.log 'style', result
				return result;
			})());
		}
	};

	$$props = index.exclude_internal_props($$props);

	return [
		container,
		item,
		zeroMinWidth,
		style,
		$$props,
		xs,
		sm,
		md,
		lg,
		xl,
		spacing,
		$$scope,
		slots
	];
}

class Grid extends index.SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-vy4b7z-style")) add_css();

		index.init(this, options, instance, create_fragment, index.safe_not_equal, {
			container: 0,
			item: 1,
			zeroMinWidth: 2,
			xs: 5,
			sm: 6,
			md: 7,
			lg: 8,
			xl: 9,
			spacing: 10
		});
	}
}

module.exports = Grid;
