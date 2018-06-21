var makeDraggable = (function() {
    var _dropdragMap = {};
    
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
        var _dropHandlerExists = false;
        if(_dropdragMap.hasOwnProperty(dropid)) {
            _dropHandlerExists = true;
            if(!Array.isArray(_dropdragMap[dropid])) {
                console.error("invalid _dropdragMap at " + dropid + " : " + _dropdragMap[dropid]);
                return;
            }
        } else {
            _dropdragMap[dropid] = [];
        }
        
        /********* dragid settings begin here *********/
        _dropdragMap[dropid].push(dragid);
        var draggableElem = document.getElementById(dragid);
        draggableElem.setAttribute("draggable", true);
        draggableElem.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("text", e.target.id);
        });
        /********* dragid settings end here ***********/
        
        if(!_dropHandlerExists) {
            var droppableRegion = document.getElementById(dropid);
            droppableRegion.addEventListener("dragover", function(e) {
                e.preventDefault();
            });
            droppableRegion.addEventListener("drop", function(e) {
                e.preventDefault();
                // To Do:  Check if this is valid drop from _dropdragMap array for this dropid
                var data = e.dataTransfer.getData("text");
                e.target.appendChild(document.getElementById(data));
                console.log("Check: " + JSON.stringify(_dropdragMap));
            });
        }
    };
})();
