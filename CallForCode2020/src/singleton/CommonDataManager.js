import * as React from 'react';
import {AsyncStorage , Image} from 'react-native';

export default class CommonDataManager {

    static myInstance = null;

    _isAutoLogin = false;
    _id = "";
    _rev = "";
    _password = "";
    _path = "";
    _point = "";
    _maxPoint = "";
    _name = "";
    _history = "";
    
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

    async clearCommonData(){
      this._isAutoLogin = "false";
      this._id = "";
      this._rev = "";
      this._password = "";
      this._path = "";
      this._point = "";
      this._maxPoint = "";
      this._name = "";
      this._history = "";
    }

    async initManager(){
            AsyncStorage.multiGet(['isAuto', 'id', 'password']).then((data) => {
                if(data[0][1] != null && data[1][1] != null && data[2][1] != null) {
                    var jsonData = {id:data[1][1], password : data[2][1] };

                    //
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
                      return;
                    }
                    else{
                      this._isAutoLogin = "true";
                      this._id = json._id;
                      this._rev = json._rev;
                      this._name = json.name;
                      this._password = json.password;
                      this._path = json.path;
                      if(json.path.split('/').pop() == "basic.jpg")
                        this._path  = "https://getstartednode-balanced-quokka-og.mybluemix.net/img/profile/basic.jpg";
                      else 
                        this._path  = "https://getstartednode-balanced-quokka-og.mybluemix.net/img/" + json.path;

                        console.log( this._path );
                      this._point = json.point;
                      this._maxPoint = json.maxPoint;
                      this._history =json.hispath == " " ? json.path : json.hispath;
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