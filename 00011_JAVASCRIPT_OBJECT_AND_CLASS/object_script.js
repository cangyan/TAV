(function () {
    'use strict';

    /** 事件 */
    const Event = {
        CLICK: "click",
        LOAD: "load"
    };
    deepFreeze(Event);

    /** 响应 */
    const Response = {
        OK: {
            code: 100,
            message: "ok"
        },
        ERROR: {
            code: 900,
            message: "error"
        }
    };
    deepFreeze(Response);

    addEventListener(window, Event.LOAD, () => {
        const okButton = document.getElementById("button_ok");
        addEventListener(okButton, Event.CLICK, () => alert(generateResponseText(Response.OK)));
        const cancelButton = document.getElementById("button_cancel");
        addEventListener(cancelButton, Event.CLICK, () => alert(generateResponseText(Response.ERROR)));
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
     * @param {String} event 事件
     * @param {Function} listener 监听器
     * @throws {Error} 错误
     */
    function addEventListener(target, event, listener) {
        if (event === undefined) {
            throw new Error("event is undefined");
        }
        target.addEventListener(event, listener, false);
    }

    /**
     * 响应字符串生成
     * @param {Object} response 响应
     * @return {String} 响应字符串
     * @throws {Error} 错误
     */
    function generateResponseText(response) {
        if (response === undefined) {
            throw new Error("response is undefined");
        }
        return "[" + response.code + "] " + response.message;
    }
})();