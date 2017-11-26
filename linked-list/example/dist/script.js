/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_node_1 = __webpack_require__(1);
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = null;
        this.tail = null;
        this._size = 0;
        this.addToHead(value);
    }
    LinkedList.prototype.add = function (value) {
        if (this.isEmpty) {
            this.addToHead(value);
        }
        else {
            var node = new linked_list_node_1.default(value);
            this.tail = this.tail.next = node;
        }
        this._size++;
        return this;
    };
    LinkedList.prototype.addRange = function (values) {
        var _this = this;
        if (values.length > 0) {
            values.forEach(function (item) { return _this.add(item); });
        }
        return this;
    };
    LinkedList.prototype.remove = function (value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this._size--;
            return this;
        }
        var node = this.head;
        while (node !== null) {
            if (node.next.value === value) {
                node.next = node.next.next;
                this._size--;
                return this;
            }
            node = node.next;
        }
        return this;
    };
    LinkedList.prototype.find = function (value) {
        var node = this.head;
        while (node !== null) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
        return null;
    };
    LinkedList.prototype.forEach = function (callback) {
        var node = this.head, index = 0;
        while (node !== null) {
            callback(node.value, index);
            node = node.next;
            index++;
        }
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
        this.tail = null;
        this._size = 0;
    };
    Object.defineProperty(LinkedList.prototype, "isEmpty", {
        get: function () {
            return this._size === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.addToHead = function (value) {
        if (!this.isNullOrUndefined(value)) {
            var node = new linked_list_node_1.default(value);
            this.tail = this.head = node;
        }
    };
    LinkedList.prototype.isNullOrUndefined = function (value) {
        return value === null || typeof value === 'undefined';
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        if (value === void 0) { value = null; }
        this.next = null;
        this.value = value;
    }
    return LinkedListNode;
}());
exports.default = LinkedListNode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(0);
(function () {
    var linkedList = new linked_list_1.default();
    console.log('Just was created:', linkedList);
    linkedList.add(100);
    linkedList.add(101);
    linkedList.add(102);
    console.log('Added 3 items:', linkedList);
    console.log('Size after added:', linkedList.size);
    linkedList.forEach(function (item, index) {
        console.log('Foreach Item:', index, item);
    });
    console.log('Find element:', linkedList.find(101));
    linkedList.clear();
    console.log('After clear', linkedList);
    linkedList
        .add(1)
        .add(2)
        .add(3)
        .add(4);
    console.log('Added 4 items with chain', linkedList);
    linkedList.remove(3);
    console.log('After remove', linkedList);
    linkedList.addRange([
        5,
        6,
        7,
    ]);
    console.log('After added range', linkedList);
})();


/***/ })
/******/ ]);