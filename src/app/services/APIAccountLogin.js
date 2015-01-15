/**
 * Created by apple on 15/1/13.
 */

var APIAccountLogin;

APIAccountLogin = {

    load:function (data) {

        var promise,
            data = data;

        promise = $.ajax({
            url: './app/data/AccountLoginData.json',
            data: data,
            dataType:'json',
            type:'GET'
        });

        return promise;
    }
};

module.exports = APIAccountLogin;
