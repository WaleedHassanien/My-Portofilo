var progress = document.querySelector('.progress')
var barSkillCss = document.querySelector('.ManuPrograssCss');
var barSkillHtml = document.querySelector('.ManuPrograssHtml');
var barSkillJs = document.querySelector('.ManuPrograssJs');
var barSkillEs6 = document.querySelector('.ManuPrograssEs6');
var barSkillan = document.querySelector('.ManuPrograssan');
var barSkillcsharp = document.querySelector('.ManuPrograsscsharp');
var barSkillsql = document.querySelector('.ManuPrograsssql');


var barSkillboot = document.querySelector('.ManuPrograssboot');
var barSkillmvc = document.querySelector('.ManuPrograssmvcs');
var barSkillcore = document.querySelector('.ManuPrograsscore');
var barSkillapi = document.querySelector('.ManuPrograssapi');
var barSkillf = document.querySelector('.ManuPrograssf');









var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var widthCss = 1;
    var widthHtml=1;
    var widthjs=1;
    var widthEs6=1;
    var widthan=1;
    var widthcsharp=1;
    var widthsql=1;
    var widthboot=1;
    var widthmvc=1;
    var widthcore=1;
    var widthapi=1;
    var widthf=1;





    var id = setInterval(frameCss, 20);
    var idHtml = setInterval(frameHtml, 15);
    var idjs= setInterval(framejs, 23);
    var idEs6= setInterval(frameEs6, 17);
    var idan= setInterval(framean, 19);
    var idcsharp = setInterval(framecsharp, 22);
    var idsql = setInterval(framesql, 15);

    var idboot= setInterval(frameboot, 23);
    var idmvc= setInterval(framemvc, 17);
    var idcore= setInterval(framecore, 19);
    var idapi = setInterval(frameapi, 22);
    var idf = setInterval(framef, 15);




    function frameCss() {
      if (widthCss >= 95) {
        clearInterval(id);
        i = 0;
      } else {
        widthCss++;
        barSkillCss.style.width = widthCss + "%";
      }
    }
    function frameHtml() {
        if (widthHtml >= 97) {
          clearInterval(idHtml);
          i = 0;
        } else {
            widthHtml++;
          barSkillHtml.style.width = widthHtml + "%";
        }
      }
      function framejs() {
        if (widthjs >= 90) {
          clearInterval(idjs);
          i = 0;
        } else {
            widthjs++;
            barSkillJs.style.width = widthjs + "%";
        }
      }

      function frameEs6() {
        if (widthEs6 >= 85) {
          clearInterval(idEs6);
          i = 0;
        } else {
            widthEs6++;
            barSkillEs6.style.width = widthEs6 + "%";
        }
      }

      function framean() {
        if (widthan >= 88) {
          clearInterval(idan);
          i = 0;
        } else {
            widthan++;
            barSkillan.style.width = widthan + "%";
        }
      }
      
      function framecsharp() {
        if (widthcsharp >= 94) {
          clearInterval(idcsharp);
          i = 0;
        } else {
            widthcsharp++;
            barSkillcsharp.style.width = widthcsharp + "%";
        }
      }

          
      function framesql() {
        if (widthsql>= 89) {
          clearInterval(idsql);
          i = 0;
        } else {
            widthsql++;
            barSkillsql.style.width = widthsql + "%";
        }
      }
      function frameboot() {
        if (widthboot>= 93) {
          clearInterval(idboot);
          i = 0;
        } else {
            widthboot++;
            barSkillboot.style.width = widthboot + "%";
        }
      }
      function framemvc() {
        if (widthmvc >= 95) {
          clearInterval(idmvc);
          i = 0;
        } else {
          widthmvc++;
          barSkillmvc.style.width = widthmvc + "%";
        }
      }
  }
  function framecore() {
    if (widthcore >= 75) {
      clearInterval(idcore);
      i = 0;
    } else {
        widthcore++;
        barSkillcore.style.width = widthcore + "%";
    }
  }
  function frameapi() {
    if (widthapi >= 88) {
      clearInterval(idapi);
      i = 0;
    } else {
        widthapi++;
        barSkillapi.style.width = widthapi + "%";
    }
  }
  function framef() {
    if (widthf >= 85) {
      clearInterval(idf);
      i = 0;
    } else {
        widthf++;
        barSkillf.style.width = widthf + "%";
    }
  }
}
var all=document.querySelector('.active')
var filterbtn=document.querySelector('.filterBtn').children
var rowfilter=document.querySelector('.rowfilter').children

for(let i=0 ;i<filterbtn.length;i++)
{
  filterbtn[i].addEventListener('click',function(){
    for(let j=0;j<filterbtn.length;j++){
      filterbtn[j].classList.remove("active")
    }
    this.classList.add("active");
    const target=this.getAttribute("data-target");
    for(let k=0;k<rowfilter.length;k++)
    {
      rowfilter[k].style.display="none";
      if(rowfilter[k].getAttribute("data-id")==target)
      rowfilter[k].style.display="block";
      if(target=="all")
      {
        rowfilter[k].style.display="block";
  
      }
     
    }
  

  })
}



