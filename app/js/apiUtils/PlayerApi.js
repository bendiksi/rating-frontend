import $ from 'jquery';

class PlayerApi {
  getAll(callback) {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        callback(null, JSON.parse(xmlHttp.responseText));
      }
    };

    let asynchronous = true;
    xmlHttp.open("GET", "/players", asynchronous);
    xmlHttp.send(null);
  }

  create(name, callback) {
    $.ajax({
      type: "POST",
      url: "/addplayer",
      data: {name : name.name},
      success: (data) => {
        location.href = "/";
      },
      error: (err) => {
        console.log(err);
      },
      statusCode: {
        406: (msg) => {
          msg = JSON.parse(msg.responseJSON.error);
        }
      }
    });
  }
}

let PlayerApiSingleton = new PlayerApi();

export default PlayerApiSingleton;
