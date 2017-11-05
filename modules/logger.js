const chalk = require('chalk');

module.exports.logger = function() {
    this.log = (type, message) => {
        switch(type) {
            case 'error':
                console.log(`${chalk.red('ERROR:')} ${message}`);
                break;
            case 'info':
                console.log(`${chalk.blue('INFO:')} ${message}`);
                break;
            case 'success':
                console.log(`${chalk.green('SUCCESS:')} ${message}`);
                break;
            case 'warn':
                console.log(`${chalk.yellow('WARN:')} ${message}`);
                break;
            default:
                console.log(`${chalk.grey(`${type.toUpperCase()}:`)} ${message}`);
                break;
        }
    }
    this.error = (message) => this.log('error', message);
    this.info = (message) => this.log('info', message);
    this.success = (message) => this.log('success', message);
    this.warn = (message) => this.log('warn', message);
};