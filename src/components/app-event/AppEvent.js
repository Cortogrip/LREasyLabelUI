/** Imports */



class AppEvent {

    /** The message text */
    message;

    /** The message code */
    code;

    /** The message source*/
    source;

    /** The message targets (should be an array)*/
    targets;

    constructor(code, message, source, targets) {
        this.code = code;
        this.message = message;
        this.source = source;
        this.targets = targets;
      }

}

export default AppEvent;