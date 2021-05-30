document.addEventListener("DOMContentLoaded", () => {
        var overlayOn = false, // 지도 위에 로드뷰 오버레이가 추가된 상태를 가지고 있을 변수
            container = document.getElementById('container'), // 지도와 로드뷰를 감싸고 있는 div 입니다
            mapWrapper = document.getElementById('mapWrapper'), // 지도를 감싸고 있는 div 입니다
            mapContainer = document.getElementById('map'), // 지도를 표시할 div 입니다
            rvContainer = document.getElementById('roadview'); //로드뷰를 표시할 div 입니다

        var mapCenter = new kakao.maps.LatLng(35.14751856030008,
                  129.03377485363652), // 지도의 중심좌표
            mapOption = {
                center: mapCenter, // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 로드뷰 객체를 생성합니다
        var rv = new kakao.maps.Roadview(rvContainer);

        // 좌표로부터 로드뷰 파노라마 ID를 가져올 로드뷰 클라이언트 객체를 생성합니다
        var rvClient = new kakao.maps.RoadviewClient();

        // 로드뷰에 좌표가 바뀌었을 때 발생하는 이벤트를 등록합니다
        kakao.maps.event.addListener(rv, 'position_changed', function() {

            // 현재 로드뷰의 위치 좌표를 얻어옵니다
            var rvPosition = rv.getPosition();

            // 지도의 중심을 현재 로드뷰의 위치로 설정합니다
            map.setCenter(rvPosition);

            // 지도 위에 로드뷰 도로 오버레이가 추가된 상태이면
            if(overlayOn) {
                // 마커의 위치를 현재 로드뷰의 위치로 설정합니다
                marker.setPosition(rvPosition);
            }
        });


    var startDragSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png', // 출발 마커의 드래그 이미지 주소입니다
      startDragSize = new kakao.maps.Size(50, 64), // 출발 마커의 드래그 이미지 크기입니다
      startDragOption = {
        offset: new kakao.maps.Point(15, 54), // 출발 마커의 드래그 이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
      };

        var startDragImage = new kakao.maps.MarkerImage(
                startDragSrc,
                startDragSize,
                startDragOption
              );

              // 출발 마커가 표시될 위치입니다
              var startPosition = new kakao.maps.LatLng(
                35.14751856030008,
                129.03377485363652
              );
              var startSrc =
                  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png', // 출발 마커이미지의 주소입니다
                startSize = new kakao.maps.Size(50, 45), // 출발 마커이미지의 크기입니다
                startOption = {
                  offset: new kakao.maps.Point(15, 43), // 출발 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
                };
              var startImage = new kakao.maps.MarkerImage(
                startSrc,
                startSize,
                startOption
              );
              // 출발 마커를 생성합니다
              var startMarker = new kakao.maps.Marker({
                draggable: false,
                // 출발 마커가 드래그 가능하도록 설정합니다
                image: startImage,
                map: map,
                // 출발 마커가 지도 위에 표시되도록 설정합니다
                position: startPosition, // 출발 마커이미지를 설정합니다
              });

              var arriveSrc =
                  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png', // 도착 마커이미지 주소입니다
                arriveSize = new kakao.maps.Size(50, 45), // 도착 마커이미지의 크기입니다
                arriveOption = {
                  offset: new kakao.maps.Point(15, 43), // 도착 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
                };

              // 도착 마커 이미지를 생성합니다
              var arriveImage = new kakao.maps.MarkerImage(
                arriveSrc,
                arriveSize,
                arriveOption
              );

              // 도착 마커가 표시될 위치입니다
              var arrivePosition = new kakao.maps.LatLng(
                35.14591432156683,
                129.03619802486574
              );

              // 도착 마커를 생성합니다
              var arriveMarker = new kakao.maps.Marker({
                draggable: false,
                // 도착 마커가 드래그 가능하도록 설정합니다
                image: arriveImage,

                map: map,
                // 도착 마커가 지도 위에 표시되도록 설정합니다
                position: arrivePosition, // 도착 마커이미지를 설정합니다
              });
        // 마커 이미지를 생성합니다
        var markImage = new kakao.maps.MarkerImage(
            'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
            new kakao.maps.Size(26, 46),
            {
                // 스프라이트 이미지를 사용합니다.
                // 스프라이트 이미지 전체의 크기를 지정하고
                spriteSize: new kakao.maps.Size(1666, 168),
                // 사용하고 싶은 영역의 좌상단 좌표를 입력합니다.
                // background-position으로 지정하는 값이며 부호는 반대입니다.
                spriteOrigin: new kakao.maps.Point(705, 114),
                offset: new kakao.maps.Point(13, 46)
            }
        );

        // 드래그가 가능한 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            image : markImage,
            position: mapCenter,
            draggable: true
        });

        // 마커에 dragend 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'dragend', function(mouseEvent) {

            // 현재 마커가 놓인 자리의 좌표입니다
            var position = marker.getPosition();

            // 마커가 놓인 위치를 기준으로 로드뷰를 설정합니다
            toggleRoadview(position);
        });

        //지도에 클릭 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent){

            // 지도 위에 로드뷰 도로 오버레이가 추가된 상태가 아니면 클릭이벤트를 무시합니다
            if(!overlayOn) {
                return;
            }

            // 클릭한 위치의 좌표입니다
            var position = mouseEvent.latLng;

            // 마커를 클릭한 위치로 옮깁니다
            marker.setPosition(position);

            // 클락한 위치를 기준으로 로드뷰를 설정합니다
            toggleRoadview(position);
        });

        // 전달받은 좌표(position)에 가까운 로드뷰의 파노라마 ID를 추출하여
        // 로드뷰를 설정하는 함수입니다
        function toggleRoadview(position){
            rvClient.getNearestPanoId(position, 50, function(panoId) {
                // 파노라마 ID가 null 이면 로드뷰를 숨깁니다
                if (panoId === null) {
                    toggleMapWrapper(true, position);
                } else {
                 toggleMapWrapper(false, position);

                    // panoId로 로드뷰를 설정합니다
                    rv.setPanoId(panoId, position);
                }
            });
        }

        // 지도를 감싸고 있는 div의 크기를 조정하는 함수입니다
        function toggleMapWrapper(active, position) {
            if (active) {

                // 지도를 감싸고 있는 div의 너비가 100%가 되도록 class를 변경합니다
                container.className = '';

                // 지도의 크기가 변경되었기 때문에 relayout 함수를 호출합니다
                map.relayout();

                // 지도의 너비가 변경될 때 지도중심을 입력받은 위치(position)로 설정합니다
                map.setCenter(position);
            } else {

                // 지도만 보여지고 있는 상태이면 지도의 너비가 50%가 되도록 class를 변경하여
                // 로드뷰가 함께 표시되게 합니다
                if (container.className.indexOf('view_roadview') === -1) {
                    container.className = 'view_roadview';

                    // 지도의 크기가 변경되었기 때문에 relayout 함수를 호출합니다
                    map.relayout();

                    // 지도의 너비가 변경될 때 지도중심을 입력받은 위치(position)로 설정합니다
                    map.setCenter(position);
                }
            }
        }

        // 지도 위의 로드뷰 도로 오버레이를 추가,제거하는 함수입니다
        function toggleOverlay(active) {
            if (active) {
                overlayOn = true;

                // 지도 위에 로드뷰 도로 오버레이를 추가합니다
                map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

                // 지도 위에 마커를 표시합니다
                marker.setMap(map);

                // 마커의 위치를 지도 중심으로 설정합니다
                marker.setPosition(map.getCenter());

                // 로드뷰의 위치를 지도 중심으로 설정합니다
                toggleRoadview(map.getCenter());
            } else {
                overlayOn = false;

                // 지도 위의 로드뷰 도로 오버레이를 제거합니다
                map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

                // 지도 위의 마커를 제거합니다
                marker.setMap(null);
            }
        }

        // 지도 위의 로드뷰 버튼을 눌렀을 때 호출되는 함수입니다
        function setRoadviewRoad() {
            var control = document.getElementById('roadviewControl');

            // 버튼이 눌린 상태가 아니면
            if (control.className.indexOf('active') === -1) {
                control.className = 'active';

                // 로드뷰 도로 오버레이가 보이게 합니다
                toggleOverlay(true);
            } else {
                control.className = '';

                // 로드뷰 도로 오버레이를 제거합니다
                toggleOverlay(false);
            }
        }

        // 로드뷰에서 X버튼을 눌렀을 때 로드뷰를 지도 뒤로 숨기는 함수입니다
        function closeRoadview() {
            var position = marker.getPosition();
            toggleMapWrapper(true, position);
        }


        document.querySelector("#close").addEventListener("click", closeRoadview)
        document.querySelector("#roadviewControl").addEventListener("click", setRoadviewRoad)
})
