class ApiError extends Error { // ApiError inherits properties from the inbuilt error class

    constructor(
        statusCode,
        message= "Something went wrong ",
        error = [],
        statck = ""
    ){
        super(message) // super is used to call the constructor of the parent class
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export {ApiError}