export function encode(res, data) {
    if (!res.index) res.index = 0;
    console.log(data)
    res.write((!(res.index++) ? '' : ',') + JSON.stringify(data));
}