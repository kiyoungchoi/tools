// 백에 관련된 작업일땐
// c에서 잘 넘겨받고 있는지, 제대로 뿌려주고 있는지 확인하기 
// -> m에서 뭘 넘겨주고 있는지, 필요한걸 넘겨주고 있는지.(비슷한 m이 사용되고 있는걸 찾아보아라. for문을 돌려야 하는 m도 있어서 필히 확인 해야한다.)
// (그리고 각 columns의 이름에 대한 이해가 필요해서, 기준을 잡을 수 있다. 그러니, 이부분에 대해 잘 모를시에는 얼른 물어보기//////아니면 다른곳에서 사용되고 있는 기준을 찾아보기!!!!!)
// -> v에서 변수 찍어보고(내용이 빈 변수면, 위치를 잘못 잡은 c거나, v로 넘어오는 변수명이랑 일치 하지않는 변수일수 있다.), 필요한 배열변수를 사용해서 조건문 만들어서 사용하기.

$array['ing'] = $career[0]['work_name']; //중간에 변수 위치 '0'의 위치를 기억하라. 
$arrayName['point'] = 1;
echo json_encode($arrayName); 
// 여기까지 point가 1로 넘겨서, if(data.point == 1)로 데이터를 넘겨받거나
}else{
$arrayName['point'] = 0;
// 여기로 point가 0으로 넘겨서, if(data.point == 0)로 빈 데이터를 넘겨 받을수 있다. 
}

