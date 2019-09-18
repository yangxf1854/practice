
export default {
    /**
     * 找出元素 item 在给定数组 arr 中的位置
     * @param {*} arr   [给定的数组]
     * @param {*} item  [要找的元素]
     */
    indexOf(arr, item) {
        if (Array.prototype.indexOf) { // 如果浏览器支持indexOf
            return arr.indexOf(item);
        } else {
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === item) {
                return i;
              }
            }
        }
        return -1;
    },

    /**
     * 计算给定数组 arr 中所有元素的总和
     * @param {*} arr [给定的数组]
     */
    sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    /**
     * 累加方法reduce
     * @param {*} arr 
     */
    sum2(arr) {
        return arr.reduce((prev, curr, index, arr) => {
            return prev + curr;
        })
    },

    /**
     * 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
     * @param {*} arr   [要移除的数组]
     * @param {*} item  [要移掉的元素]
     */
    remove(arr, item) {
        let newArr = [...arr]; // 浅拷贝，为了不直接修改原数组
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                newArr.splice(i, 1);
            }
        }
        return newArr;
    },

    /**
     * 使用filter 过滤
     * @param {*} arr  [要被过滤的数组]
     * @param {*} item [要移除的元素]
     */
    remove2(arr, item) {
        return arr.filter((ele) => {
            return ele !== item;
        })
    },

    /**
     *在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
     * @param {*} arr  [要被添加的数组]
     * @param {*} item [要被添加的元素]
     */
    append(arr, item) {
        let newArr = [...arr];
        newArr.unshift(item);
        return newArr;
    },

    /**
     *删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
     * @param {*} arr [要被删除的数组]
     */
    curtail(arr) {
        let newArr = arr.splice(0); // 复制数组， 为了不直接修改原数组
        newArr.shift();
        return newArr;
    },

    /**
     *合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
     * @param {*} arr1 [要合并的数组1]
     * @param {*} arr2 [要合并的数组2]
     */
    concat(arr1, arr2) {
        let newArr = arr1.concat(arr2);
        return newArr;
    },

    /**
     *给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
     * @param {*} str [给定的字符串]
     */
    containesNumber(str) {
        const numReg =  /\d/; // 数字字符
        return numReg.test(str);
    },
    
    /**
     * 继承
     * @param {*} o  要拷贝的对象
     * @param {*} p  被拷贝的对象
     */
    extend(o, p) {
        for (let prop in p) {
            o[prop] = p[prop];
        }
        return o;
    },

    /* 
    * 银行卡号每隔几位添加分隔符方法
    * @param str string [要分割的字符串(卡号)]
    * @param gap number [以多少位分隔]
    * @param sep        [分隔符]
    * @return string    [返回值是分隔后的字符串]
    */
   formatSplitString(str, gap, sep) {
       if (!str) {
           return '';
       }
       let l = str.length - 1;
       let strArr = str.split(''); // 将字符串分割成字符串数组
       return strArr.map((elem, i) => {
           if (i % gap === gap - 1 && i !== l) {
               return elem + sep;
           } else {
               return elem;
           }
       }).join('');
   },
   /**
    * 数据{}属性取值，属性嵌套取值，为空且不存在安全取值方法
    * @param {obj} obj           [要从取值的对象]
    * @param {string} props      [要从对象中取的属性名]
    * @param {*} defaultValue    [属性的默认值]
    */
   safeData (obj, props, defaultValue) {
    if (!obj) { // 如果没有返回数据，直接展示默认值
        return defaultValue;
    }
    if (typeof (obj[props]) !== 'undefined') { // 数据单层，typeof (undefined) = 'undefined'
        if (obj[props] === null ) {
            return defaultValue;
        }
        return obj[props];
    }
    // 数据多层嵌套
    let propsArr = props.split('.'); // 多层分割成数组
    // 循环一层一层取
    for (let i = 0, l = propsArr.length; i < l; i++) {
        let k = propsArr[i]; 
        if (obj && typeof obj === 'object' && k in obj && (obj[k] !== null)) {
            obj = obj[k]; // obj重新赋值为新的一层
        } else {
            return defaultValue;
        }
    }
    return obj;
   }
}