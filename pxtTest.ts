enum enum1 {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}

//% color="#000000" weight=100 icon="\uf1ec"
//% groups="['Basic', 'Basic_Input', 'Order', 'Shape', 'Special', 'Special_Input']"
namespace Test {
    
    //% block="Hello World!"
    //% group="Basic"
    export function helloworld() {
        console.log("Hello World")
    }
    
    //% block="Input String $value"
    //% value.defl='我是字符串'
    //% group="Basic_Input"
    export function inputString(value:string) {
        console.log("inputString`s value: ")
        console.log(value)
    }
    
    
    //% block="Input Number $value"
    //% value.defl=0
    //% group="Basic_Input"
    export function inputNumber(value: number) {
        console.log("inputNumber`s value: ")
        console.log(value)
    }

    /**
     * 排序
     */

    //% block="I Am No.2"
    //% weight=50
    //% group="Order"
    export function hello2() {

    }

    //% block="I Am No.1"
    //% weight=100
    //% group="Order"
    export function hello1() {

    }

    /**
     * 积木形状
     */

    /**
     * 命令积木
     */
    //% block="command"
    //% group="Shape"
    export function command() {

    }

    /**
     * 圆形积木
     */
    //% block="circle"
    //% group="Shape"
    export function circle(): number {
        return 0;
    }

    /**
     * 菱形积木
     */
    //% block="diamond"
    //% group="Shape"
    export function diamond(): boolean {
        return false;
    }

    /**
     * 事件积木
     */
    //% block="on event"
    //% group="Shape"
    export function onEvent(handler: () => void) {

    }

    /**
     * 特殊积木
     */

    //% block="special1 || $value1| $value2| $value3"
    //% value1.defl="我是字符串"
    //% value2.defl=9527
    //% group="Special"
    export function special1(value1: string, value2: number, value3: boolean) {

    }

    //% block="special2 $value1 $value2 $value3"
    //% value1.defl="我是字符串"
    //% value2.defl=9527
    //% inlineInputMode=inline
    //% group="Special"
    export function special2_inline(value1: string, value2: number, value3: boolean) {

    }

    //% block="special2 $value1 $value2 $value3"
    //% value1.defl="我是字符串"
    //% value2.defl=9527
    //% inlineInputMode=external
    //% group="Special"
    export function special2_external(value1: string, value2: number, value3: boolean){
        
    }

    //% block="special3 | $value1 $value2 $value3"
    //% value1.defl="我是字符串"
    //% value2.defl=9527
    //% value3.shadow=toggleOnOff
    //% inlineInputMode=external
    //% group="Special"
    export function special3(value1: string, value2: number, value3: boolean) {

    }

    //% block="special input enum $value"
    //% value.defl=enum1.Left
    //% group="Special_Input"
    export function specialInputEnum(value: enum1) {
        
    }

    //% block="special input variables $value"
    //% value.defl="我是新变量"
    //% value.shadow=variables_get
    //% group="Special_Input"
    export function specialInputVariables(value: number) {

    }

    //% block="special input array $value"
    //% value.defl=[1,2,3]
    //% group="Special_Input"
    export function specialInputArrayByNumber(value: number[]){}

    //% block="special input array $value"
    //% value.defl=["字符串1","字符串2","字符串3"]
    //% group="Special_Input"
    export function specialInputArrayByString(value: string[]) { }

    //% block="special input array $value"
    //% value.defl=[true, false, true]
    //% group="Special_Input"
    export function specialInputArrayByBoolean(value: boolean[]) { }


    //% block="special input array $value"
    //% value.defl="screen_image_picker"
    //% group="Special_Input"
    export function specialInputArrayByImage(value: Image[]) { }
}