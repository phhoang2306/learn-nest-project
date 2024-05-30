async function asyncResolvePromise(input: any) {
    // Check type of input
    // input is a promise result
    if (input instanceof Promise) {
        return await input
    }

    // input is an array
    if (Array.isArray(input)) {
        // resolve each element of array 
        const resolvedArray: any = await Promise.all(input.map(asyncResolvePromise))
        return resolvedArray
    }

    // input is a Date
    if (input instanceof Date) {
        return input
    }

    // input is object & not null
    if (typeof input === 'object' && input !== null) {
        // resolve value of each key
        const keys = Object.keys(input)
        const resolvedObject: Object = {}
        let resolvedValue: any

        for (const key of keys) {
            resolvedValue = await asyncResolvePromise(input[key])
            resolvedObject[key] = resolvedValue
        }
        return resolvedObject
    }

    // all another case
    return input
}

export default asyncResolvePromise