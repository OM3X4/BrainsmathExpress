export default function bigIntReplacer(key: any, value: any) {
    if (typeof value === 'bigint') {
        return value.toString();
    }
    return value; // return everything else unchanged
}