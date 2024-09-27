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



// import * as Turbo from "@hotwired/turbo"
// import Alpine from 'alpinejs'
// import collapse from '@alpinejs/collapse'
// import { Application } from "@hotwired/stimulus"
// // import MenuController from "./menu_controller"
// // import ViewImagesController from "./view_images_controller"
// // import NavtreeController from "./navtree_controller"
// // import ThemeController from "./theme_controller"
// import Dropdown from 'stimulus-dropdown'
// import usePopper from "./controllers/usePopper"
// import breakpoints from "./controllers/breakpoints"

// Alpine.data('handleSearch', () => ({
//     searchOpen: false,
//     openSearch() {
//         this.searchOpen = true;
//         document.body.classList.add('overflow-hidden');
//         Alpine.nextTick(() => {
//             this.$refs.searchInput.focus();
//         })
//     },
//     closeSearch() {
//         this.searchOpen = false;
//         document.body.classList.remove('overflow-hidden');
//     },
// }))



// window.Alpine = Alpine
// Alpine.plugin(collapse)
// Alpine.store("breakpoints", breakpoints)
// document.addEventListener('alpine:init', () => {
//   Alpine.data("usePopper", usePopper);
// })
// Alpine.start()

// const application = Application.start()
// window.Stimulus = application
// application.register('dropdown', Dropdown)

