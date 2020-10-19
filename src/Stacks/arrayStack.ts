interface Stack<E> {

    getSize: () => number;
    isEmpty: () => boolean;
    push: (value: number) => void;
    pop: () => E;
    peek: () => E;
}