var Show_Style=3;
var Image_18=new Array();
var Pics="/gxss/style/one/css/images/tp1.jpg|/gxss/style/one/css/images/tp2.jpg";
var Links="";
var Titles="";
var Alts="";
var Apic18=Pics.split('|');
var ALink18=Links.split('|');
var ATitle18=Titles.split('|');
var AAlts18=Alts.split('|');
var Show_Text=0;
for(i=0;i<Apic18.length;i++)
  {
   Image_18.src = Apic18[i]; 
  }



  var FHTML='<div id="js_slide_focus_18" class="slide_focus focus_style3" ><a class="prev"></a><a class="next"></a>';
  
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic18.length;i++)
   {
     if(ALink18.length<(i+1) || ALink18[i]=="")
      {
       ALink18[i]="javascript:void(0)";
      }
     if(AAlts18.length<(i+1))
      {
       AAlts18[i]="";
      }
     if(ATitle18.length<(i+1))
      {
       ATitle18[i]="";
      }
    FHTML+='<li><a href="'+ALink18[i]+'" target="_self" title="'+AAlts18[i]+'"><img src="'+Apic18[i]+'">';
    FHTML+='<em>'+ATitle18[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(window).load(function(){Slide_Focus("js_slide_focus_18",0,5,0,0,true);});
