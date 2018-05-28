/**
 * @type {Object}
 */
module.exports = {
    data: {},
    /**
     * used to store variables
     * @param  {[string]} key   Key name of value
     * @param  {[array, string, object]} value The variable to store
     */
    set: function(key, value) {
        this.data[key] = value;
    },
    /**
     * used to get the variables
     * @param  {[string]} key Key name of value
     * @return {[array, string, object, undefined]}  return the value stored or 'undefined' if not present
     */
    get: function(key) {
        if (typeof key === 'string') {
            if (typeof this.data[key] !== undefined) {
                return this.data[key];
            }
        }
        return undefined;
    },
    /**
     * used to delete variables
     * @param  {[type]} key key Key name of value
     */
    remove: function (key) {
        delete this.data[key];
    }
}

