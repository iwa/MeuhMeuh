import calculGravite from '../function/calculGravite';
import round from '../utils/round';

test("calcul gravité - 1", () => {
    let coords = new Map([
        [0, [-1, 1]],
        [1, [-1, -1]],
        [2, [1, -1]],
        [3, [1, 1]],
    ]);

    let res = calculGravite(coords, 4);

    expect([round(res[0], 3), round(res[1], 3)]).toEqual([0, 0]);
});

test("calcul gravité - 2", () => {
    let coords = new Map([
        [0, [-16.6, -20.1]],
        [1, [-12.6, -18.6]],
        [2, [-11.6, -16.6]],
        [3, [-15.1, -15.1]],
    ]);

    let res = calculGravite(coords, 13.125);

    expect([round(res[0], 3), round(res[1], 3)]).toEqual([-14.226, -17.555]);
});

test("calcul gravité - 3", () => {
    let coords = new Map([
        [0, [-1.1, -1.5]],
        [1, [2.1, 3.012]],
        [2, [5.6, -1.21]],
        [3, [1.97, 4.07]],
    ]);

    let res = calculGravite(coords, 3.563);

    expect([round(res[0], 3), round(res[1], 3)]).toEqual([1.979, 1.904]);
});