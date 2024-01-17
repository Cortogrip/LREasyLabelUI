
/** Imports */


/**
 * See Event listener pattern
 */
class ListenerManager  {

   eventListeners = [];

    /**
     * Registering a new event listener
     * @param {*} eventListener 
     */
    addEventListener(eventListener){
        console.log('Adding listener : ' + eventListener);
        this.eventListeners.push(eventListener);
    }

    /**
     * Removing a registered event listener
     * @param {} eventListener 
     */
    removeEventListener(eventListener){
        console.log('Removing listener')
        var index = this.eventListeners.indexOf(eventListener);
        this.eventListeners.splice(index,1);
    }

    /**
     * Send event to all registered liststener
     * @param {} event 
     */
    fireEvent(event){

        console.log("Firering event to registered listeners [ Code : "  + event.code + " - Message : " + event.message +"]");

        this.eventListeners.forEach(
            (eventlistener)=>{
                eventlistener.eventFired(event);
            }
        );
    }





}

export default ListenerManager;