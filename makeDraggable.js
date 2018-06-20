var makeDraggable = function() {
    
    /**
     * @param draggable element id, droppable area id
     * This method sets elements draggable and sets droppable area
     * Reference : https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
     * and raises eventHandlers for ondrag, ondragover, ondrop, etc
     * Custom event handlers : https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
     */
    return function(dragid, dropid) {
        //Set dragid element draggable    
        document.getElementById(dragid).setAttribute("draggable", true);
        //Set conditions on droppable zone to accept only corresponding draggable elements
        //Add all drag drop events and raise user-friendly event handlers
        //
    };
};
