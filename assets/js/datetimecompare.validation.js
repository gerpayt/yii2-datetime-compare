/**
 * DateTimeCompare validation module.
 *
 * This JavaScript module provides the validation methods for the DateTimeCompareValidator.
 *
 * @author Anushan Easwaramoorthy <EAnushan@hotmail.com>
 * @since 2.0
 */

$.extend(yii.validation, (function ($) {
    var pub = {
        datetimecompare: function (value, messages, options) {
            if (options.skipOnEmpty && yii.validation.isEmpty(value)) {
                return;
            }

            var compareValue, valid = true;
            if (options.compareAttribute === undefined) {
                compareValue = options.compareValue;
            } else {
                compareValue = $('#' + options.compareAttribute).val();
            }

            var dateAndTime1 = value.split(' ');
            var dateValue = (new Date(dateAndTime1[0])).getTime();
            var hourMinuteSecond1 = dateAndTime1[1].split(':');
            dateValue = dateValue + (parseInt(hourMinuteSecond1[0]) * 3600 + parseInt(hourMinuteSecond1[1]) * 60 + parseInt(hourMinuteSecond1[2])) * 1000;

            var dateAndTime2 = compareValue.split(' ');
            var dateCompareValue = (new Date(dateAndTime2[0])).getTime();
            var hourMinuteSecond2 = dateAndTime2[1].split(':');
            dateCompareValue = dateCompareValue + (parseInt(hourMinuteSecond2[0]) * 3600 + parseInt(hourMinuteSecond2[1]) * 60 + parseInt(hourMinuteSecond2[2])+ options.offset) * 1000;


            switch (options.operator) {
                case '==':
                    valid = dateValue == dateCompareValue;
                    break;
                case '===':
                    valid = value === compareValue;
                    break;
                case '!=':
                    valid = dateValue != dateCompareValue;
                    break;
                case '!==':
                    valid = value !== compareValue;
                    break;
                case '>':
                    valid = dateValue > dateCompareValue;
                    break;
                case '>=':
                    valid = dateValue >= dateCompareValue;
                    break;
                case '<':
                    valid = dateValue < dateCompareValue;
                    break;
                case '<=':
                    valid = dateValue <= dateCompareValue;
                    break;
                default:
                    valid = false;
                    break;
            }

            if (!valid) {
            	yii.validation.addMessage(messages, options.message, value);
            }
        }
    };

    return pub;
})(jQuery));
