/**
 * Created by Young on 2015/5/5.
 * 进行游戏场景
 */
var PlayGameLayer = cc.Layer.extend({
    ctor:function () {
        //super init
        this._super();

        this.Background(); //添加背景

        return true;
    },

    //背景
    Background:function(){
        //主背景
        var Background = new cc.Sprite(res.GameMenuBG_png);
        Background.attr({
            x : GC.w_2, //定位
            y : GC.h_2,
            anchorX: 0.5, //中心点
            anchorY: 0.5,
            scale : 0.5 //缩放
        });
        this.addChild(Background);
        //次背景
        var BackgroundC = new cc.Sprite(res.GameMenuTop_png);
        BackgroundC.attr({
            x : GC.w / 2,
            y : GC.h - BackgroundC.height / 4,
            anchorX: 0.5, //中心点
            anchorY: 0.5,
            scale : 0.5 //缩放
        });
        this.addChild(BackgroundC);
    }

});


var PlayGameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new PlayGameLayer();
        this.addChild(layer);
    }
});