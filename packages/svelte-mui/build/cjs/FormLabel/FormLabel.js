'use strict';

var index = require('../index-aad81066.js');

/* src/coffee/FormLabel/FormLabel.svelte generated by Svelte v3.29.4 */

function add_css() {
	var style = index.element("style");
	style.id = "svelte-m91mpa-style";
	style.textContent = ".root.svelte-m91mpa{color:var(--theme-palette-text-secondary);margin:0;font-family:var(--font-family, var(--theme-typography-body1-font-family));font-weight:var(--font-weight, var(--theme-typography-body1-font-weight));font-size:var(--font-size, var(--theme-typography-body1-font-size));letter-spacing:var(--letter-spacing, var(--theme-typography-body1-letter-spacing));text-transform:var(--text-transform, inherit);line-height:1;padding:0}.focused.svelte-m91mpa{color:var(--theme-palette-primary-main)}.disabled.svelte-m91mpa{color:var(--theme-palette-text-disabled)}.error.svelte-m91mpa{color:var(--theme-palette-error-main)}.color-secondary.focused.svelte-m91mpa{color:var(--theme-palette-secondary-main)}";
	index.append(document.head, style);
}

// (64:2) {#if required}
function create_if_block(ctx) {
	let span;

	return {
		c() {
			span = index.element("span");
			span.textContent = " *";
		},
		m(target, anchor) {
			index.insert(target, span, anchor);
		},
		d(detaching) {
			if (detaching) index.detach(span);
		}
	};
}

function create_fragment(ctx) {
	let label;
	let t;
	let label_for_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = index.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);
	let if_block = /*required*/ ctx[3] && create_if_block();

	let label_levels = [
		{
			for: label_for_value = /*$$props*/ ctx[5].for
		},
		/*props*/ ctx[4]
	];

	let label_data = {};

	for (let i = 0; i < label_levels.length; i += 1) {
		label_data = index.assign(label_data, label_levels[i]);
	}

	return {
		c() {
			label = index.element("label");
			if (default_slot) default_slot.c();
			t = index.space();
			if (if_block) if_block.c();
			index.set_attributes(label, label_data);
			index.toggle_class(label, "focused", /*focused*/ ctx[0]);
			index.toggle_class(label, "disabled", /*disabled*/ ctx[1]);
			index.toggle_class(label, "error", /*error*/ ctx[2]);
			index.toggle_class(label, "svelte-m91mpa", true);
		},
		m(target, anchor) {
			index.insert(target, label, anchor);

			if (default_slot) {
				default_slot.m(label, null);
			}

			index.append(label, t);
			if (if_block) if_block.m(label, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					index.update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (/*required*/ ctx[3]) {
				if (if_block) ; else {
					if_block = create_if_block();
					if_block.c();
					if_block.m(label, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			index.set_attributes(label, label_data = index.get_spread_update(label_levels, [
				(!current || dirty & /*$$props*/ 32 && label_for_value !== (label_for_value = /*$$props*/ ctx[5].for)) && { for: label_for_value },
				dirty & /*props*/ 16 && /*props*/ ctx[4]
			]));

			index.toggle_class(label, "focused", /*focused*/ ctx[0]);
			index.toggle_class(label, "disabled", /*disabled*/ ctx[1]);
			index.toggle_class(label, "error", /*error*/ ctx[2]);
			index.toggle_class(label, "svelte-m91mpa", true);
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
			if (detaching) index.detach(label);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	var classes, props, ref;
	var { color = "primary" } = $$props;
	var { focused = false } = $$props;
	var { disabled = false } = $$props;
	var { error = false } = $$props;
	var { required = false } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(5, $$props = index.assign(index.assign({}, $$props), index.exclude_internal_props($$new_props)));
		if ("color" in $$new_props) $$invalidate(6, color = $$new_props.color);
		if ("focused" in $$new_props) $$invalidate(0, focused = $$new_props.focused);
		if ("disabled" in $$new_props) $$invalidate(1, disabled = $$new_props.disabled);
		if ("error" in $$new_props) $$invalidate(2, error = $$new_props.error);
		if ("required" in $$new_props) $$invalidate(3, required = $$new_props.required);
		if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*color*/ 64) {
			 $$invalidate(9, classes = (function () {
				var result;
				result = "";

				if (color === "secondary") {
					result += `color-${color} `;
				}

				//console.log 'classes', result, color
				return result;
			})());
		}

		 $$invalidate(4, props = {
			...$$props,
			class: `root ${classes} ${$$invalidate(10, ref = $$props.class) != null ? ref : ""}`
		});
	};

	$$props = index.exclude_internal_props($$props);
	return [focused, disabled, error, required, props, $$props, color, $$scope, slots];
}

class FormLabel extends index.SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-m91mpa-style")) add_css();

		index.init(this, options, instance, create_fragment, index.safe_not_equal, {
			color: 6,
			focused: 0,
			disabled: 1,
			error: 2,
			required: 3
		});
	}
}

module.exports = FormLabel;
