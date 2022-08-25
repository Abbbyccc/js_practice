const debounce = (func, sec) => {
    let timeout
    return (...arg) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => { func.apply(this, arg) }, sec)
    }
}

const opDebounce = (func, sec, immediate) => {
    let timeout;
    // reference the context and args for the setTimeout function

    return (...args) => {
        // should the function be called now? If immediate is true
        // and not already in a timeout then the answer is: Yes
        const callNow = immediate && !timeout;

        // clear the timeout to assign the new timeout to it.
        // when event is fired repeatedly then this helps to reset
        clearTimeout(timeout);

        // set the new timeout
        timeout = setTimeout(function () {
            // Inside the timeout function, clear the timeout variable
            // which will let the next execution run when in 'immediate' mode
            timeout = null;

            // check if the function already ran with the immediate flag
            if (!immediate) {
                // call the original function with apply
                func.apply(this, args);
            }
        }, sec);

        // immediate mode and no wait timer? Execute the function immediately
        if (callNow) func.apply(this, args);
    }
}



