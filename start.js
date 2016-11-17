/**
 * Created by wufei on 16/11/16.
 */
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');
