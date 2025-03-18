// src/server.ts
import AstroServer from '../.astro/server/entry.mjs'
if (!globalThis.MessageChannel) {
    globalThis.MessageChannel = class {
        port1 = { postMessage: () => { } };
        port2 = { postMessage: () => { } };
    } as any;
}

export default {
    async fetch(request: Request) {
        const response = await AstroServer.fetch(request);
        return response;
    }
};