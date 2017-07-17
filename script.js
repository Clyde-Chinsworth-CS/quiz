// HTML input element
// $().val(); - gets value of an input element
// $().html(); - sets content of an element

var control1
var control2
var control3
var control4
var control5
var correct = 0

$(document).ready(function () {

    var slideNum = 0
    $("#prev").hide()
    $("#next").hide()
    $("#slideIn").hide()

    $("#go").click(function () {

        $("#div0").slideUp("slow", function () {
            slideNum = 1
            console.log(slideNum)
        })

        $("#div1").slideDown("slow")
        $("#slideIn").html(1 + "/7")

        $("#prev").show()
        $("#next").show()
        $("#slideIn").show()

    })

    // slide one selector
    $(".flow").click(function () {
        $(".flow").removeClass("selected")
        $(this).addClass("selected")
        control1 = $(this).text()
    })

    // slide two selector
    $(".flow2").click(function () {
        $(".flow2").removeClass("selected")
        $(this).addClass("selected")
        control2 = $(this).text()
    })

    // slide three selector
    $(".flow3").click(function () {
        $(".flow3").removeClass("selected")
        $(this).addClass("selected")
        control3 = $(this).text()
    })

    // slide four selector
    $(".flow4").click(function () {
        $(".flow4").removeClass("selected")
        $(this).addClass("selected")
        control4 = $(this).text()
    })

    // slide five selector
    $(".flow5").click(function () {
        $(".flow5").removeClass("selected")
        $(this).addClass("selected")
        control5 = $(this).text()
    })

    // slideshow

    $("#slideIn").html(slideNum + "/7")

    //previous
    $("#prev").click(function () {
        $("#div" + slideNum).slideUp("slow", function () {
            slideNum--

            if (slideNum < 1) {
                slideNum = 1
            }

            $("#div" + slideNum).slideDown("slow")
            $("#slideIn").html(slideNum + "/7")
        })
    })

    //next
    $("#next").click(function () {
        $("#div" + slideNum).slideUp("slow", function () {
            slideNum++

            if (slideNum > 7) { // RESULTS SCREEN
                $("#prev").hide()
                $("#next").hide()

                if (control1 == "INFERNO COP") {
                    correct++
                } else {
                    $("#a1").html("Question one")
                }
                
                if (control2 == "NINTENDO 64") {
                    correct++
                } else {
                    $("#a6").html("Question six")
                }
                
                if (control3 == "SAILFISH") {
                    correct++
                } else {
                    $("#a3").html("Question three")
                }
                
                if (control4 == "JAVANESE") {
                    correct++
                } else {
                    $("#a4").html("Question four")
                }
                
                if (control5 == "AUSTRALIA") {
                    correct++
                } else {
                    $("#a5").html("Question five")
                }
                
                var num = $("#numIn").val()
                if (num == 2) {
                    correct++
                } else {
                    $("#a2").html("Question two")
                }
                
                var text = $("#textIn").val()
                text = text.toLowerCase()
                if (text == "sunrise") {
                    correct++
                }  else {
                    $("#a7").html("Question seven")
                }
                
                if (correct < 7) {
                    $("#place").html("Incorrect answers:")
                }
                
                $("#score").html("You scored " + correct + "/7")
                
                

                if (correct == 0) {
                    $("#status").html("Maybe you should try harder.")
                } else if (correct == 1) {
                    $("#status").html("Better than nothing.")
                } else if (correct == 2) {
                    $("#status").html("Subpar.")
                } else if (correct == 3) {
                    $("#status").html("Proud of yourself?")
                } else if (correct == 4) {
                    $("#status").html("Not a fail, at least.")
                } else if (correct == 5) {
                    $("#status").html("Pretty mediocre.")
                } else if (correct == 6) {
                    $("#status").html("No cigar.")
                } else if (correct == 7) {
                    $("#status").html("Aren't you special.")
                }
            }

            $("#div" + slideNum).slideDown("slow")
            if (slideNum > 7) {
                $("#slideIn").hide()
            } else {
                $("#slideIn").html(slideNum + "/7")
            }

        })
    })
})
