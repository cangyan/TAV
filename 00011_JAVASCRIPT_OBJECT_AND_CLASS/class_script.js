(function () {
    'use strict';

    /** 值存储类 */
    class HasValue {
        /**
         * @param {Object} value 值
         */
        constructor(value) {
            this.value = value;
        }
    }

    /** 事件类 */
    class Event extends HasValue {
    }
    /** 事件常量 */
    const Events = {
        CLICK: new Event("click"),
        LOAD: new Event("load")
    };
    deepFreeze(Events);

    /** 响应类 */
    class Response {
        /**
         * @param {Number} code 编码
         * @param {String} message 消息
         */
        constructor(code, message) {
            this.code = code;
            this.message = message;
        }
    }
    /** 响应常量 */
    const Responses = {
        OK: new Response(100, "ok"),
        ERROR: new Response(900, "error")
    };
    deepFreeze(Responses);

    addEventListener(window, Events.LOAD, () => {
        const okButton = document.getElementById("button_ok");
        addEventListener(okButton, Events.CLICK, () => alert(generateResponseText(Responses.OK)));
        const cancelButton = document.getElementById("button_cancel");
        addEventListener(cancelButton, Events.CLICK, () => alert(generateResponseText(Responses.ERROR)));
    });

    /**
     * object深度冻结
     * @param {Object} object 对象
     */
    function deepFreeze(object) {
        Object.freeze(object);
        for (const key in object) {
            const value = object[key];
            if (!object.hasOwnProperty(key) || typeof value != "object" || Object.isFrozen(value)) {
                continue;
            }
            deepFreeze(value);
        }
    }

    /**
     * 事件监听器登记
     * @param {EventTarget} target 目标
     * @param {Event} event 事件实例
     * @param {Function} listener 监听器
     * @throws {Error} 错误
     */
    function addEventListener(target, event, listener) {
        if (!(event instanceof Event)) {
            throw new Error("event is not instance of Event");
        }
        target.addEventListener(event.value, listener, false);
    }

    /**
     * 响应字符串生成
     * @param {Object} response 响应
     * @return {String} 响应字符串
     * @throws {Error} 错误
     */
    function generateResponseText(response) {
        if (!(response instanceof Response)) {
            throw new Error("response is not instance of Response");
        }
        return "[" + response.code + "] " + response.message;
    }
})();