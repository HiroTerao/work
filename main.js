const name = document.getElementById('blank')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

//報告年月・氏名未入力の場合はエラー表示
form.addEventListener('submit', (e) => {
  let messages = []
  if (blank.value === '' || blank.value == null) {
    messages.push('Write Here')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

//勤務時間




//交通費の計算
$(document).ready(function () {

  $("#myTable").on('input', '.txtCal', function () {
     var calculated_total_sum = 0;

     $("#myTable .txtCal").each(function () {
         var get_textbox_value = $(this).val();
         if ($.isNumeric(get_textbox_value)) {
            calculated_total_sum += parseFloat(get_textbox_value);
            }
          });
            $("#total_sum_value").html(calculated_total_sum);
     });
});



// 21日の実働時間
function timecalc21() {

  hs21 = parseInt(document.time.sday21h.value);
  ms21 = parseInt(document.time.sday21m.value);
  hf21 = parseInt(document.time.fday21h.value);
  mf21 = parseInt(document.time.fday21m.value);
  hr21 = parseInt(document.time.rday21h.value);
  mr21 = parseInt(document.time.rday21m.value);

  minute = hf21*60 + mf21 - hs21*60 + ms21 -  hr21*60 + mr21;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal21").html("0" + hr + "：" + mina + "0");
  }

// 22日の実働時間
function timecalc22() {

  hs22 = parseInt(document.time.sday22h.value);
  ms22 = parseInt(document.time.sday22m.value);
  hf22 = parseInt(document.time.fday22h.value);
  mf22 = parseInt(document.time.fday22m.value);
  hr22 = parseInt(document.time.rday22h.value);
  mr22 = parseInt(document.time.rday22m.value);

  minute = hf22*60 + mf22 - hs22*60 + ms22 -  hr22*60 + mr22;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal22").html("0" + hr + "：" + mina + "0");
  }

// 24日の実働時間
function timecalc24() {

  hs24 = parseInt(document.time.sday24h.value);
  ms24 = parseInt(document.time.sday24m.value);
  hf24 = parseInt(document.time.fday24h.value);
  mf24 = parseInt(document.time.fday24m.value);
  hr24 = parseInt(document.time.rday24h.value);
  mr24 = parseInt(document.time.rday24m.value);

  minute = hf24*60 + mf24 - hs24*60 + ms24 -  hr24*60 + mr24;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal24").html("0" + hr + "：" + mina + "0");
  }

// 25日の実働時間
function timecalc25() {

  hs25 = parseInt(document.time.sday25h.value);
  ms25 = parseInt(document.time.sday25m.value);
  hf25 = parseInt(document.time.fday25h.value);
  mf25 = parseInt(document.time.fday25m.value);
  hr25 = parseInt(document.time.rday25h.value);
  mr25 = parseInt(document.time.rday25m.value);

  minute = hf25*60 + mf25 - hs25*60 + ms25 -  hr25*60 + mr25;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal25").html("0" + hr + "：" + mina + "0");
  }

// 26日の実働時間
function timecalc26() {

  hs26 = parseInt(document.time.sday26h.value);
  ms26 = parseInt(document.time.sday26m.value);
  hf26 = parseInt(document.time.fday26h.value);
  mf26 = parseInt(document.time.fday26m.value);
  hr26 = parseInt(document.time.rday26h.value);
  mr26 = parseInt(document.time.rday26m.value);

  minute = hf26*60 + mf26 - hs26*60 + ms26 -  hr26*60 + mr26;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal26").html("0" + hr + "：" + mina + "0");
  }

// 27日の実働時間
function timecalc27() {

  hs27 = parseInt(document.time.sday27h.value);
  ms27 = parseInt(document.time.sday27m.value);
  hf27 = parseInt(document.time.fday27h.value);
  mf27 = parseInt(document.time.fday27m.value);
  hr27 = parseInt(document.time.rday27h.value);
  mr27 = parseInt(document.time.rday27m.value);

  minute = hf27*60 + mf27 - hs27*60 + ms27 -  hr27*60 + mr27;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal27").html("0" + hr + "：" + mina + "0");
  }

// 28日の実働時間
function timecalc28() {

  hs28 = parseInt(document.time.sday28h.value);
  ms28 = parseInt(document.time.sday28m.value);
  hf28 = parseInt(document.time.fday28h.value);
  mf28 = parseInt(document.time.fday28m.value);
  hr28 = parseInt(document.time.rday28h.value);
  mr28 = parseInt(document.time.rday28m.value);

  minute = hf28*60 + mf28 - hs28*60 + ms28 -  hr28*60 + mr28;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal28").html("0" + hr + "：" + mina + "0");
  }

// 29日の実働時間
function timecalc29() {

  hs29 = parseInt(document.time.sday29h.value);
  ms29 = parseInt(document.time.sday29m.value);
  hf29 = parseInt(document.time.fday29h.value);
  mf29 = parseInt(document.time.fday29m.value);
  hr29 = parseInt(document.time.rday29h.value);
  mr29 = parseInt(document.time.rday29m.value);

  minute = hf29*60 + mf29 - hs29*60 + ms29 -  hr29*60 + mr29;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal29").html("0" + hr + "：" + mina + "0");
  }

// 30日の実働時間
function timecalc30() {

  hs30 = parseInt(document.time.sday30h.value);
  ms30 = parseInt(document.time.sday30m.value);
  hf30 = parseInt(document.time.fday30h.value);
  mf30 = parseInt(document.time.fday30m.value);
  hr30 = parseInt(document.time.rday30h.value);
  mr30 = parseInt(document.time.rday30m.value);

  minute = hf30*60 + mf30 - hs30*60 + ms30 -  hr30*60 + mr30;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal30").html("0" + hr + "：" + mina + "0");
  }

// 31日の実働時間
function timecalc31() {

  hs31 = parseInt(document.time.sday31h.value);
  ms31 = parseInt(document.time.sday31m.value);
  hf31 = parseInt(document.time.fday31h.value);
  mf31 = parseInt(document.time.fday31m.value);
  hr31 = parseInt(document.time.rday31h.value);
  mr31 = parseInt(document.time.rday31m.value);

  minute = hf31*60 + mf31 - hs31*60 + ms31 -  hr31*60 + mr31;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal31").html("0" + hr + "：" + mina + "0");
  }

// 1日の実働時間
function timecalc1() {

  hs1 = parseInt(document.time.sday1h.value);
  ms1 = parseInt(document.time.sday1m.value);
  hf1 = parseInt(document.time.fday1h.value);
  mf1 = parseInt(document.time.fday1m.value);
  hr1 = parseInt(document.time.rday1h.value);
  mr1 = parseInt(document.time.rday1m.value);

  minute = hf1*60 + mf1 - hs1*60 + ms1 -  hr1*60 + mr1;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal1").html("0" + hr + "：" + mina + "0");
  }

// 2日の実働時間
function timecalc2() {

  hs2 = parseInt(document.time.sday2h.value);
  ms2 = parseInt(document.time.sday2m.value);
  hf2 = parseInt(document.time.fday2h.value);
  mf2 = parseInt(document.time.fday2m.value);
  hr2 = parseInt(document.time.rday2h.value);
  mr2 = parseInt(document.time.rday2m.value);

  minute = hf2*60 + mf2 - hs2*60 + ms2 -  hr2*60 + mr2;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal2").html("0" + hr + "：" + mina + "0");
  }

// 3日の実働時間
function timecalc3() {

  hs3 = parseInt(document.time.sday3h.value);
  ms3 = parseInt(document.time.sday3m.value);
  hf3 = parseInt(document.time.fday3h.value);
  mf3 = parseInt(document.time.fday3m.value);
  hr3 = parseInt(document.time.rday3h.value);
  mr3 = parseInt(document.time.rday3m.value);

  minute = hf3*60 + mf3 - hs3*60 + ms3 -  hr3*60 + mr3;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal3").html("0" + hr + "：" + mina + "0");
  }

// 4日の実働時間
function timecalc4() {

  hs4 = parseInt(document.time.sday4h.value);
  ms4 = parseInt(document.time.sday4m.value);
  hf4 = parseInt(document.time.fday4h.value);
  mf4 = parseInt(document.time.fday4m.value);
  hr4 = parseInt(document.time.rday4h.value);
  mr4 = parseInt(document.time.rday4m.value);

  minute = hf4*60 + mf4 - hs4*60 + ms4 -  hr4*60 + mr4;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal4").html("0" + hr + "：" + mina + "0");
  }

// 5日の実働時間
function timecalc5() {

  hs5 = parseInt(document.time.sday5h.value);
  ms5 = parseInt(document.time.sday5m.value);
  hf5 = parseInt(document.time.fday5h.value);
  mf5 = parseInt(document.time.fday5m.value);
  hr5 = parseInt(document.time.rday5h.value);
  mr5 = parseInt(document.time.rday5m.value);

  minute = hf5*60 + mf5 - hs5*60 + ms5 -  hr5*60 + mr5;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal5").html("0" + hr + "：" + mina + "0");
  }

// 6日の実働時間
function timecalc6() {

  hs6 = parseInt(document.time.sday6h.value);
  ms6 = parseInt(document.time.sday6m.value);
  hf6 = parseInt(document.time.fday6h.value);
  mf6 = parseInt(document.time.fday6m.value);
  hr6 = parseInt(document.time.rday6h.value);
  mr6 = parseInt(document.time.rday6m.value);

  minute = hf6*60 + mf6 - hs6*60 + ms6 -  hr6*60 + mr6;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal6").html("0" + hr + "：" + mina + "0");
  }

// 7日の実働時間
function timecalc7() {

  hs7 = parseInt(document.time.sday7h.value);
  ms7 = parseInt(document.time.sday7m.value);
  hf7 = parseInt(document.time.fday7h.value);
  mf7 = parseInt(document.time.fday7m.value);
  hr7 = parseInt(document.time.rday7h.value);
  mr7 = parseInt(document.time.rday7m.value);

  minute = hf7*60 + mf7 - hs7*60 + ms7 -  hr7*60 + mr7;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal7").html("0" + hr + "：" + mina + "0");
  }

// 8日の実働時間
function timecalc8() {

  hs8 = parseInt(document.time.sday8h.value);
  ms8 = parseInt(document.time.sday8m.value);
  hf8 = parseInt(document.time.fday8h.value);
  mf8 = parseInt(document.time.fday8m.value);
  hr8 = parseInt(document.time.rday8h.value);
  mr8 = parseInt(document.time.rday8m.value);

  minute = hf8*60 + mf8 - hs8*60 + ms8 -  hr8*60 + mr8;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal8").html("0" + hr + "：" + mina + "0");
  }

// 9日の実働時間
function timecalc9() {

  hs9 = parseInt(document.time.sday9h.value);
  ms9 = parseInt(document.time.sday9m.value);
  hf9 = parseInt(document.time.fday9h.value);
  mf9 = parseInt(document.time.fday9m.value);
  hr9 = parseInt(document.time.rday9h.value);
  mr9 = parseInt(document.time.rday9m.value);

  minute = hf9*60 + mf9 - hs9*60 + ms9 -  hr9*60 + mr9;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal9").html("0" + hr + "：" + mina + "0");
  }

// 10日の実働時間
function timecalc10() {

  hs10 = parseInt(document.time.sday10h.value);
  ms10 = parseInt(document.time.sday10m.value);
  hf10 = parseInt(document.time.fday10h.value);
  mf10 = parseInt(document.time.fday10m.value);
  hr10 = parseInt(document.time.rday10h.value);
  mr10 = parseInt(document.time.rday10m.value);

  minute = hf10*60 + mf10 - hs10*60 + ms10 -  hr10*60 + mr10;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal10").html("0" + hr + "：" + mina + "0");
  }

// 10日の実働時間
function timecalc10() {

  hs10 = parseInt(document.time.sday10h.value);
  ms10 = parseInt(document.time.sday10m.value);
  hf10 = parseInt(document.time.fday10h.value);
  mf10 = parseInt(document.time.fday10m.value);
  hr10 = parseInt(document.time.rday10h.value);
  mr10 = parseInt(document.time.rday10m.value);

  minute = hf10*60 + mf10 - hs10*60 + ms10 -  hr10*60 + mr10;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal10").html("0" + hr + "：" + mina + "0");
  }

// 11日の実働時間
function timecalc11() {

  hs11 = parseInt(document.time.sday11h.value);
  ms11 = parseInt(document.time.sday11m.value);
  hf11 = parseInt(document.time.fday11h.value);
  mf11 = parseInt(document.time.fday11m.value);
  hr11 = parseInt(document.time.rday11h.value);
  mr11 = parseInt(document.time.rday11m.value);

  minute = hf11*60 + mf11 - hs11*60 + ms11 -  hr11*60 + mr11;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal11").html("0" + hr + "：" + mina + "0");
  }

// 12日の実働時間
function timecalc12() {

  hs12 = parseInt(document.time.sday12h.value);
  ms12 = parseInt(document.time.sday12m.value);
  hf12 = parseInt(document.time.fday12h.value);
  mf12 = parseInt(document.time.fday12m.value);
  hr12 = parseInt(document.time.rday12h.value);
  mr12 = parseInt(document.time.rday12m.value);

  minute = hf12*60 + mf12 - hs12*60 + ms12 -  hr12*60 + mr12;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal12").html("0" + hr + "：" + mina + "0");
  }

// 13日の実働時間
function timecalc13() {

  hs13 = parseInt(document.time.sday13h.value);
  ms13 = parseInt(document.time.sday13m.value);
  hf13 = parseInt(document.time.fday13h.value);
  mf13 = parseInt(document.time.fday13m.value);
  hr13 = parseInt(document.time.rday13h.value);
  mr13 = parseInt(document.time.rday13m.value);

  minute = hf13*60 + mf13 - hs13*60 + ms13 -  hr13*60 + mr13;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal13").html("0" + hr + "：" + mina + "0");
  }

// 14日の実働時間
function timecalc14() {

  hs14 = parseInt(document.time.sday14h.value);
  ms14 = parseInt(document.time.sday14m.value);
  hf14 = parseInt(document.time.fday14h.value);
  mf14 = parseInt(document.time.fday14m.value);
  hr14 = parseInt(document.time.rday14h.value);
  mr14 = parseInt(document.time.rday14m.value);

  minute = hf14*60 + mf14 - hs14*60 + ms14 -  hr14*60 + mr14;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal14").html("0" + hr + "：" + mina + "0");
  }

// 15日の実働時間
function timecalc15() {

  hs15 = parseInt(document.time.sday15h.value);
  ms15 = parseInt(document.time.sday15m.value);
  hf15 = parseInt(document.time.fday15h.value);
  mf15 = parseInt(document.time.fday15m.value);
  hr15 = parseInt(document.time.rday15h.value);
  mr15 = parseInt(document.time.rday15m.value);

  minute = hf15*60 + mf15 - hs15*60 + ms15 -  hr15*60 + mr15;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal15").html("0" + hr + "：" + mina + "0");
  }

// 16日の実働時間
function timecalc16() {

  hs16 = parseInt(document.time.sday16h.value);
  ms16 = parseInt(document.time.sday16m.value);
  hf16 = parseInt(document.time.fday16h.value);
  mf16 = parseInt(document.time.fday16m.value);
  hr16 = parseInt(document.time.rday16h.value);
  mr16 = parseInt(document.time.rday16m.value);

  minute = hf16*60 + mf16 - hs16*60 + ms16 -  hr16*60 + mr16;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal16").html("0" + hr + "：" + mina + "0");
  }

// 17日の実働時間
function timecalc17() {

  hs17 = parseInt(document.time.sday17h.value);
  ms17 = parseInt(document.time.sday17m.value);
  hf17 = parseInt(document.time.fday17h.value);
  mf17 = parseInt(document.time.fday17m.value);
  hr17 = parseInt(document.time.rday17h.value);
  mr17 = parseInt(document.time.rday17m.value);

  minute = hf17*60 + mf17 - hs17*60 + ms17 -  hr17*60 + mr17;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal17").html("0" + hr + "：" + mina + "0");
  }

// 18日の実働時間
function timecalc18() {

  hs18 = parseInt(document.time.sday18h.value);
  ms18 = parseInt(document.time.sday18m.value);
  hf18 = parseInt(document.time.fday18h.value);
  mf18 = parseInt(document.time.fday18m.value);
  hr18 = parseInt(document.time.rday18h.value);
  mr18 = parseInt(document.time.rday18m.value);

  minute = hf18*60 + mf18 - hs18*60 + ms18 -  hr18*60 + mr18;

  hr = Math.floor(minute / 60);

  mina = minute - hr * 60;
  $("#workCal18").html("0" + hr + "：" + mina + "0");
  }

  // 19日の実働時間
  function timecalc19() {

    hs19 = parseInt(document.time.sday19h.value);
    ms19 = parseInt(document.time.sday19m.value);
    hf19 = parseInt(document.time.fday19h.value);
    mf19 = parseInt(document.time.fday19m.value);
    hr19 = parseInt(document.time.rday19h.value);
    mr19 = parseInt(document.time.rday19m.value);

    minute = hf19*60 + mf19 - hs19*60 + ms19 -  hr19*60 + mr19;

    hr = Math.floor(minute / 60);

    mina = minute - hr * 60;
    $("#workCal19").html("0" + hr + "：" + mina + "0");
    }

  // 20日の実働時間
  function timecalc20() {

    hs20 = parseInt(document.time.sday20h.value);
    ms20 = parseInt(document.time.sday20m.value);
    hf20 = parseInt(document.time.fday20h.value);
    mf20 = parseInt(document.time.fday20m.value);
    hr20 = parseInt(document.time.rday20h.value);
    mr20 = parseInt(document.time.rday20m.value);

    minute = hf20*60 + mf20 - hs20*60 + ms20 -  hr20*60 + mr20;

    hr = Math.floor(minute / 60);

    mina = minute - hr * 60;
    $("#workCal20").html("0" + hr + "：" + mina + "0");
}