import appartenancePoint from '../function/appartenancePoint';

test("calcul gravité - 1", () => {
    let coords = new Map([
        [0, [-1, 1]],
        [1, [-1, -1]],
        [2, [1, -1]],
        [3, [1, 1]],
    ]);

    let res = appartenancePoint(coords, [0, 0]);

    expect(res).toEqual(true);
});

test("calcul gravité - 2", () => {
    let coords = new Map([
        [0, [-16.6, -20.1]],
        [1, [-12.6, -18.6]],
        [2, [-11.6, -16.6]],
        [3, [-15.1, -15.1]],
    ]);

    let res = appartenancePoint(coords, [-14.226, -17.555]);

    expect(res).toEqual(true);
});

test("calcul gravité - 3", () => {
    let coords = new Map([
        [0, [-1.1, -1.5]],
        [1, [2.1, 3.012]],
        [2, [5.6, -1.21]],
        [3, [1.97, 4.07]],
    ]);

    let res = appartenancePoint(coords, [1.978, 1.903]);

    expect(res).toEqual(false);
});