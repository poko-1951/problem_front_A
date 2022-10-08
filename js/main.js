$(function () {
  $('#search').click(function () {
    $.ajax({
      url: "https://catfact.ninja/fact",
      type: "GET",
      dataType: "json",
    })
      .done(function (data) {
        // success
        //取得jsonデータ
        var data_stringify = JSON.stringify(data);
        var data_json = JSON.parse(data_stringify);
        //jsonデータから各データを取得
        var data_id = data_json.fact;
        //出力
        $("#fact").text(data_id);
      })
      .fail(function (data) {
        // error
        console.log("error");
      });
  });
});