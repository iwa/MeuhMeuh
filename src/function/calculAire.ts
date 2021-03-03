export default function calculAire(n: number, coords: Map<number, number[]>) {
    let res = 0;

    for (let i = 0; i < n; i++) {
        let x = (coords.get(i))[0];
        let y = (coords.get(i))[1];

        let x1 = (coords.get(i+1) || coords.get(0))[0];
        let y1 = (coords.get(i+1) || coords.get(0))[1];

        res += (x * y1 - x1 * y);
    }

    res *= (1/2);

    return res;
}