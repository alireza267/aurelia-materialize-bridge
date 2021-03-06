System.register(["tslib", "aurelia-framework", "aurelia-task-queue", "../common/attributes", "./input-update-service", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, aurelia_task_queue_1, attributes_1, input_update_service_1, events_1, MdInput;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_task_queue_1_1) {
                aurelia_task_queue_1 = aurelia_task_queue_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (input_update_service_1_1) {
                input_update_service_1 = input_update_service_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdInput = /** @class */ (function () {
                function MdInput(element, taskQueue, updateService) {
                    var _this = this;
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.updateService = updateService;
                    this.mdLabel = "";
                    this.mdBlurOnEnter = false;
                    this.mdDisabled = false;
                    this.mdReadonly = false;
                    this.mdPlaceholder = "";
                    this.mdTextArea = false;
                    this.mdType = "text";
                    this.mdStep = "any";
                    this.mdValidate = false;
                    this.mdShowErrortext = true;
                    this.mdUpdateTrigger = ["input", "change"];
                    this.mdValue = "";
                    this.mdMin = null;
                    this.mdMax = null;
                    this.mdName = "";
                    this.mdMaxlength = 524288;
                    this.suspendUpdate = false;
                    this.mdUnrenderValidateResults = function (results, renderer) {
                        try {
                            for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                                var result = results_1_1.value;
                                if (!result.valid) {
                                    renderer.removeMessage(_this.element, result);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        renderer.removeValidationClasses(_this.input);
                        var e_1, _a;
                    };
                    this.mdRenderValidateResults = function (results, renderer) {
                        if (_this.label && results.find(function (x) { return !x.valid; })) {
                            _this.label.removeAttribute("data-error");
                        }
                        if (_this.input) {
                            try {
                                for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                                    var result = results_2_1.value;
                                    if (!result.valid) {
                                        result.target = _this.input;
                                        if (_this.input.hasAttribute("data-show-errortext")) {
                                            renderer.addMessage(_this.element, result);
                                        }
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        renderer.addValidationClasses(_this.input, !results.find(function (x) { return !x.valid; }));
                        var e_2, _a;
                    };
                    this.controlId = "md-input-" + MdInput_1.id++;
                    this.blurOnEnter = this.blurOnEnter.bind(this);
                }
                MdInput_1 = MdInput;
                MdInput.prototype.bind = function () {
                    this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
                    this.mdTextArea = attributes_1.getBooleanFromAttributeValue(this.mdTextArea);
                    this.mdShowErrortext = attributes_1.getBooleanFromAttributeValue(this.mdShowErrortext);
                    this.mdBlurOnEnter = attributes_1.getBooleanFromAttributeValue(this.mdBlurOnEnter);
                };
                MdInput.prototype.attached = function () {
                    if (attributes_1.getBooleanFromAttributeValue(this.mdValidate)) {
                        this.input.classList.add("validate");
                    }
                    if (this.mdValidateError) {
                        this.label.setAttribute("data-error", this.mdValidateError);
                    }
                    if (this.mdValidateSuccess) {
                        this.label.setAttribute("data-success", this.mdValidateSuccess);
                    }
                    if (this.mdPlaceholder) {
                        this.input.setAttribute("placeholder", this.mdPlaceholder);
                    }
                    if (this.mdShowErrortext) {
                        this.input.setAttribute("data-show-errortext", this.mdShowErrortext.toString());
                    }
                    this.updateService.update();
                    // special case: time inputs are not covered by Materialize
                    if (this.mdType === "time") {
                        $(this.input).siblings("label").addClass("active");
                    }
                    this.attachEventHandlers();
                    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
                    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
                };
                MdInput.prototype.detached = function () {
                    this.detachEventHandlers();
                    this.element.mdUnrenderValidateResults = undefined;
                    this.element.mdRenderValidateResults = undefined;
                };
                MdInput.prototype.blur = function () {
                    events_1.fireEvent(this.element, "blur");
                };
                MdInput.prototype.focus = function () {
                    this.input.focus();
                    events_1.fireEvent(this.element, "focus");
                };
                MdInput.prototype.mdValueChanged = function () {
                    if (!$(this.input).is(":focus")) {
                        this.updateService.update();
                    }
                    if (this.mdTextArea) {
                        $(this.input).trigger("autoresize");
                    }
                };
                MdInput.prototype.attachEventHandlers = function () {
                    if (this.mdBlurOnEnter) {
                        this.element.addEventListener("keyup", this.blurOnEnter);
                    }
                };
                MdInput.prototype.detachEventHandlers = function () {
                    if (this.mdBlurOnEnter) {
                        this.element.removeEventListener("keyup", this.blurOnEnter);
                    }
                };
                MdInput.prototype.blurOnEnter = function (e) {
                    if (e.keyCode && e.keyCode === 13) {
                        this.input.blur();
                    }
                };
                MdInput.id = 0;
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdLabel", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdInput.prototype, "mdBlurOnEnter", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdInput.prototype, "mdDisabled", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdInput.prototype, "mdReadonly", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdPlaceholder", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdInput.prototype, "mdTextArea", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdType", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdStep", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdInput.prototype, "mdValidate", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdInput.prototype, "mdShowErrortext", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Array)
                ], MdInput.prototype, "mdUpdateTrigger", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdValidateError", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdValidateSuccess", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdValue", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdMin", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdMax", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdInput.prototype, "mdName", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdInput.prototype, "mdMaxlength", void 0);
                MdInput = MdInput_1 = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-input"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, aurelia_task_queue_1.TaskQueue, input_update_service_1.MdInputUpdateService])
                ], MdInput);
                return MdInput;
                var MdInput_1;
            }());
            exports_1("MdInput", MdInput);
        }
    };
});
