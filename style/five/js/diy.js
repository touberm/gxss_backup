(function () {
  var showMoreNChildren = function ($children, n) {
    //��ʾĳjqueryԪ���µ�ǰn�����ص���Ԫ��
    var $hiddenChildren = $children.filter(":hidden");
    var cnt = $hiddenChildren.length;
    for (var i = 0; i < n && i < cnt ; i++) {
      $hiddenChildren.eq(i).show();
    }
    return cnt - n;//���ػ�ʣ���������Ԫ�ص�����
  }
  
  jQuery.showMore = function (selector) {
    if (selector == undefined) { selector = ".piczs" }
    //��ҳ�����е�class=piczs��Ԫ�أ���֮�������ʾ�����������󶨵����Ϊ
    $(selector).each(function () {
      var pagesize = $(this).attr("pagesize") || 10;
      var $children = $(this).children();
      if ($children.length > pagesize) {
        for (var i = pagesize; i < $children.length; i++) {
          $children.eq(i).hide();
        }
  
        $("<div class='zlm_showMore' >�鿴����</div>").insertAfter($(this)).click(function () {
          if (showMoreNChildren($children, pagesize) <= 0) {
            //���Ŀ��Ԫ���Ѿ�û�����ص���Ԫ���ˣ������ء��������İ�ť����
            $(this).hide();
          };
        });
      }
    });
  }
})();


/*
$(document).ready(function(){
  $(".navbar-toggle").click(function(){
     $("body").css("margin-left","50%");
   })
 })
*/
