// كود تم إنشاؤه تلقائياً. لا تعدِّله.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// كود تم إنشاؤه تلقائياً. لا تعدِّله.
