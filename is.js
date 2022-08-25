is.num = (arg) => typeof arg === 'number'
is.nan = (arg) => Number.isNaN(arg)
is.str = (arg) => typeof arg === 'string'
is.bool = (arg) => typeof arg === 'boolean'
is.undef = (arg) => typeof arg === undefined
is.def = (arg) => typeof arg !== undefined
is.arr = (arg) => Array.isArray(arg)
is.obj = (arg) => typeof arg === 'object' && typeof arg !== null && !is.fun(arg) && !is.arr(arg)
is.fun = (arg) => typeof arg === 'function'
is.truthy = (arg) => !!arg
is.falsy = (arg) => !arg











// is.num = (arg) => typeof arg === 'number'
// is.nan = (arg) => Number.isNaN(arg)
// is.str = (arg) => typeof arg === 'string'
// is.bool = (arg) => typeof arg === 'boolean'
// is.undef = (arg) => arg === undefined
// is.def = (arg) => !is.undef(arg)
// is.arr = (arg) => Array.isArray(arg)
// is.obj = (arg) => typeof arg === 'object' && arg !== null && !is.fun(arg) && !is.arr(arg)
// is.fun = (arg) => typeof arg === 'function'
// is.truthy = (arg) => !!arg
// is.falsy = (arg) => !arg
