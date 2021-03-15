/**
 * Data utility contains methods to format the data.
 */

class DataUtility {
    /**
     * Returns date into 'YYYY-MM-DD' format.
     * @param {*} d 
     * JSON.stringify = It converts the JSON object into String...
     */
    static formatDate(d) {
        var str = JSON.stringify(d);
        console.log('MySQLdate:', str);
        if (d) {
            try {
                /** The toISOString() method converts a Date object into a string, using the ISO standard.

                The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ

                 */
                console.log(d.toISOString().split('T')[0]);
                return d.toISOString().split('T')[0];
            } catch (err) {
                return '';
            }
        } else {
            return d;
        }
    }
}
module.exports = DataUtility;