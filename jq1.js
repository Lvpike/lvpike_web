$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
    $("p").dblclick(function(){
    $(this).hide();//当双击元素时，会发生 dblclick 事件。
    });
    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    });//当鼠标指针穿过元素时，会发生 mouseenter 事件。
    $("#p1").mouseleave(function(){
        alert("Bye! You now leave p1!");
    });
});