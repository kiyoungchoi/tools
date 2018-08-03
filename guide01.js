// 삼항연산자를 헷갈릴까봐.
//  보통은 
a == b? a:b 
// 라고 쓰이지만, 헷갈리게 
a = ab? a:b
// 처럼 a라는 변수를 선언하면서, ab가 스스로 true이거나, false임을 판별하는 내용이다.

// 값 뽑아내서, 활용하기
// 특별 구간에 존재하는 값을 잡고 싶을땐,
var something = $('#someDiv').val();
// 라고 잡으면 된다. 그리고 나서, 추가적으로 something이라는 변수를 활용하면 된다.
something.replace(/-/g, "");
something.replace( /\r?\n/g, "\r\n" );
// 이라고하면, 변수를 잡고나서, 그걸 조작 변화하는것이다. 정규식에 대해 잘 알아야, 조작을 더 잘 할 수 있을것이다. 
$('#someDiv').val('');
// 라고 쓰이면, 특정 구간을 빈간을 잡는 것이다. 
$('#someDiv').val(data.somedata);
// 처럼 ajax가져온 값을 넣어줄수 도 있다. 
parseInt()  // ex) parseInt('199203') => 199203 으로 만들어, 비교 가능
// 를 사용하여, 문자열로 가져와서, 변환시킨 String들을 number로 바꿔주고, 그리고 비교에 사용할 수 있는 data로 만들어준것이다. 
var a = 0;
$('#someDiv').on('ifToggled', function(event){
	ea = ea?0:1;
	$('#theToggleBtn').toggle();
});
// 방식으로 코드를 만들어서, 작동할때마다 다른 변수로 작동을 기록할 수 있다.
$('#someDiv').val().substr(0,7)
// 처럼 활용 할수 있다. substr(시작, 길이)을 잘 활용하자.

// 재직중일땐, icheck('check')로 만들고, 
var end_value = 'some date';
$('#theEndDateDiv').hide();
// 처럼 가짜값으로 넣어서 값인식만 하도록 넣어 두었다. 