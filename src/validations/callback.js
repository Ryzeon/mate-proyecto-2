class FutureCallback {

    constructor() {
        this._callback = null;
    }

    handle(value) {
        if(this._callback) {
            this._callback(value);
        }
    }

    onSuccess(func) {
        this._callback = func;
        return this;
    }
}

export default FutureCallback;