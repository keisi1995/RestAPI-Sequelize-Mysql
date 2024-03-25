exports.success = (res, message = '', statusCode = 200, data = []) => {
    res.status(201).json({
        message: message,
        statusCode: statusCode,
        success: true,
        data: data,
    })
}

exports.error = (res, message = '', statusCode = 200, data = []) => {
    res.status(201).json({
        message: message,
        statusCode: statusCode,
        success: false,
        errors: data, 
    })    
}
