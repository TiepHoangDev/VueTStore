import { App, reactive } from 'vue';

export type TObject = Record<string, unknown>;

const mState: unknown[] = [];
export function importState(d: unknown): void {
    console.log("importState", d);
    mState.push(d);
}

function exportState() {
    return Object.assign({}, ...mState);
}

export default class TStore<TState extends TObject> {
    _app?: App;
    install(app: App): App {
        this._app = app;
        const data = exportState();
        console.log("install TStore", data);
        this._app.config.globalProperties.$TState = reactive(data || {});
        return this._app;
    }
    useTStore(): TState {
        return this._app?.config.globalProperties.$TState as TState;
    }
}
