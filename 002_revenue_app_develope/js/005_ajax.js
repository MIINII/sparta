function q1() {
  // 여기에 코드를 입력하세요
  $.ajax({
    type: 'GET',
    url: 'http://spartacodingclub.shop/sparta_api/rtan',
    data: {},
    success: function (response) {
      let url = response['url'];
      let msg = response['msg'];

      $('#img-rtan').attr('src', url);
      $('#text-rtan').text(msg);
    },
  });
}
