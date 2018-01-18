 $(function () {
     $('#count-sum').click(function () {
         sum = 0;
         $(".salary").each(function () {
             sum = sum + parseInt($(this).text());
             $("#sum").text(sum);
         });
     });
 });
