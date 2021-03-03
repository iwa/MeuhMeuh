import calculAire from '../function/calculAire';
import round from '../utils/round';

test("calcul d'aire - 1", () => {
    let coords = new Map([
        [0, [-1, 1]],
        [1, [-1, -1]],
        [2, [1, -1]],
        [3, [1, 1]],
    ]);

    expect(round(calculAire(coords), 3)).toEqual(4);
});

test("calcul d'aire - 2", () => {
    let coords = new Map([
        [0, [-16.6, -20.1]],
        [1, [-12.6, -18.6]],
        [2, [-11.6, -16.6]],
        [3, [-15.1, -15.1]],
    ]);

    expect(round(calculAire(coords), 3)).toEqual(13.125);
});

test("calcul d'aire - 3", () => {
    let coords = new Map([
        [0, [-1.1, -1.5]],
        [1, [2.1, 3.012]],
        [2, [5.6, -1.21]],
        [3, [1.97, 4.07]],
    ]);

    expect(round(calculAire(coords), 3)).toEqual(3.563);
});