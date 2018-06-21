var makeDraggable = (function() {
    var _dropdragMap = {};
    
    function _validateDragDrop(dragid, dropid) {
        //To Do: loop over _dropdragMap and validate
        return true;
    }
    
    /**
     * To Do:
     * 1. Copy paste on drag and drop or provide such option in settings
     * 2. See how text/key can be shared with every object dragged and create content map of droppable zone
     * 3. Object mapping of dragged objects on dragged area as an example / use case
     * 4. See if you want custom event handlers (ondrop handler is necessary)
     * 5. Handle all sorts of weird bugs
     * 6. Write another object/class inside which have methods to get object of every dropzone created with keymapped in it
     */
    
    /**
     * @param draggable element id, droppable area id
     * This method sets elements draggable and sets droppable area
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
                // _validateDragDrop(dragid, dropid)
                var data = e.dataTransfer.getData("text");
                var draggedElem = document.getElementById(data);
                var copyOfDraggedElem =  draggedElem.cloneNode(true);
                e.target.appendChild(copyOfDraggedElem);
                console.log("Check: " + JSON.stringify(_dropdragMap));
            });
        }
    };
})();
