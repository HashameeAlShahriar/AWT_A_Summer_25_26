"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
var common_1 = require("@nestjs/common");
var CourseController = function () {
    var _classDecorators = [(0, common_1.Controller)('course')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getAllCourses_decorators;
    var _getCourseById_decorators;
    var _createCourse_decorators;
    var _updateCourse_decorators;
    var _patchCourse_decorators;
    var _deleteCourse_decorators;
    var CourseController = _classThis = /** @class */ (function () {
        function CourseController_1(courseService) {
            this.courseService = (__runInitializers(this, _instanceExtraInitializers), courseService);
        }
        CourseController_1.prototype.getAllCourses = function () {
            return this.courseService.getAllCourses();
        };
        CourseController_1.prototype.getCourseById = function (id) {
            return this.courseService.getCourseById(id);
        };
        CourseController_1.prototype.createCourse = function () {
            return this.courseService.createCourse();
        };
        CourseController_1.prototype.updateCourse = function (id) {
            return this.courseService.updateCourse(id);
        };
        CourseController_1.prototype.patchCourse = function (id) {
            return this.courseService.patchCourse(id);
        };
        CourseController_1.prototype.deleteCourse = function (id) {
            return this.courseService.deleteCourse(id);
        };
        return CourseController_1;
    }());
    __setFunctionName(_classThis, "CourseController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllCourses_decorators = [(0, common_1.Get)()];
        _getCourseById_decorators = [(0, common_1.Get)(':id')];
        _createCourse_decorators = [(0, common_1.Post)()];
        _updateCourse_decorators = [(0, common_1.Put)(':id')];
        _patchCourse_decorators = [(0, common_1.Patch)(':id')];
        _deleteCourse_decorators = [(0, common_1.Delete)(':id')];
        __esDecorate(_classThis, null, _getAllCourses_decorators, { kind: "method", name: "getAllCourses", static: false, private: false, access: { has: function (obj) { return "getAllCourses" in obj; }, get: function (obj) { return obj.getAllCourses; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCourseById_decorators, { kind: "method", name: "getCourseById", static: false, private: false, access: { has: function (obj) { return "getCourseById" in obj; }, get: function (obj) { return obj.getCourseById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createCourse_decorators, { kind: "method", name: "createCourse", static: false, private: false, access: { has: function (obj) { return "createCourse" in obj; }, get: function (obj) { return obj.createCourse; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCourse_decorators, { kind: "method", name: "updateCourse", static: false, private: false, access: { has: function (obj) { return "updateCourse" in obj; }, get: function (obj) { return obj.updateCourse; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _patchCourse_decorators, { kind: "method", name: "patchCourse", static: false, private: false, access: { has: function (obj) { return "patchCourse" in obj; }, get: function (obj) { return obj.patchCourse; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteCourse_decorators, { kind: "method", name: "deleteCourse", static: false, private: false, access: { has: function (obj) { return "deleteCourse" in obj; }, get: function (obj) { return obj.deleteCourse; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CourseController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CourseController = _classThis;
}();
exports.CourseController = CourseController;
