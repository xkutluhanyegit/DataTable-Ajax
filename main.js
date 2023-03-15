var _url2 = 'https://localhost:7124/bolumler/PersonelDetailDtoGetAllJson?shiftId='+RadioBtnValueSecond+'&depId='+DepId+'';

            alert(_url2);
            $("#deneme").DataTable({
              "bDestroy": true,
              ajax:{
                url:_url2,
                dataSrc:"",
                
              },  
              columns:[
                {data:"name"},
                {data:"surname"}
              ]
            });

            