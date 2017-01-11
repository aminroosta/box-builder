let system = null;


const notify = (message, level) => system && system.addNotification({message, level})
export default {
    success: msg => notify(msg, 'success'),
    error: msg => notify(msg, 'error'),
    warning: msg => notify(msg, 'warning'),
    info: msg => notify(msg, 'info'),
    setup: s => system = s,
}