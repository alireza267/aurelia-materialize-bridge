declare module 'aurelia-materialize-bridge' {
  import 'materialize';
  import * as LogManager from 'aurelia-logging';
  import { Aurelia }  from 'aurelia-framework';
  import { bindable, customAttribute, customElement, inlineView }  from 'aurelia-templating';
  import { bindingMode, ObserverLocator }  from 'aurelia-binding';
  import { inject }  from 'aurelia-dependency-injection';
  import { getLogger }  from 'aurelia-logging';
  export class ClickCounter {
    count: any;
    increment(): any;
  }
  
  /**
  * Plugin configuration builder
  */
  export class ConfigBuilder {
    useGlobalResources: boolean;
    globalResources: any;
    useAll(): ConfigBuilder;
    useBox(): ConfigBuilder;
    useButton(): ConfigBuilder;
    useCarousel(): ConfigBuilder;
    useCard(): ConfigBuilder;
    useCheckbox(): ConfigBuilder;
    
    /**
      * Use my control
      */
    useClickCounter(): ConfigBuilder;
    useCollapsible(): ConfigBuilder;
    useColors(): ConfigBuilder;
    useDatePicker(): ConfigBuilder;
    useDropdown(): ConfigBuilder;
    useFab(): ConfigBuilder;
    useModal(): ConfigBuilder;
    useNavbar(): ConfigBuilder;
    useParallax(): ConfigBuilder;
    usePushpin(): ConfigBuilder;
    useScrollfire(): ConfigBuilder;
    useScrollSpy(): ConfigBuilder;
    useSelect(): ConfigBuilder;
    useSidenav(): ConfigBuilder;
    useSlider(): ConfigBuilder;
    useSwitch(): ConfigBuilder;
    
    /**
       * Use materialized tabs
       */
    useTabs(): ConfigBuilder;
    useTooltip(): ConfigBuilder;
    useTransitions(): ConfigBuilder;
    
    /**
       * Use ripple/waves effect
       */
    useWaves(): ConfigBuilder;
    useWell(): ConfigBuilder;
    
    /**
      * Don't globalize any resources
      * Allows you to import yourself via <require></require>
      */
    withoutGlobalResources(): ConfigBuilder;
  }
  export function configure(aurelia: Aurelia, configCallback?: ((builder: ConfigBuilder) => void)): any;
  export class MdBox {
    caption: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdButton {
    disabled: any;
    flat: any;
    floating: any;
    large: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    disabledChanged(newValue: any): any;
    flatChanged(newValue: any): any;
  }
  export class MdCard {
    mdImage: any;
    mdTitle: any;
    constructor(element: any);
    attached(): any;
  }
  
  // 
  //  @customElement('md-carousel-item')
  export class MdCarouselItem {
    mdHref: any;
    mdImage: any;
    constructor(element: any);
    attached(): any;
  }
  export class MdCarousel {
    mdSlider: any;
    constructor(element: any);
    attached(): any;
  }
  export class MdCheckbox {
    static id: any;
    mdChecked: any;
    mdDisabled: any;
    mdFilledIn: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    handleChange(): any;
    mdCheckedChanged(newValue: any): any;
    mdDisabledChanged(newValue: any): any;
  }
  export class MdCollapsible {
    constructor(element: any);
    attached(): any;
    detached(): any;
    refresh(): any;
    accordionChanged(): any;
  }
  
  /* eslint-enable */
  export class DarkenValueConverter {
    toView(value: any, steps: any): any;
  }
  export class LightenValueConverter {
    toView(value: any, steps: any): any;
  }
  
  /**
   * Adds css classes to a given element only if these classes are not already
   * present. Keeps a record of css classes which actually have been added.
   * This way, they can also be removed in a way which keeps the original classes
   * set by the user.
   * Most useful in attached() and detached() handlers.
   */
  export class AttributeManager {
    addedClasses: any;
    addedAttributes: any;
    constructor(element: any);
    addAttributes(attrs: any): any;
    removeAttributes(attrs: any): any;
    addClasses(classes: any): any;
    removeClasses(classes: any): any;
  }
  export function getBooleanFromAttributeValue(value: any): any;
  export const constants: any;
  
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  export function fireEvent(element: Element, name: string, data?: any): any;
  
  /**
  * Fire DOM event on an element with the md-on prefix
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name, without md-on prefix
  * @param data Addition data to attach to an event
  */
  export function fireMaterializeEvent(element: Element, name: string, data?: any): any;
  export class MdDatePicker {
    container: any;
    translation: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdDropdownElement {
    static id: any;
    alignment: any;
    belowOrigin: any;
    constrainWidth: any;
    gutter: any;
    hover: any;
    mdTitle: any;
    inDuration: any;
    outDuration: any;
    constructor(element: any);
    attached(): any;
  }
  export class MdDropdown {
    activates: any;
    alignment: any;
    belowOrigin: any;
    constrainWidth: any;
    gutter: any;
    hover: any;
    mdTitle: any;
    inDuration: any;
    outDuration: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdFab {
    mdFixed: any;
    mdLarge: any;
    constructor(element: any);
    attached(): any;
  }
  export class MdModalTrigger {
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdNavbar {
    mdFixed: any;
    fixedAttributeManager: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdParallax {
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  
  //  destroy handler not available
  export class MdPushpin {
    bottom: any;
    offset: any;
    top: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  
  //  destroy handler not available
  /* eslint no-new-func:0 */
  export class ScrollfirePatch {
    patched: any;
    patch(): any;
  }
  export class MdScrollfireTarget {
    callback: any;
    offset: any;
    constructor(element: any);
  }
  export class MdScrollfire {
    targetId: any;
    constructor(element: any, scrollfirePatch: any);
    attached(): any;
  }
  export class MdScrollSpy {
    target: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  
  //  destroy handler not available
  export class MdSelect {
    constructor(element: any, logManager: any, observerLocator: any);
    attached(): any;
    detached(): any;
    handleChangeFromNativeSelect(): any;
    handleChangeFromViewModel(newValue: any): any;
  }
  export class MdSidenavCollapse {
    ref: any;
    constructor(element: any, observerLocator: any);
    attached(): any;
    detached(): any;
  }
  
  //  this.widthSubscription.unsubscribe();
  //  fixedChanged() {
  //    this.log.debug('fixedChanged');
  //    $(this.element).sideNav({
  //      edge: this.ref.edge || 'left',
  //      closeOnClick: this.ref.closeOnClick,
  //      menuWidth: parseInt(this.ref.mdWidth, 10)
  //    });
  //  }
  // 
  //  widthChanged() {
  //    this.log.debug('widthChanged');
  //    $(this.element).sideNav({
  //      edge: this.ref.edge || 'left',
  //      closeOnClick: this.ref.closeOnClick,
  //      menuWidth: parseInt(this.ref.mdWidth, 10)
  //    });
  //  }
  export class MdSidenav {
    static id: any;
    mdCloseOnClick: any;
    mdEdge: any;
    mdFixed: any;
    mdWidth: any;
    attachedResolver: any;
    whenAttached: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    fixedChanged(newValue: any): any;
  }
  export class MdSlider {
    mdFillContainer: any;
    mdHeight: any;
    mdIndicators: any;
    mdInterval: any;
    mdTransition: any;
    constructor(element: any);
    attached(): any;
    pause(): any;
    start(): any;
    next(): any;
    prev(): any;
    refresh(): any;
    mdIndicatorsChanged(): any;
  }
  
  //  commented since that leads to strange effects
  //  mdIntervalChanged() {
  //    this.refresh();
  //  }
  // 
  //  mdTransitionChanged() {
  //    this.refresh();
  //  }
  export class MdSwitch {
    mdChecked: any;
    mdLabelOff: any;
    mdLabelOn: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    handleChange(): any;
    mdCheckedChanged(newValue: any): any;
  }
  export class MdTabs {
    constructor(element: any);
    attached(): any;
    detached(): any;
    fireTabSelectedEvent(e: any): any;
  }
  export class MdToastService {
    show(message: any, displayLength: any, className: any): any;
  }
  
  //  @customAttribute('md-tooltip')
  export class MdTooltip {
    position: any;
    delay: any;
    text: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdWaves {
    block: any;
    circle: any;
    color: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdFadeinImage {
    ref: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    fadeInImage(): any;
    ensureOpacity(): any;
  }
  export class MdStaggeredList {
    ref: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    staggerList(): any;
    ensureOpacity(): any;
  }
}