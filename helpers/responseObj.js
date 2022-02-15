const Success = (msg, data) => ({
    success: true,
    result: {
        message: msg,
        data: data ? data : []
    }
});

const Error = (msg, data) => ({
    success: false,
    result: {
        message: msg ? msg : "",
        data: data ? data : []
    }
});


const responseObj = {
    Success,
    Error
};


module.exports = responseObj;