function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue, { mergeData } from '../../vue';
import { NAME_INPUT_GROUP } from '../../constants/components';
import { SLOT_NAME_APPEND, SLOT_NAME_DEFAULT, SLOT_NAME_PREPEND } from '../../constants/slot-names';
import { makePropsConfigurable } from '../../utils/config';
import { htmlOrText } from '../../utils/html';
import { hasNormalizedSlot, normalizeSlot } from '../../utils/normalize-slot';
import { BInputGroupAppend } from './input-group-append';
import { BInputGroupPrepend } from './input-group-prepend';
import { BInputGroupText } from './input-group-text'; // --- Props ---

export var props = makePropsConfigurable({
  id: {
    type: String
  },
  size: {
    type: String // default: undefined

  },
  prepend: {
    type: String
  },
  prependHtml: {
    type: String
  },
  append: {
    type: String
  },
  appendHtml: {
    type: String
  },
  tag: {
    type: String,
    default: 'div'
  }
}, NAME_INPUT_GROUP); // --- Main component ---
// @vue/component

export var BInputGroup = /*#__PURE__*/Vue.extend({
  name: NAME_INPUT_GROUP,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var prepend = props.prepend,
        prependHtml = props.prependHtml,
        append = props.append,
        appendHtml = props.appendHtml,
        size = props.size;
    var $scopedSlots = scopedSlots || {};
    var $slots = slots();
    var slotScope = {};
    var $prepend = h();
    var hasPrependSlot = hasNormalizedSlot(SLOT_NAME_PREPEND, $scopedSlots, $slots);

    if (hasPrependSlot || prepend || prependHtml) {
      $prepend = h(BInputGroupPrepend, [hasPrependSlot ? normalizeSlot(SLOT_NAME_PREPEND, slotScope, $scopedSlots, $slots) : h(BInputGroupText, {
        domProps: htmlOrText(prependHtml, prepend)
      })]);
    }

    var $append = h();
    var hasAppendSlot = hasNormalizedSlot(SLOT_NAME_APPEND, $scopedSlots, $slots);

    if (hasAppendSlot || append || appendHtml) {
      $append = h(BInputGroupAppend, [hasAppendSlot ? normalizeSlot(SLOT_NAME_APPEND, slotScope, $scopedSlots, $slots) : h(BInputGroupText, {
        domProps: htmlOrText(appendHtml, append)
      })]);
    }

    return h(props.tag, mergeData(data, {
      staticClass: 'input-group',
      class: _defineProperty({}, "input-group-".concat(size), size),
      attrs: {
        id: props.id || null,
        role: 'group'
      }
    }), [$prepend, normalizeSlot(SLOT_NAME_DEFAULT, slotScope, $scopedSlots, $slots), $append]);
  }
});