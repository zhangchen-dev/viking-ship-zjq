module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    plugins: [],
   
    // add your custom rules here
    rules: {
        "no-console": [0, "log", "error"],
        '@typescript-eslint/no-unused-vars': 'off',//关闭不能有声明后未被使用的变量或参数
        "prefer-const": 0,// 关闭首选const
        "vue/v-on-hyphenation": "off",// 该规则强制在Vue模板的自定义组件上使用 连字符 列如：v-on  属性名称。
        "lines-between-class-members": [0,"error", "never"], //针对文件class暴露中取消空行的检查\
        "vue/attribute-hyphenation":"off", // 取消属性名必须用连接模式
        "no-unneeded-ternary":0, // 取消三元表达式返回false eslint就报错
        "vue/no-v-html":0, // 取消为了防止xss攻击 禁止使用v-html
        "no-lonely-if":0 //取消如果一个if陈述是该else块中唯一的陈述，那么使用一个else if表格通常会更清晰。 后期再放开 因为这次代码比较多 业务逻辑无法复现问题 改了大多半 最后还是觉得先不动之前老代码
    },
}