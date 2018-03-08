// Tasks:
// 1. Loop over elements array,
//    attach drag event handler 
//    and attach drop event handler
//    and append this html to the elements stack
// 2. Add click handler to the dropped elements in canvas
// 3. Add pagination to both the stacks

// To Do:
// 1. Keep elements optional, have default elements array
// 2. Add virtual scroll
// 3. Provide custom handlers option

/*
    args: elements array, id of elements stack, id of canvas
*/
var setDragDrop = (function () {
    
    function attachEventHandlers(elements, elementsStackId) {
        var eleIn;
        for(eleIn in elements) {
            var tempElemNode = document.createElement("div");
            tempElemNode.innerHTML = elements[eleIn].template;
            // Add common styles to every element
            // Attach drag handler
            tempElemNode.setAttribute("draggable", true);
            tempElemNode.addEventListener("dragstart", function(ev) {
                
                ev.dataTransfer.setData("elem", ev.target.innerHTML);
            });
            document.getElementById(elementsStackId).appendChild(tempElemNode);
        }
    }
    
    return function(elements, elementsStackId, canvasId) {
        attachEventHandlers(elements, elementsStackId);
        // Attach drop handler
        var container = document.getElementById(canvasId);
        container.addEventListener("drop", function(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("elem");
            ev.target.appendChild(elem);
        });
        container.addEventListener("dragover", function(ev) {
            
        });
    }
})();