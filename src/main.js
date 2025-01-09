import * as Turbo from "@hotwired/turbo"
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import { Application } from "@hotwired/stimulus"
import ThemeController from "./controllers/theme_controller"
import LoadMoreController from "./controllers/load_more_controller"
import Dropdown from 'stimulus-dropdown'
import usePopper from "./controllers/usePopper"
import dispatchTo from "./controllers/dispatch_to"
import breakpoints from "./controllers/breakpoints"
import tooltip from "./controllers/tooltip";
import FullscreenController from "./controllers/fullscreen_controller.js"
import MoreController from "./controllers/more_controller"
import StickyController from "./controllers/sticky_controller"
import UploadController from "./controllers/upload_controller.js"
import tomSelect from "./controllers/tomSelect";
import SmartForegroundColorController from "./controllers/smart_foreground_color_controller"
import ColorPickerController from "./controllers/color_picker_controller"

Alpine.directive("tom-select", tomSelect);
Alpine.directive("tooltip", tooltip);
Alpine.store("breakpoints", breakpoints)
window.Alpine = Alpine
Alpine.plugin(collapse)
document.addEventListener('alpine:init', () => {
  Alpine.data("usePopper", usePopper);
})
Alpine.magic("dispatchTo", () => dispatchTo);
Alpine.start()

const application = Application.start()
window.Stimulus = application
application.register('theme', ThemeController)
application.register('dropdown', Dropdown)
application.register('load_more', LoadMoreController)
application.register('fullscreen', FullscreenController)
application.register("more", MoreController)
application.register("sticky", StickyController)
application.register("upload", UploadController)
application.register("smart-foreground-color", SmartForegroundColorController)
application.register("color-picker", ColorPickerController)

