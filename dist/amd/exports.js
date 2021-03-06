define(["require", "exports", "tslib", "./autocomplete/autocomplete", "./badge/badge", "./box/box", "./breadcrumbs/breadcrumbs", "./breadcrumbs/instructionFilter", "./button/button", "./card/card", "./carousel/carousel-item", "./carousel/carousel", "./char-counter/char-counter", "./checkbox/checkbox", "./chip/chip", "./chip/chips", "./collapsible/collapsible", "./collection/collection-header", "./collection/collection-item", "./collection/collection", "./collection/md-collection-selector", "./colors/color-value-converters", "./colors/md-colors", "./common/attributeManager", "./common/attributes", "./common/constants", "./common/events", "./datepicker/datepicker-default-parser", "./datepicker/datepicker", "./dropdown/dropdown-element", "./dropdown/dropdown", "./fab/fab", "./file/file", "./footer/footer", "./input/input-prefix", "./input/input-update-service", "./input/input", "./modal/modal", "./modal/modal-trigger", "./navbar/navbar", "./pagination/pagination", "./parallax/parallax", "./progress/progress", "./pushpin/pushpin", "./radio/radio", "./range/range", "./scrollfire/scrollfire-patch", "./scrollfire/scrollfire-target", "./scrollfire/scrollfire", "./scrollspy/scrollspy", "./select/select", "./sidenav/sidenav-collapse", "./sidenav/sidenav", "./slider/slider", "./switch/switch", "./tabs/tabs", "./tap-target/tap-target", "./timepicker/timepicker", "./toast/toastService", "./tooltip/tooltip", "./transitions/fadein-image", "./transitions/staggered-list", "./validation/validationRenderer", "./waves/waves", "./well/md-well", "./config-builder"], function (require, exports, tslib_1, autocomplete_1, badge_1, box_1, breadcrumbs_1, instructionFilter_1, button_1, card_1, carousel_item_1, carousel_1, char_counter_1, checkbox_1, chip_1, chips_1, collapsible_1, collection_header_1, collection_item_1, collection_1, md_collection_selector_1, color_value_converters_1, md_colors_1, attributeManager_1, attributes_1, constants_1, events_1, datepicker_default_parser_1, datepicker_1, dropdown_element_1, dropdown_1, fab_1, file_1, footer_1, input_prefix_1, input_update_service_1, input_1, modal_1, modal_trigger_1, navbar_1, pagination_1, parallax_1, progress_1, pushpin_1, radio_1, range_1, scrollfire_patch_1, scrollfire_target_1, scrollfire_1, scrollspy_1, select_1, sidenav_collapse_1, sidenav_1, slider_1, switch_1, tabs_1, tap_target_1, timepicker_1, toastService_1, tooltip_1, fadein_image_1, staggered_list_1, validationRenderer_1, waves_1, md_well_1, config_builder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // build-index-remove start
    tslib_1.__exportStar(autocomplete_1, exports);
    tslib_1.__exportStar(badge_1, exports);
    tslib_1.__exportStar(box_1, exports);
    tslib_1.__exportStar(breadcrumbs_1, exports);
    tslib_1.__exportStar(instructionFilter_1, exports);
    tslib_1.__exportStar(button_1, exports);
    tslib_1.__exportStar(card_1, exports);
    tslib_1.__exportStar(carousel_item_1, exports);
    tslib_1.__exportStar(carousel_1, exports);
    tslib_1.__exportStar(char_counter_1, exports);
    tslib_1.__exportStar(checkbox_1, exports);
    tslib_1.__exportStar(chip_1, exports);
    tslib_1.__exportStar(chips_1, exports);
    tslib_1.__exportStar(collapsible_1, exports);
    tslib_1.__exportStar(collection_header_1, exports);
    tslib_1.__exportStar(collection_item_1, exports);
    tslib_1.__exportStar(collection_1, exports);
    tslib_1.__exportStar(md_collection_selector_1, exports);
    tslib_1.__exportStar(color_value_converters_1, exports);
    tslib_1.__exportStar(md_colors_1, exports);
    tslib_1.__exportStar(attributeManager_1, exports);
    tslib_1.__exportStar(attributes_1, exports);
    tslib_1.__exportStar(constants_1, exports);
    tslib_1.__exportStar(events_1, exports);
    tslib_1.__exportStar(datepicker_default_parser_1, exports);
    tslib_1.__exportStar(datepicker_1, exports);
    tslib_1.__exportStar(dropdown_element_1, exports);
    tslib_1.__exportStar(dropdown_1, exports);
    tslib_1.__exportStar(fab_1, exports);
    tslib_1.__exportStar(file_1, exports);
    tslib_1.__exportStar(footer_1, exports);
    tslib_1.__exportStar(input_prefix_1, exports);
    tslib_1.__exportStar(input_update_service_1, exports);
    tslib_1.__exportStar(input_1, exports);
    tslib_1.__exportStar(modal_1, exports);
    tslib_1.__exportStar(modal_trigger_1, exports);
    tslib_1.__exportStar(navbar_1, exports);
    tslib_1.__exportStar(pagination_1, exports);
    tslib_1.__exportStar(parallax_1, exports);
    tslib_1.__exportStar(progress_1, exports);
    tslib_1.__exportStar(pushpin_1, exports);
    tslib_1.__exportStar(radio_1, exports);
    tslib_1.__exportStar(range_1, exports);
    tslib_1.__exportStar(scrollfire_patch_1, exports);
    tslib_1.__exportStar(scrollfire_target_1, exports);
    tslib_1.__exportStar(scrollfire_1, exports);
    tslib_1.__exportStar(scrollspy_1, exports);
    tslib_1.__exportStar(select_1, exports);
    tslib_1.__exportStar(sidenav_collapse_1, exports);
    tslib_1.__exportStar(sidenav_1, exports);
    tslib_1.__exportStar(slider_1, exports);
    tslib_1.__exportStar(switch_1, exports);
    tslib_1.__exportStar(tabs_1, exports);
    tslib_1.__exportStar(tap_target_1, exports);
    tslib_1.__exportStar(timepicker_1, exports);
    tslib_1.__exportStar(toastService_1, exports);
    tslib_1.__exportStar(tooltip_1, exports);
    tslib_1.__exportStar(fadein_image_1, exports);
    tslib_1.__exportStar(staggered_list_1, exports);
    tslib_1.__exportStar(validationRenderer_1, exports);
    tslib_1.__exportStar(waves_1, exports);
    tslib_1.__exportStar(md_well_1, exports);
    tslib_1.__exportStar(config_builder_1, exports);
});
// build-index-remove end
