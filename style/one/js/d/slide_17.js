var Show_Style=3;
var Image_17=new Array();
var Pics="/e/images/banner/banner-1.jpg|/e/images/banner/banner-2.jpg|/e/images/banner/banner-3.jpg";
var Links="";
var Titles="";
var Alts="";
var Apic17=Pics.split('|');
var ALink17=Links.split('|');
var ATitle17=Titles.split('|');
var AAlts17=Alts.split('|');
var Show_Text=0;
for(i=0;i<Apic17.length;i++)
  {
   Image_17.src = Apic17[i]; 
  }



  var FHTML='<div id="js_slide_focus_17" class="slide_focus focus_style3" style="height:600px"><a class="prev"></a><a class="next"></a>';
  
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic17.length;i++)
   {
     if(ALink17.length<(i+1) || ALink17[i]=="")
      {
       ALink17[i]="javascript:void(0)";
      }
     if(AAlts17.length<(i+1))
      {
       AAlts17[i]="";
      }
     if(ATitle17.length<(i+1))
      {
       ATitle17[i]="";
      }
    FHTML+='<li><a href="'+ALink17[i]+'" target="_self" title="'+AAlts17[i]+'"><img src="'+Apic17[i]+'">';
    FHTML+='<em>'+ATitle17[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(function(){Slide_Focus("js_slide_focus_17",0,5,1000,600,true);});