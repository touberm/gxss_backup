$(function(){
  /* page_demand */
  /* $('.check').each(function(ind,ele){
    $(this).next('label').css{}
  }) */
 /*  $('.check').on('change',function(){
    if($(this).attr('checked')){
      console.log('checked');
    }else{
      console.log('empty')
    }
  }) */

  $('.check').on('change',function(){
    flushRadio();
    console.log($(this));
  })
  function flushRadio(){
    $('.check').each(function(ind,ele){
      $(ele).next('label').css({'backgroundImage':'url(/gxss/style/five/images/demand/empty.png)'});
    });
    $('.check:checked').each(function(ind,ele){
      $(ele).next('label').css({'backgroundImage':'url(/gxss/style/five/images/demand/selected.png)'});
    });
  }


})