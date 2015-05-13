<?php
namespace gerpayt\yii2_datetime_compare;

use common\assets\FontAwesomeAsset;
use yii\web\AssetBundle;

/**
 * This asset bundle provides the javascript files for client validation.
 *
 * @author Anushan Easwaramoorthy <EAnushan@hotmail.com>
 * @since 2.0
 */
class DateTimeCompareValidationAsset extends AssetBundle
{
    public $sourcePath = '@vendor/gerpayt/yii2-datetime-compare/assets';
    public $js = [
        'js/datetimecompare.validation.js',
    ];
    public $depends = [
        'yii\validators\ValidationAsset',
        'common\assets\FontAwesomeAsset',
    ];
}
