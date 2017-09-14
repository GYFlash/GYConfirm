/**
 * Created by GYFlasher on 2017-09-14.
 */
var GYConfirm = {
    show:function (titleText,messageText,array,callback,type) {
        // 创建div
        var cover = document.createElement("div");
        var confirm = document.createElement("div");
        var title = document.createElement("p");
        var message = document.createElement("small");
        var btnGroup = document.createElement("div");
        // 设置内容
        title.innerHTML = titleText + "";
        message.innerHTML = messageText + "";
        // 设置style 横向排列区分iOS 和安卓 ，竖向排列不区分
        GYConfirm.setStyles(cover,{
            width:"4.14rem",
            height:"7.36rem",
            backgroundColor:"rgba(0,0,0,0.2)",
            position:"fixed",
            top:"0",
            left:"0",
            zIndex:"9999999",
            opacity:"0"
        });
        setTimeout(function () {
            GYConfirm.setStyles(cover,{
                opacity:"1.0",
                transition:"opacity 0.1s"
            });
        },1);
        if (type == "H") {
            if (GYConfirm.isIos()){ // iOS 布局
                GYConfirm.setStyles(confirm,{
                    width:"3.5rem",
                    minHeight:"1.75rem",
                    backgroundColor:"rgba(255,255,255,1.0)",
                    marginLeft:"0.32rem",
                    marginTop:"2.0rem",
                    borderRadius:"0.2rem",
                    transform:"scale(1.2,1.2)",
                    position:"relative",
                    overflow:"hidden"
                });
                setTimeout(function () {
                    GYConfirm.setStyles(confirm,{
                        transform:"scale(1,1)",
                        transition:"transform 0.3s"
                    });

                },1);
                GYConfirm.setStyles(title,{
                    width:"3.5rem",
                    height:"0.6rem",
                    color:"#000000",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign:"center",
                    lineHeight:"0.8rem",
                    fontSize:"0.2rem"
                });
                GYConfirm.setStyles(message,{
                    width:"3.3rem",
                    lineHeight:"0.2rem",
                    marginLeft:"0.1rem",
                    display:"inline-block",
                    textAlign:"center",
                    color:"rgba(0,0,0,0.8)",
                    marginBottom:"0.6rem"
                });
                GYConfirm.setStyles(btnGroup,{
                    width:"3.5rem",
                    height:"0.5rem",
                    position:"absolute",
                    bottom:"0",
                    left:"0",
                    borderTop:"0.01rem solid gainsboro",
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "nowrap"
                });

                for(var i = 0; i < array.length; i++) {
                    var btn = document.createElement("div");
                    btn.innerHTML = array[i];
                    btn.href = i;
                    btn.onclick = function () {
                        callback(this.href);
                        document.body.removeChild(cover);
                    };
                    GYConfirm.setStyles(btn,{
                        flex:"1",
                        height:"0.5rem",
                        lineHeight:"0.5rem",
                        borderRight:"0.01rem solid gainsboro",
                        textAlign:"center",
                        fontSize:"0.18rem",
                        color:"rgb(33,144,243)",
                        backgroundColor:"white"
                    });
                    if (i === array.length - 1) {
                        btn.style.borderRight = "none";
                    }
                    btnGroup.appendChild(btn);
                }
            }else {
                // Android 布局 (非iOS)
                GYConfirm.setStyles(confirm,{
                    width:"3.94rem",
                    minHeight:"1.75rem",
                    backgroundColor:"rgba(255,255,255,1.0)",
                    marginLeft:"0.1rem",
                    marginTop:"2.0rem",
                    borderRadius:"0rem",
                    position:"relative",
                    overflow:"hidden",
                    boxShadow:"0 0 0.1rem 0 rgba(0,0,0,0.5)",
                    transform:"scale(0.8,0.8)"
                });
                setTimeout(function () {
                    GYConfirm.setStyles(confirm,{
                        transform:"scale(1,1)",
                        transition:"transform 0.1s"
                    });
                },1);
                GYConfirm.setStyles(title,{
                    width:"3.54rem",
                    height:"0.6rem",
                    color:"#000000",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign:"left",
                    lineHeight:"0.8rem",
                    fontSize:"0.2rem",
                    marginLeft:"0.2rem"
                });
                GYConfirm.setStyles(message,{
                    width:"3.54rem",
                    lineHeight:"0.2rem",
                    marginLeft:"0.2rem",
                    display:"inline-block",
                    textAlign:"left",
                    color:"rgba(0,0,0,0.8)",
                    marginBottom:"0.6rem",
                });
                GYConfirm.setStyles(btnGroup,{
                    width:"3.94rem",
                    height:"0.5rem",
                    position:"absolute",
                    bottom:"0",
                    left:"0",
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexWrap: "nowrap",
                });
                for(var i = 0; i < array.length; i++) {
                    var btn = document.createElement("div");
                    btn.innerHTML = array[i];
                    btn.href = i;
                    btn.onclick = function () {
                        callback(this.href);
                        document.body.removeChild(cover);
                    };
                    GYConfirm.setStyles(btn,{
                        minWidth:"0.6rem",
                        height:"0.5rem",
                        lineHeight:"0.5rem",
                        textAlign:"center",
                        fontSize:"0.18rem",
                        color:"rgb(33,144,243)",
                        backgroundColor:"white"
                    });
                    btnGroup.appendChild(btn);
                }
            }
        }else if(type == "V") {
            // 纵向布局
            GYConfirm.setStyles(confirm,{
                width:"3.5rem",
                minHeight:"1.75rem",
                backgroundColor:"rgba(255,255,255,1.0)",
                left:"0.32rem",
                bottom:"2.1rem",
                borderRadius:"0.1rem",
                transform:"scale(1,0.8)",
                position:"absolute",
                overflow:"hidden"
            });
            setTimeout(function () {
                GYConfirm.setStyles(confirm,{
                    transform:"scale(1,1)",
                    transition:"transform 0.1s"
                });
            },1);
            GYConfirm.setStyles(title,{
                width:"3.5rem",
                height:"0.6rem",
                color:"#000000",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign:"center",
                lineHeight:"0.8rem",
                fontSize:"0.2rem"
            });
            GYConfirm.setStyles(message,{
                width:"3.3rem",
                lineHeight:"0.2rem",
                marginLeft:"0.1rem",
                display:"inline-block",
                textAlign:"center",
                color:"rgba(0,0,0,0.8)",
                marginBottom:"0.2rem"
            });
            GYConfirm.setStyles(btnGroup,{
                width:"3.5rem",
                minHeight:"0.5rem",
                bottom:"0",
                left:"0",
                borderTop:"0.01rem solid gainsboro",
                display:"flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
            });

            for(var i = 0; i < array.length; i++) {
                var btn = document.createElement("div");
                btn.innerHTML = array[i];
                btn.href = i;
                btn.onclick = function () {
                    callback(this.href);
                    document.body.removeChild(cover);
                };
                GYConfirm.setStyles(btn, {
                    width: "3.5rem",
                    height: "0.5rem",
                    lineHeight: "0.5rem",
                    borderBottom: "0.01rem solid gainsboro",
                    textAlign: "center",
                    fontSize: "0.18rem",
                    color: "rgb(33,144,243)",
                    backgroundColor: "white"
                });
                if (i === array.length - 1) {
                    btn.style.display = "none";
                }else if (i === array.length - 2) {
                    btn.style.borderBottom = "none";
                }

                btnGroup.appendChild(btn);
            }

            var lastBtn = document.createElement("div");
            lastBtn.innerHTML = array[array.length - 1];
            GYConfirm.setStyles(lastBtn,{
                position:"absolute",
                width:"3.5rem",
                height:"0.5rem",
                lineHeight:"0.5rem",
                bottom:"1.5rem",
                left:"0.32rem",
                textAlign:"center",
                fontSize:"0.18rem",
                color: "rgb(33,144,243)",
                backgroundColor: "white",
                borderRadius:"0.1rem"
            });
            lastBtn.onclick = function () {
                callback(array.length - 1);
                document.body.removeChild(cover);
            };
            cover.appendChild(lastBtn);
        }

        // 添加至父标签
        confirm.appendChild(title);
        confirm.appendChild(message);
        confirm.appendChild(btnGroup);
        cover.appendChild(confirm);
        document.body.appendChild(cover);
    },
    setStyles:function (obj,styles) {
        for(var style in styles) {
            obj.style[style] = styles[style];
        }
    },
    isAndroid:function () {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        return isAndroid;
    },
    isIos:function () {
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isiOS;
    }
}
