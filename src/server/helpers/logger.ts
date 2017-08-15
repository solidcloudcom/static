export default {
    info(...args: Array<any>): void {
        console.info('SERVER::: INFO::: ' + args.join(' --> '));
    },
    warn(...args: Array<any>): void {
        console.warn('SERVER::: WARN::: ' + args.join(' --> '));
    }
};
