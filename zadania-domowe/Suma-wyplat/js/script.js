 $(function () {
     $('#count-sum').click(function () {
          var sum = 0;
         $(".salary").each(function () {
             sum = sum + parseInt($(this).text());
             $("#sum").text(sum);
         });
     });
 });
