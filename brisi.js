
        // Message variable contains the div object which
        // is used to display message after we are done resizing
        var message = document.getElementById("message");
       
        // timeOutFunctionId stores a numeric ID which is
        // used by clearTimeOut to reset timer
        var timeOutFunctionId;
 
        // The function that we want to execute after
        // we are done resizing
        function workAfterResizeIsDone() {
            message.innerHTML += "
<p>Window Resized</p>
";
        }
 
        // The following event is triggered continuously
        // while we are resizing the window
        window.addEventListener("resize", function() {
           
            // clearTimeOut() resets the setTimeOut() timer
            // due to this the function in setTimeout() is
            // fired after we are done resizing
            clearTimeout(timeOutFunctionId);
           
            // setTimeout returns the numeric ID which is used by
            // clearTimeOut to reset the timer
            timeOutFunctionId = setTimeout(workAfterResizeIsDone, 500);
        });
