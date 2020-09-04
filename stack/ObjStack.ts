//key:value 没有顺序的 stack 入栈是有顺序的
interface StackObj {
    //模拟数组
    //手动维护指针
    [propName: number]: any;
}
export default class ObjStack {
    private items: StackObj; //JSOn 代替 Array 性能更好
    private count: number;
    //构造器
    constructor() {
        this.items = {};
        this.count = 0;
     }
     push(item: any) {
        //hasMap 0(1) 空间不连续
        this.items[this.count] = item;
        this.count ++;
     }
     pop() {
         if (this.isEmpty()) {
             return undefined;
         }
         this.count --;
         const result = this.items[this.count]
         delete this.items[this.count];
         return result;
     }
     isEmpty() {
         return this.count === 0
     }
     //返回栈顶元素
     peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
     }
     clear() {
         this.items = {};
         this.count = 0;
     }
     size() :number {
         return this.count;
     }
     toString() {
        if (this.isEmpty()) {
         return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 0; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`     
        }
        return objString
    }
}