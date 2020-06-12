import {AsyncStorage} from 'react-native';

export default class CommonDataManager {

    static myInstance = null;

    _isAutoLogin = false;
    _id = "";
    _password = "";
    _path = "";
    _point = "";
    _maxPoint = "";
    _name = "";
    
    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
            this.myInstance.initManager();
        }
        return this.myInstance;
    }

    async initManager(){
            AsyncStorage.multiGet(['isAuto', 'id', 'password']).then((data) => {
                if(data[0][1] != null && data[1][1] != null && data[2][1] != null) {
               
                    var jsonData = {id:data[1][1], password : data[2][1] };
                fetch('https://getstartednode-balanced-quokka-og.mybluemix.net/api/login', {
                    method: 'post',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData),
                  }).then((response) => response.json())
                  .then((json) => {   
                   
                    if(json == "Fail"){
                      this._isAutoLogin = "false";
                    }
                    else{
                      this._isAutoLogin = "true";
                      this._id = json._id;
                      this._name = json.name;
                      this._password = json.password;
                      this._path = json.path;
                      this._point = json.point;
                      this._maxPoint = json.maxPoint;
                      alert( this._maxPoint);
                    }
                  })
              }

            });
    }

    getUserID() {
        return this._userID;
    }

    setUserID(id) {
        this._userID = id;
    }
}