export default function truthyJoin(
    valsArr,
    join = ''
) {
    if (!(valsArr instanceof Array)) {
        throw new Error('the first argument must be an Array');
    }

    return valsArr.filter(e => e).join(join);
}
