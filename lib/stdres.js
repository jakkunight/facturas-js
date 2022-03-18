const stdres = {};

stdres.ok = JSON.stringify({
    http_code: 200,
    status: 0,
    msg: "OK."
});

stdres.auth_error = JSON.stringify({
    http_code: 401,
    status: 2,
    msg: "AUTH ERROR."
});

stdres.fatal_error = JSON.stringify({
    http_code: 400,
    status: -1,
    msg: "FATAL ERROR."
});

stdres.not_found = JSON.stringify({
    http_code: 404,
    status: 1,
    msg: "NOT FOUND"
});

module.exports = stdres;