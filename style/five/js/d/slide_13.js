var Show_Style=1;
var Image_13=new Array();
var Pics="/e/upload/s1/article/image/2016/12/03143018.jpg|/e/upload/s1/article/image/2016/12/03142949.jpg|/e/upload/s1/article/image/2016/12/03142914.jpg|/e/upload/s1/article/image/2016/12/03142840.jpg|/e/upload/s1/article/image/2016/12/03142808.jpg";
var Links="/index.aspx?lanmuid=63&sublanmuid=547&id=626|/index.aspx?lanmuid=63&sublanmuid=547&id=625|/index.aspx?lanmuid=63&sublanmuid=547&id=624|/index.aspx?lanmuid=63&sublanmuid=547&id=623|/index.aspx?lanmuid=63&sublanmuid=547&id=622";
var Titles="四明山红色之旅|尊荣员工“班组建设与...|荣获“广州市学习型企...|公司工艺人才培训班正...|游香港 览中西风情";
var Alts="四明山红色之旅|尊荣员工“班组建设与工作心态”培训会议|荣获“广州市学习型企业”示范单位|公司工艺人才培训班正式开班|游香港 览中西风情";
var Apic13=Pics.split('|');
var ALink13=Links.split('|');
var ATitle13=Titles.split('|');
var AAlts13=Alts.split('|');
var Show_Text=1;
for(i=0;i<Apic13.length;i++)
  {
   Image_13.src = Apic13[i]; 
  }



  var FHTML='<div id="js_slide_focus_13" class="slide_focus focus_style1" style="height:160px"><a class="prev"></a><a class="next"></a>';
  
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic13.length;i++)
   {
     if(ALink13.length<(i+1) || ALink13[i]=="")
      {
       ALink13[i]="javascript:void(0)";
      }
     if(AAlts13.length<(i+1))
      {
       AAlts13[i]="";
      }
     if(ATitle13.length<(i+1))
      {
       ATitle13[i]="";
      }
    FHTML+='<li><a href="'+ALink13[i]+'" target="_self" title="'+AAlts13[i]+'"><img src="'+Apic13[i]+'">';
    FHTML+='<em>'+ATitle13[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(function(){Slide_Focus("js_slide_focus_13",0,5,290,160,false);});