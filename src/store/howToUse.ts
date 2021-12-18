import { TObject, importState } from '../TStore.plugin';
import TStore from '../TStore.plugin';

//interface.ts
interface IAge {
    myAge: number;
    newyear(): void;
}

interface ICount {
    myCount: number
    add(n: number): void;
}

export type MyState = { age: IAge } & { count: ICount } & TObject;


///file data store
export const count: ICount = {
    myCount: 1,
    add(n: number) {
        this.myCount += n;
    }
}
importState({ count });

export const age: IAge = {
    myAge: 1,
    newyear() {
        this.myAge++;
    }
};
importState({ age });

/// store.ts
export function useAppStore(): MyState {
    return mystate.useTStore();
}
const mystate = new TStore<MyState>();
export default mystate;