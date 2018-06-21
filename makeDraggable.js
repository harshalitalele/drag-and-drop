var makeDraggable = (function() {
    
    /**
     * @param draggable element id, droppable area id
     * This method sets elements draggable and sets droppable area
     * Add a copy option instead of cut pasting elements
     * Handle this : multiple drop handlers in this case
     * Text to share with every object dragged
     * object mapping of dragged objects on dragged area
     * Reference : https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
     * and raises eventHandlers for ondrag, ondragover, ondrop, etc
     * Custom event handlers : https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
     */
    return function(dragid, dropid) {
        //remove all previously existing drag drop related handlers
        //Set dragid element draggable
        var draggableElem = document.getElementById(dragid);
        draggableElem.setAttribute("draggable", true);
        var droppableRegion = document.getElementById(dropid);
        draggableElem.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("text", e.target.id);
        });
        droppableRegion.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        droppableRegion.addEventListener("drop", function(e) {
            e.preventDefault();
            var data = e.dataTransfer.getData("text");
            e.target.appendChild(document.getElementById(data));
        });
        //Set conditions on droppable zone to accept only corresponding draggable elements
        //Add all drag drop events and raise user-friendly event handlers
    };
})();
