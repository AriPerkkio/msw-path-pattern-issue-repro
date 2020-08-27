function requestApi() {
    return fetch('http://randomhashrighthere.server.net/resource')
        .then(response => response.text())
        .then(text => {
            document.body.innerText = text;
        })
        .catch(() => {
            document.body.innerText = 'Unable to fetch';
        });
}

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start().then(requestApi);
} else {
    requestApi();
}
