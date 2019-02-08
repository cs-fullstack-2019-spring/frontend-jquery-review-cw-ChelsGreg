// EXERCISE 1

// funnction for button 1
$("#but1").click(function () {
    var number = 0;
    $("p").addClass("greenBord").each(function () {
        number++;
    })
    alert("The number of paragraphs in the document is" + number);

});


// function for button 2
$("#but2").click(function(){
    var  number =0;
    $("div:first>p").addClass("redBord").each(function () {
        number++;
    });
    alert("The number of paragraphs in DIV1 is" + number);

});

// function for button 3
$("#but3").click(function(){
    var number= 0;
    $("div:last>p").addClass("blueBord").each(function () {
        number++;
    });
    alert("The number of paragraphs in DIV2 is" + number);
});



// EXERCISE 2


// functions to enable disable first/second buttons interchangeably

$("#but4").click(function(){
    console.log("test");
    $("#but5").removeAttr("disabled");
    $("#but4").attr("disabled", "");
});



$("#but5").click(function(){
    console.log("test2");
    $("#but4").removeAttr("disabled");
    $("#but5").attr("disabled","");
});



