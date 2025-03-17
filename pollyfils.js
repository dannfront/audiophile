// src/polyfills.js
if (typeof globalThis.MessageChannel === 'undefined') {
    globalThis.MessageChannel = class MessageChannel {
        constructor() {
            const msgChannel = this;
            this.port1 = {
                postMessage(msg) {
                    setTimeout(() => {
                        if (msgChannel.port2.onmessage) {
                            msgChannel.port2.onmessage({ data: msg });
                        }
                    }, 0);
                },
            };
            this.port2 = {};
        }
    };
}