/**
 * @type {Object}
 */
module.exports = {
    data: {},
    /**
     * used to store variables
     * @param  {[string]} key   Key name of value
     * @param  {[array, string, object]} value The variable to store
     * @return {[string]}     'created' is new or 'setted' if present
     */
    set: function(key, value) {
        if (!this.isKey(key)) return 'is-not-a-key';

        var response = this.isPresent(key) ? 'setted' : 'created';
        this.data[key] = value;

        return response;
    },
    /**
     * used to get the variables
     * @param  {[string]} key Key name of value
     * @return {[array, string, object, undefined]}  return the value stored or 'undefined' if not present
     */
    get: function(key) {
        if (this.isKey(key) && this.isPresent(key)) {
            return this.data[key];
        }

        return undefined;
    },
    /**
     * used to delete variables
     * @param  {[type]} key key name of value
     * @return {[boolean]}     true if deleted or false if undefined
     */
    remove: function (key) {
        if (this.isKey(key) && this.isPresent(key)) {
            delete this.data[key];
            return true;
        }

        return false;
    },
    isPresent: function (key) {
        return typeof this.data[key] !== "undefined" ?  true : false;
    },
    isKey: function (key) {
        return typeof key === 'string' ?  true : false;
    }
}

