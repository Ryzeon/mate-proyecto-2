class FutureCallback {

    constructor() {
        this._callback = null;
    }

    handle(...values) {
        if(this._callback) {
            this._callback(...values);
        }
    }

    onSuccess(func) {
        this._callback = func;
        return this;
    }
}

export default FutureCallback;