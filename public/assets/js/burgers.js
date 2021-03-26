// code when devour button has been clicked
$(function () {
    $(".devourBurger").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var devourCount = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourCount
        }).then(
            function () {
                console.log("changed devour to", newDevoured);
                // Reload the page to get updated devour list
                location.reload();
            }
        );
    });

    $(".submitBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#add-burger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
